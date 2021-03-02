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
      <v-card class="my-5">
        <v-card-title>
          <h2>{{ $t('about_') }}</h2>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <template v-if="$i18n.locale === 'ja' || true">
              <p>
                このシステムは、東京大学総合図書館所蔵の田中芳男文庫『捃拾帖』を中心とした電子展示サイトです。貼り込み資料単位の検索ができます。
              </p>
            </template>
            <template v-else>
              <p>Welcome to our Hieratische Paläographie DB!</p>
              <p>
                This is a retrieval system for hieratic scripts; it uses IIIF
                format images (owned by the Asian Research Library of the
                University of Tokyo) of Georg Möller's
                <i>Hieratische Paläographie</i> (1909–36).
              </p>
              <p>
                We hope this platform is useful for everyone who has an interest
                in Hieratic scripts.
              </p>
              <p>HDB (Hieratic Database) Project Team</p>
            </template>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="my-5">
        <v-card-title>
          <h2>{{ $t('updates') }}</h2>
        </v-card-title>
        <v-card-text>
          <template v-if="$i18n.locale === 'ja' || true">
            <ul class="text--primary">
              <li>2021年1月5日: プロトタイプシステムを公開しました。</li>
            </ul>
          </template>
          <template v-else>
            <div class="text--primary">
              <ul>
                <li>
                  9, Nov., 2020: Updated: Japanese page, Item detail page, RDF
                  data, and SSG functionality were added.
                </li>
                <li>
                  11, Dec., 2019: Uploaded the data of Möller No.1 to 613bis,
                  vols.1-3.
                </li>
              </ul>
            </div>
          </template>
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
      title: process.env.siteName,
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
