// this class will probably come to represent the headers requirements
// of making api requests. until then, it's a blank placeholder
// for something found online

// import axios, { AxiosInstance, AxiosResponse } from 'axios';

// declare module 'axios' {
//   interface AxiosResponse<T = any> extends Promise<T> {}
// }

// abstract class HttpClient {
//   protected readonly instance: AxiosInstance;

//   public constructor(baseURL: string) {
//     this.instance = axios.create({
//       baseURL,
//     });

//     this._initializeResponseInterceptor();
//   }

//   private _initializeResponseInterceptor = () => {
//     this.instance.interceptors.response.use(
//       this._handleResponse,
//       this._handleError,
//     );
//   };

//   private _handleResponse = ({ data }: AxiosResponse) => data;

//   protected _handleError = (error: any) => Promise.reject(error);
// }