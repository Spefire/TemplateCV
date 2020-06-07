<template>
  <div class="skills-section">
    <div class="section-left-layout">
      <h2 class="skills-title">Compétences</h2>
    </div>
    <div class="section-right-layout">
      <div v-for="(skill, index) in skillList" :key="index">
        <h2>{{ skill.name }}</h2>
        <h4>{{ skill.place }} • {{ skill.date }}</h4>
        <p>{{ skill.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Skills.ts"></script>
<style scoped lang="scss" src="./Skills.scss"></style>
