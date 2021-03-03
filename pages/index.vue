<template>
  <div>
    <section class="mb-5">
      <v-parallax :src="baseUrl + '/img/ogp/home.jpg'" height="300">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-center">
            <b>{{ title }}</b>
          </h1>
          <v-btn
            large
            class="mt-5"
            :to="localePath({ name: 'search' })"
            color="primary"
            >{{ $t('try_out') }}</v-btn
          >
        </v-layout>
      </v-parallax>
    </section>

    <v-container>
      <v-card flat class="my-5">
        <v-card-title>
          <h2>{{ $t('about_') }}</h2>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <p>
              {{ siteDesc }}
            </p>
          </div>
        </v-card-text>
      </v-card>

      <v-card flat class="my-5">
        <v-card-title>
          <h2>{{ $t('updates') }}</h2>
        </v-card-title>
        <v-card-text>
          <ul class="text--primary">
            <li>2021年XX月XX日: プロトタイプシステムを公開しました。</li>
          </ul>
        </v-card-text>
      </v-card>

      <br />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      title: this.$t(process.env.siteName),
      siteDesc: process.env.siteDesc,
    }
  },
  head() {
    const title = this.title
    return {
      titleTemplate: null,
      title,
    }
  },
}
</script>
