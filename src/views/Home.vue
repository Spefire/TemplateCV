<template>
  <div class="home-page">
    <Header />
    <div class="home-section">
      <h1>Cécile Blin</h1>
      <p>I'm a Manila based graphic designer, illustrator and webdesigner creating awesome and effective visual identities for companies of all sizes around the globe. Let's start scrolling and learn more about me.</p>
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
    <div class="about-section">
      <div class="section-left-layout">
        <div class="about-profile" />
      </div>
      <div class="section-right-layout">
        <h2>Présentation</h2>
        <p
          class="about-text"
        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
        <div class="about-links">
          <a v-bind:href="cvFile" download>
            <img alt="Télécharger" v-bind:src="folderUploadIcon" />Télécharger le CV
          </a>
          <a>
            <img alt="Enveloppe" v-bind:src="envelopIcon" />Me contacter
          </a>
        </div>
      </div>
    </div>
    <div class="education-section">
      <div class="section-left-layout">
        <h2 class="education-title">Formations</h2>
      </div>
      <div class="section-right-layout">
        <div>
          <h2>University of Life</h2>
          <h4>Master in Graphic Design • April 2007</h4>
          <p
            class="about-text"
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
        </div>
        <div>
          <h2>University of Life</h2>
          <h4>Master in Graphic Design • April 2007</h4>
          <p
            class="about-text"
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
        </div>
      </div>
    </div>
    <div class="footer-button">
      <img v-bind:src="circleDownIcon" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss"></style>
