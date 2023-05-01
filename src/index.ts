import axios from "axios";


// Type definitions for GET /BIS/V1/{BUSINESSID} endpoint
interface Name {
  order: number;
  version: number;
  name: string;
  registrationDate: string;
  endDate: string | null;
  source: number;
}

interface Address {
  careOf: string | null;
  street: string;
  postCode: string;
  type: number;
  version: number;
  city: string;
  country: string | null;
  registrationDate: string;
  endDate: string | null;
  language: string;
  source: number;
}

interface CompanyForm {
  version: number;
  name: string;
  type: string | null;
  registrationDate: string;
  endDate: string | null;
  language: string;
  source: number;
}

interface RegisteredEntry {
  authority: number;
  register: number;
  status: number;
  registrationDate: string;
  endDate: string | null;
  statusDate: string;
  language: string;
  description: string;
}


//show this
interface CompanyDetails {
  businessId: string;
  name: string;
  registrationDate: string;
  companyForm: string;
  detailsUri: string | null;
  liquidations: any[]; 
  names: Name[];
  auxiliaryNames: Name[];
  addresses: Address[];
  companyForms: CompanyForm[];
  businessLines: any[]; 
  languages: any[]; 
  registedOffices: Name[];
  contactDetails: any[]; 
  registeredEntries: RegisteredEntry[];
  businessIdChanges: any[];
}

// Type definitions for GET /BIS/V1 endpoint
interface CompanySummary {
  businessId: string;
  name: string;
  companyForm: string;
  registrationDate: string;
  liquidations: any[];
}

interface CompaniesSummaryResponse {
  totalResults: number;
  maxResults: number;
  resultFrom: number;
  companies: CompanySummary[];
}

interface CompaniesDetailsResponse {
  companies: CompanyDetails[];
}

const getBusiness = async (maxResults: number, resultFrom: number, streetAddressPostCode: string) => {
    try {
        const companiesSummaryResponse = await axios.get(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}`);
        const datas = companiesSummaryResponse.data.results.map((c: CompanyDetails) => c.businessId);
        //data this point may have multiple data
        console.log(datas)
        console.log(getBusinessById(datas[0]))
        return datas
    } catch (error) {
        console.error(error)
        throw error
    }
}


const getBusinessById = async (businessId: string[]) => {
    const result = await axios.get(`http://avoindata.prh.fi/bis/v1/${businessId}`)
    console.log(result.data.results)
    return result.data
}

// getBusinessById('3361054-2')
getBusiness(3, 0, '70100')


