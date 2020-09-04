<template>
  <div>
    <ul v-if="weaponList.length > 0" id="weaponList">
      <li v-for="weapon in weaponList" :key="weapon.id">{{weapon.weaponCategory}}</li>
    </ul>
    <ul v-else>
      <li>
        {{weapon.weaponCategory}}
      </li>
    </ul>
  </div>
</template>

<script src="./WeaponTable.ts" lang="ts" />
