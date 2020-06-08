<template>
  <header
    v-bind:class="{ 'with-background': fixNavbar }"
    v-bind:style="{ opacity: fixNavbar ? '1.0' : opacNavbar }"
  >
    <nav>
      <div
        v-scroll-to="{ el: '#nav-home', offset: 0 }"
        v-bind:class="{ active: currentLocation === 'nav-home' }"
      >
        Accueil
      </div>
      <div
        v-scroll-to="{ el: '#nav-about', offset: 0 }"
        v-bind:class="{ active: currentLocation == 'nav-about' }"
      >
        Présentation
      </div>
      <div
        v-scroll-to="{ el: '#nav-education', offset: -50 }"
        v-bind:class="{ active: currentLocation == 'nav-education' }"
      >
        Formations
      </div>
      <div
        v-scroll-to="{ el: '#nav-experiences', offset: -50 }"
        v-bind:class="{ active: currentLocation == 'nav-experiences' }"
      >
        Expériences
      </div>
      <div
        v-scroll-to="{ el: '#nav-skills', offset: -50 }"
        v-bind:class="{ active: currentLocation == 'nav-skills' }"
      >
        Compétences
      </div>
      <div
        v-scroll-to="{ el: '#nav-contact', offset: -50 }"
        v-bind:class="{ active: currentLocation == 'nav-contact' }"
      >
        Contact
      </div>
    </nav>
  </header>
</template>

<script lang="ts" src="./Header.ts"></script>
<style scoped lang="scss" src="./Header.scss"></style>
