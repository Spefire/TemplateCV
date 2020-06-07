<template>
  <div class="contact-section">
    <div class="section-left-layout">
      <div class="contact-profile" />
    </div>
    <div class="section-right-layout">
      <h2>Contact</h2>
      <p class="contact-text">{{ contactText }}</p>
      <div class="contact-links">
        <a v-bind:href="cvFile" download>
          <img alt="Télécharger" v-bind:src="folderUploadIcon" />Télécharger le CV
        </a>
        <a>
          <img alt="Enveloppe" v-bind:src="envelopIcon" />Me contacter
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Contact.ts"></script>
<style scoped lang="scss" src="./Contact.scss"></style>
