import axios from 'axios'

export default class RestUtility<T> {

    static async apiGet<T>(url: string): Promise<T[]> {
        let response = await axios.get<T[]>(url);
        return response.data;
    }
  }