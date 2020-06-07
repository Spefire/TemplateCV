<template>
  <div class="about-section">
    <div class="section-left-layout">
      <div class="about-profile" />
    </div>
    <div class="section-right-layout">
      <h2>Présentation</h2>
      <p class="about-text" v-html="aboutText"></p>
      <div class="about-links">
        <a class="link-button" v-bind:href="cvFile" download>
          <img alt="Télécharger" v-bind:src="folderUploadIcon" />Télécharger le CV
        </a>
        <a class="link-button">
          <img alt="Contact" v-bind:src="usersIcon" />Me contacter
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./About.ts"></script>
<style scoped lang="scss" src="./About.scss"></style>
