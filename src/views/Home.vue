<template>
  <div class="home-page">
    <Header />
    <div class="home-section">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <div class="home-links">
        <!--img alt="Facebook" v-bind:src="facebookIcon" />
        <img alt="Twitter" v-bind:src="twitterIcon" />
        <img alt="Instagram" v-bind:src="instagramIcon" />
        <img alt="Twitch" v-bind:src="twitchIcon"/-->
        <img alt="GitHub" v-bind:src="githubIcon" />
        <img alt="LinkedIn" v-bind:src="linkedinIcon" />
      </div>
    </div>
    <div class="home-button">
      <img v-bind:src="circleDownIcon" />
    </div>
    <About />
    <Education />
    <Experiences />
    <div class="footer-button">
      <img v-bind:src="circleDownIcon" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss"></style>
