<template>
  <div class="education-section">
    <div class="section-left-layout">
      <h2 class="education-title">Formations</h2>
    </div>
    <div class="section-right-layout">
      <div v-for="(educ, index) in educList" :key="index">
        <h2>{{ educ.name }}</h2>
        <h4>{{ educ.place }} • {{ educ.date }}</h4>
        <p>{{ educ.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Education.ts"></script>
<style scoped lang="scss" src="./Education.scss"></style>
