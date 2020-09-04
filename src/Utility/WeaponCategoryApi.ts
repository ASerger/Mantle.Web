import BaseWeaponCategory, { IBaseWeaponCategory } from '@/Models/IBaseWeapon'
import RestUtility from './RestUtility'

export default class WeaponCategoryApi extends RestUtility {
  static url = 'api/BaseWeaponCategory'

  static async getAllWeapons(): Promise<IBaseWeaponCategory[]> {
    const response = await RestUtility.getAll<IBaseWeaponCategory>(WeaponCategoryApi.url)

    return response.map(baseWeaponDatum => new BaseWeaponCategory(baseWeaponDatum))
  }

  static async getByWeaponId(id: number): Promise<IBaseWeaponCategory> {
    const response = await RestUtility.getById<IBaseWeaponCategory>(WeaponCategoryApi.url, id)

    return new BaseWeaponCategory(response)
  }
}
