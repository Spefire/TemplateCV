<template>
  <div id="nav-hobbies" class="hobbies-section">
    <div class="section-left-layout">
      <h2 class="hobbies-title">Loisirs / Hobbies</h2>
    </div>
    <div class="section-right-layout">
      <div class="hobbies-list">
        <HobbieState
          v-for="(hobbie, index) in hobbieList"
          v-bind:key="'hobbieList' + index"
          v-bind:name="hobbie.name"
          v-bind:image="hobbie.image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Hobbies.ts"></script>
<style scoped lang="scss" src="./Hobbies.scss"></style>
