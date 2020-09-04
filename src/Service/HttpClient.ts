import axios, { AxiosRequestConfig } from 'axios'

export default () => {
  const options: AxiosRequestConfig = {
    baseURL: 'https://localhost:44361',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'// ,
      // 'Access-Control-Allow-Origin': '*'
    }
  }

  const instance = axios.create(options)
  return instance
}
