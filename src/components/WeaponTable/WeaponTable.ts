import { Component, Prop, Vue } from 'vue-property-decorator'
import { IBaseWeaponCategory, BaseWeaponCategoryDTO } from '@/Models/IBaseWeapon'
import WeaponCategoryApi from '@/Utility/WeaponCategoryApi'

@Component
export default class WeaponTable extends Vue {
  @Prop() private weaponType!: string
  private weaponList: IBaseWeaponCategory[] = []
  private weapon: IBaseWeaponCategory = new BaseWeaponCategoryDTO()

  async mounted(): Promise<void> {
    this.weaponList = await WeaponCategoryApi.getAllWeapons()
    // this.weapon = await WeaponCategoryApi.getByWeaponId(5)
  }
}
