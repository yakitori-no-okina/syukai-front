class ApiService {
   url: string
   constructor() {
       this.url = process.env.REACT_APP_API_URL!
   }
}

export default ApiService;
