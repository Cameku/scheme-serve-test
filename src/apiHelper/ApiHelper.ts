export class ApiHelper {
    getApiPostCodeDataAsync = () => {
      const url =  'http://api.getthedata.com/postcode/MK5+7BD';
      let response = fetch(url)
      return response;
    }
}