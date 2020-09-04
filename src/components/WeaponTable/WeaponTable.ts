import { Component, Prop, Vue } from 'vue-property-decorator'
import { IBaseWeaponCategory } from '@/Models/IBaseWeapon'
import WeaponCategoryApi from '@/Utility/WeaponCategoryApi'

@Component
export default class HelloWorld extends Vue {
  @Prop() private weaponType!: string
  private weapons: IBaseWeaponCategory[] = []

  async mounted(): Promise<void> {
    this.weapons = await WeaponCategoryApi.getAllWeapons()
  }
}
