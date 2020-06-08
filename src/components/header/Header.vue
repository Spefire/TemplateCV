<template>
  <header
    v-bind:class="{ 'with-background': fixNavbar }"
    v-bind:style="{ 'opacity': fixNavbar ? '1.0' : opacNavbar }"
  >
    <nav>
      <a>Accueil</a>
      <a>Présentation</a>
      <a>Formations et Expériences</a>
      <a>Compétences</a>
      <a>Contact</a>
    </nav>
  </header>
</template>

<script lang="ts" src="./Header.ts"></script>
<style scoped lang="scss" src="./Header.scss"></style>
