<template>
  <div id="nav-languages" class="languages-section">
    <div class="section-left-layout">
      <h2 class="languages-title">Langues</h2>
    </div>
    <div class="section-right-layout">
      <div class="languages-list">
        <ProgressBar
          v-for="(language, index) in languageList"
          v-bind:key="'languageList' + index"
          v-bind:name="language.name"
          v-bind:value="language.value"
        />
      </div>
      <ul>
        <li
          v-for="(otherLanguage, index) in otherLanguageList"
          v-bind:key="'otherLanguageList' + index"
        >{{ otherLanguage }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./Languages.ts"></script>
<style scoped lang="scss" src="./Languages.scss"></style>
