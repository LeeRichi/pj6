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

//result template
export interface CompanyDetails {
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

export interface CompaniesDetailsResponse {
  companies: CompanyDetails[];
}
