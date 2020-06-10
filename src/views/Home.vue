<template>
  <div>
    <Header />
    <div id="nav-home" class="home-section">
      <h1>{{ name }}</h1>
      <p v-html="description"></p>
      <div class="home-links">
        <!--span class="icon home-icon icon-facebook"></span>
        <span class="icon home-icon icon-twitter"></span>
        <span class="icon home-icon icon-instagram"></span>
        <span class="icon home-icon icon-twitch"></span-->
        <span class="icon home-icon icon-github"></span>
        <span class="icon home-icon icon-linkedin"></span>
      </div>
    </div>
    <div class="home-button" v-scroll-to="{ el: '#nav-about', offset: 0 }">
      <span class="icon home-icon icon-circle-down"></span>
    </div>
    <About />
    <Education />
    <Experiences />
    <Skills />
    <Languages />
    <Hobbies />
    <Contact />
    <div class="footer-button" v-scroll-to="{ el: '#nav-home', offset: 0 }">
      <span class="icon home-icon icon-circle-down"></span>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss"></style>
