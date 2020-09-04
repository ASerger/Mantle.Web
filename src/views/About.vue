<template>
  <div class="about">
    <WeaponTable></WeaponTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WeaponTable from '@/components/WeaponTable/WeaponTable.vue' // @ is an alias to /src

@Component({
  components: {
    WeaponTable
  }
})
export default class About extends Vue {}
</script>
