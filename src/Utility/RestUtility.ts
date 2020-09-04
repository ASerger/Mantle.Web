import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export default class RestUtility<T> {
  static baseApiUrl = 'https://localhost:44361/'
  // static baseOptions: AxiosRequestConfig

  // static apiCall = axios.request((config: AxiosRequestConfig) => {
  //   config.setHeaders = {
  //     'Content-Type': 'application/json; charset=utf-8'
  //     //,
  //     // 'Access-Control-Allow-Origin': 'https://localhost:8080'
  //   }

  //   RestUtility.baseOptions.headers['Content-Type'] = 'application/json'
  // })

  static async getAll<T>(url: string): Promise<T[]> {
  url = `${this.baseApiUrl}${url}`
    const response = await axios.get<T[]>(url)
    return response.data
}

  // static async setHeaders(): Promise<void> {
  //   (await this.apiCall.request()).headers
  // }
}
