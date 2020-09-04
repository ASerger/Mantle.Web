import BaseWeaponCategory, { IBaseWeaponCategory } from '@/Models/IBaseWeapon'
import RestUtility from './RestUtility'

export default class WeaponCategoryApi {
  // private static apiCall = axios.create();

  static async getAllWeapons(): Promise<IBaseWeaponCategory[]> {
    const url = 'api/baseweaponcategory'
    const response = await RestUtility.getAll<IBaseWeaponCategory>(url)

    return response.map(baseWeaponCategoryDTO => new BaseWeaponCategory(baseWeaponCategoryDTO))
  }
}
