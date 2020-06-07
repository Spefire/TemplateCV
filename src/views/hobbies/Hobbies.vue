<template>
  <div class="hobbies-section">
    <div class="section-left-layout">
      <h2 class="hobbies-title">Loisirs / Hobbies</h2>
    </div>
    <div class="section-right-layout">
      <div v-for="(hobbie, index) in hobbieList" :key="index">
        <h2>{{ hobbie.name }}</h2>
        <h4>{{ hobbie.place }} • {{ hobbie.date }}</h4>
        <p>{{ hobbie.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Hobbies.ts"></script>
<style scoped lang="scss" src="./Hobbies.scss"></style>
