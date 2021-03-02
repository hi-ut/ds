<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="breadcrumbs">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
    <iframe
      :src="getIframeUrl()"
      width="100%"
      height="400"
      allowfullscreen
      frameborder="0"
    ></iframe>
    <!--
    <v-sheet class="py-2" color="grey lighten-3">
      <v-container>
        <h2>{{ label }}</h2>
      </v-container>
    </v-sheet>
    -->
    <v-container class="mt-5">
      <p class="text-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="mx-1"
              icon
              target="_blank"
              :href="getCurationUrl()"
              v-on="on"
              ><img :src="baseUrl + '/img/icons/icp-logo.svg'" width="30px"
            /></v-btn>
          </template>
          <span>{{ 'IIIF Curation Viewer' }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              class="mx-1"
              target="_blank"
              :href="
                baseUrl + '/snorql/?describe=' + prefix + '/api/data/' + id
              "
              v-on="on"
              ><img :src="baseUrl + '/img/icons/rdf-logo.svg'" width="30px"
            /></v-btn>
          </template>
          <span>{{ 'RDF' }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              class="mx-1"
              target="_blank"
              :href="source.sourceData"
              v-on="on"
              ><img :src="baseUrl + '/img/icons/json-logo.svg'" width="30px"
            /></v-btn>
          </template>
          <span>{{ 'JSON' }}</span>
        </v-tooltip>

        <ResultOption
          :item="{
            label: title,
            url: url,
          }"
        />
      </p>

      <v-simple-table class="mt-10">
        <template #default>
          <tbody>
            <tr>
              <td width="30%">{{ $t('URL') }}</td>
              <td style="overflow-wrap: break-word" class="py-5">
                <a :href="url">{{ url }}</a>
              </td>
            </tr>
            <tr>
              <td width="30%">{{ $t('label') }}</td>
              <td class="py-5">
                {{ $utils.formatArrayValue(title) }}
              </td>
            </tr>
            <tr>
              <td width="30%">{{ $t('description') }}</td>
              <td
                class="py-5"
                v-html="$utils.formatArrayValue(source.description, '<br />')"
              ></td>
            </tr>

            <template
              v-for="(value, n) in [
                'type',
                'agential',
                'spatial',
                'temporal',
                'about',
                'source',
              ]"
            >
              <tr v-if="source[value]" :key="n">
                <td width="30%">{{ $t(value) }}</td>
                <td class="py-5">
                  <nuxt-link
                    v-for="(tag, key) in source[value]"
                    :key="key"
                    class="mr-2"
                    :to="
                      localePath({
                        name: 'search',
                        query: getQuery(value, tag),
                      })
                    "
                    >{{ tag }}</nuxt-link
                  >
                </td>
              </tr>
            </template>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>

    <v-container fluid>
      <MoreLikeThis class="mb-5" :item-id="id" :query="source.tags" />

      <SimilarImages class="mb-5" :item-id="id" :query="source.images" />
    </v-container>

    <v-sheet class="text-center pa-10 mt-10">
      <small>
        <h3 class="mb-5">{{ $t('license') }}</h3>

        <template v-if="$i18n.locale == 'ja'">
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
            ><img
              alt="クリエイティブ・コモンズ・ライセンス"
              style="border-width: 0"
              src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a
          ><br />この作品は<a
            rel="license"
            href="http://creativecommons.org/licenses/by/4.0/"
            >クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a
          >の下に提供されています。
        </template>
        <template v-else>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
            ><img
              alt="Creative Commons License"
              style="border-width: 0"
              src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a
          ><br />This work is licensed under a
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
            >Creative Commons Attribution 4.0 International License</a
          >.
        </template>
      </small>
    </v-sheet>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ payload, app }) {
    if (payload) {
      return payload
    } else {
      const id = app.context.route.params.id

      const url = 'https://gimli-eu-west-1.searchly.com/main/_doc/' + id
      const username = 'search'
      const password = '1ff162746e60feac7c91c12d37cf0ca6'

      const response = await axios.get(url, {
        auth: {
          username,
          password,
        },
      })

      const data = response.data
      const source = data._source

      if (source.manifest) {
        source.manifest = source.manifest[0]
      }

      if (source.member) {
        source.member = source.member[0]
      }

      if (source._url) {
        source._url = source._url[0]
      }

      source.id = response._id
      source.sourceData =
        'https://' + username + ':' + password + '@' + url.split('://')[1]

      return { source }
    }
  },

  data() {
    return {
      baseUrl: process.env.BASE_URL,
      prefix: 'https://hi-ut.github.io/knowledge',
      userUids: [],
    }
  },

  computed: {
    // 算出 getter 関数
    url() {
      // `this` は vm インスタンスを指します
      return this.source._url
    },
    id() {
      return this.$route.params.id
    },
    title() {
      return this.source._label
    },
    breadcrumbs() {
      return [
        {
          text: this.$t('HOME'),
          disabled: false,
          to: this.localePath({ name: 'index' }),
          exact: true,
        },
        {
          text: this.$t('search'),
          disabled: false,
          to: this.localePath({ name: 'search' }),
          exact: true,
        },
        {
          text: this.title,
        },
      ]
    },
  },

  methods: {
    getIframeUrl() {
      const manifest = this.source.manifest
      if (!this.source.member) {
        const url =
          'https://universalviewer.io/examples/uv/uv.html#?manifest=' + manifest
        return url
      } else {
        const memberId = this.source.member

        const url =
          this.baseUrl +
          '/curation/?manifest=' +
          manifest +
          '&canvas=' +
          encodeURIComponent(memberId)
        return url
      }
    },

    getQuery(value, tag) {
      const map = {}
      map[`fc-${value}`] = tag
      return map
    },

    getCurationUrl() {
      const manifest = this.source.manifest
      if (!this.source.member) {
        const url =
          'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=' +
          manifest
        return url
      } else {
        const memberId = this.source.member

        const memberIdSpl = memberId.split('#xywh=')
        const canvasId = memberIdSpl[0]
        const xywh = memberIdSpl[1]
        const url =
          'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=' +
          manifest +
          '&canvas=' +
          encodeURIComponent(canvasId) +
          '&xywh=' +
          xywh +
          '&xywh_highlight=border'
        return url
      }
    },
  },

  head() {
    const title = this.title
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.thumbnail,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>
