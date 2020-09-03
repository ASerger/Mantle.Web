import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private weaponType!: string;

  private loadData(): void {
      
  }

  mounted() {

  }
}
