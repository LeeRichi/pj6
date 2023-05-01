import axios from "axios";
import { CompanyDetails } from './interfaces'
import { CompaniesDetailsResponse } from './interfaces'

const getBusinessById = async (businessId: string) => {
    const result = await axios.get(`http://avoindata.prh.fi/bis/v1/${businessId}`)
    // console.log(result.data.results)
    return result.data.results
}

const getBusiness = async (maxResults: number, resultFrom: number, streetAddressPostCode: string) => {
    try {
        const companiesSummaryResponse = await axios.get(`https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}`);
        const datasUrls = companiesSummaryResponse.data.results.map((c: CompanyDetails) => c.businessId);
        //data at this point may have multiple urls
        for (const id of datasUrls) {
            const eachData: CompaniesDetailsResponse = await getBusinessById(id);
            console.log(eachData)
        }
        return datasUrls
    } catch (error) {
        console.error(error)
        throw error
    }
}

//test
getBusiness(3, 0, '70100')


