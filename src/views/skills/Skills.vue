<template>
  <div class="skills-section">
    <div class="section-left-layout">
      <h2 class="skills-title">Compétences</h2>
    </div>
    <div class="section-right-layout skills-list">
      <ProgressBar
        v-for="(skill, index) in skillList"
        v-bind:key="index"
        v-bind:name="skill.name"
        v-bind:value="skill.value"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./Skills.ts"></script>
<style scoped lang="scss" src="./Skills.scss"></style>
