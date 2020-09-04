import api from '../Service/HttpClient'

export default class RestUtility {
  static async getAll<T>(url: string): Promise<T[]> {
    const response = await api().get<T[]>(url)
    return response.data
  }

  static async getById<T>(url: string, id: number): Promise<T> {
    url += `/${id}`
    const response = await api().get<T>(url)
    return response.data
  }
}
