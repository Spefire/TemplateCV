<template>
  <header
    v-bind:class="{ 'with-background': fixNavbar }"
    v-bind:style="{ opacity: fixNavbar ? '1.0' : opacNavbar }"
  >
    <nav>
      <div v-scroll-to="{ el: '#nav-home', offset: 0 }">Accueil</div>
      <div v-scroll-to="{ el: '#nav-about', offset: 0 }">Présentation</div>
      <div v-scroll-to="{ el: '#nav-education', offset: -50 }">
        Formations et Expériences
      </div>
      <div v-scroll-to="{ el: '#nav-skills', offset: -50 }">Compétences</div>
      <div v-scroll-to="{ el: '#nav-contact', offset: -50 }">Contact</div>
    </nav>
  </header>
</template>

<script lang="ts" src="./Header.ts"></script>
<style scoped lang="scss" src="./Header.scss"></style>
