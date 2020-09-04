<template>
  <div>
    <!-- <v-list-item :key="index" v-for="(weapons, index) in weapons">
          {{weapons.weaponCategory}}
    </v-list-item>-->
    <ul id="weaponList">
      <li v-for="weapon in weapons" :key="weapon.id">{{weapon.weaponCategory}}</li>
    </ul>
  </div>
</template>

<script src="./WeaponTable.ts" lang="ts" />
