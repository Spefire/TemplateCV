<template>
  <div id="nav-skills" class="skills-section">
    <div class="section-left-layout">
      <h2 class="skills-title">Compétences</h2>
    </div>
    <div class="section-right-layout">
      <div class="skills-list">
        <ProgressBar
          v-for="(skill, index) in skillList"
          v-bind:key="'skillList' + index"
          v-bind:name="skill.name"
          v-bind:value="skill.value"
        />
      </div>
      <ul>
        <li
          v-for="(otherSkill, index) in otherSkillList"
          v-bind:key="'otherSkillList' + index"
        >{{ otherSkill }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./Skills.ts"></script>
<style scoped lang="scss" src="./Skills.scss"></style>
