<template>
  <div class="hobbie-state">
    <div class="hobbie-img">
      <img v-bind:src="image" />
    </div>
    <label>{{name}}</label>
  </div>
</template>

<script lang="ts" src="./HobbieState.ts"></script>
<style scoped lang="scss" src="./HobbieState.scss"></style>
