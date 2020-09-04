export interface IBaseWeaponCategory {
  id?: number;
  modifiedOn: Date;
  modifiedBy: string;
  weaponCategory: string;
  cost: number;
  weight: number;
  isMartial: boolean;
  isRange: boolean;
  baseDamageTypeId: number;
  baseDamageType: string;
  baseDiceId: number;
  baseDice: string;
};

export class BaseWeaponCategoryDTO implements IBaseWeaponCategory {
  id?: number;
  modifiedOn = new Date();
  modifiedBy = '';
  weaponCategory = '';
  cost = -1;
  weight = -1;
  isMartial = false;
  isRange = false;
  baseDamageTypeId = -1;
  baseDamageType = '';
  baseDiceId = -1;
  baseDice = '';
}

export default class BaseWeaponCategory extends BaseWeaponCategoryDTO {
  constructor(dto: BaseWeaponCategoryDTO) {
    super()
    Object.assign(this, dto)
  }
}
