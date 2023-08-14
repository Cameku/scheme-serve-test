import { CrimeDataResponseType, GetPostCodeApiResponseType } from "../type";

export class ApiHelper {
    getApiPostCodeDataAsync = async (postcode: string): Promise<GetPostCodeApiResponseType> => {
        const url = 'http://api.getthedata.com/postcode/' + postcode;
        let response = await fetch(url);

        if (!response!.ok) {
            const message = 'Could not find post code data...'
            throw new Error(message);
        }

        const responseObject: GetPostCodeApiResponseType = await response!.json();

        if (responseObject.status === "no_match") {
            throw new Error("No matching postcode.");
        }

        return responseObject;
    };

    getCrimeApiDataAsync = async (lat: string, long: string): Promise<CrimeDataResponseType[]> => {
        const response = await fetch(`https://data.police.uk/api/crimes-at-location?date=2023-02&lat=${lat}&lng=${long} `);
        
        if (!response.ok) {
            const message = 'Could not find crime data...';
            throw new Error(message);
        }
        const crimeApiData: CrimeDataResponseType[] = await response.json();
        console.log(crimeApiData + ' ....Crime Api');

        return crimeApiData;
    }

}
