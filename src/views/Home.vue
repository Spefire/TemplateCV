<template>
  <div class="home-page">
    <Header />
    <div id="nav-home" class="home-section">
      <h1>{{ name }}</h1>
      <p v-html="description"></p>
      <div class="home-links">
        <!--img alt="Facebook" v-bind:src="facebookIcon" />
        <img alt="Twitter" v-bind:src="twitterIcon" />
        <img alt="Instagram" v-bind:src="instagramIcon" />
        <img alt="Twitch" v-bind:src="twitchIcon"/-->
        <img alt="GitHub" v-bind:src="githubIcon" />
        <img alt="LinkedIn" v-bind:src="linkedinIcon" />
      </div>
    </div>
    <div class="home-button" v-scroll-to="{ el: '#nav-about', offset: 0 }">
      <img v-bind:src="circleDownIcon" />
    </div>
    <About />
    <Education />
    <Experiences />
    <Skills />
    <Languages />
    <Hobbies />
    <Contact />
    <div class="footer-button" v-scroll-to="{ el: '#nav-home', offset: 0 }">
      <img v-bind:src="circleDownIcon" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss"></style>
