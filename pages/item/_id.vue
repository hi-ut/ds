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
    <template v-if="getIframeUrl()">
      <iframe
        :src="getIframeUrl()"
        width="100%"
        height="300"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </template>
    <template v-else>
      <v-sheet color="grey lighten-2">
        <v-img contain :src="source._thumbnail[0]" height="150" />
      </v-sheet>
    </template>

    <!--
    <v-sheet class="py-2" color="grey lighten-3">
      <v-container>
        <h2>{{ label }}</h2>
      </v-container>
    </v-sheet>
    -->
    <v-container class="mt-5">
      <h1 class="mb-5">
        {{ $utils.formatArrayValue(title) }}
      </h1>

      <p class="text-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="mx-2"
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
              class="mx-2"
              target="_blank"
              :href="baseUrl + '/snorql/?describe=' + uri"
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
              class="mx-2"
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
            <tr v-if="false">
              <td width="30%">URL</td>
              <td style="overflow-wrap: break-word" class="py-5">
                <a :href="url">{{ url }}</a>
              </td>
            </tr>

            <tr>
              <td width="30%">{{ $t('description') }}</td>
              <td
                class="py-5"
                v-html="$utils.formatArrayValue(source.description, '<br />')"
              ></td>
            </tr>

            <tr v-if="source.text">
              <td width="30%">{{ $t('text') }}</td>
              <td class="py-5">
                <div
                  style="max-height: 200px; overflow-y: auto"
                  v-html="$utils.formatArrayValue(source.text)"
                ></div>
              </td>
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
      <div
        v-show="$refs.mlt && $refs.mlt.moreLikeThisData.length > 0"
        class="mt-10"
      >
        <div class="text-center">
          <h3 class="my-5">{{ $t('タイトルが似ているアイテム') }}</h3>
        </div>
        <MoreLikeThis
          ref="mlt"
          :item-id="id"
          :query="source._label"
          :fields="['_label']"
        />
      </div>

      <div
        v-show="$refs.si && $refs.si.moreLikeThisData.length > 0"
        class="mt-10"
      >
        <div class="text-center">
          <h3 class="my-5">{{ $t('画像が似ているアイテム') }}</h3>
        </div>
        <SimilarImages ref="si" :item-id="id" />
      </div>

      <div v-if="relatedItems.length > 0" class="mt-10">
        <div class="text-center">
          <h3 class="my-5">{{ $t('関連するアイテム') }}</h3>
        </div>
        <HorizontalItems :data="relatedItems" height="150" />
      </div>

      <div v-if="entity.all.length > 0" class="mt-10">
        <div class="text-center">
          <h3 class="my-5">{{ $t('関連する事物') }}</h3>
        </div>
        <HorizontalItems
          :data="entity.all"
          :title="$t('agential')"
          height="150"
        />
      </div>

      <!--
      <div v-if="entity.agential.length > 0" class="mt-10">
        <div class="text-center">
          <h3 class="my-5">{{ $t('人物') }}</h3>
        </div>
        <HorizontalItems
          :data="entity.agential"
          :title="$t('agential')"
          height="200"
        />
      </div>

      
      <div v-if="entity.about.length > 0" class="mt-10">
        <div class="text-center">
          <h3 class="my-5">{{ $t('キーワード') }}</h3>
        </div>
        <HorizontalItems
          :data="entity.about"
          :title="$t('agential')"
          height="200"
        />
      </div>

      <div v-if="entity.spatial.length > 0" class="mt-10">
        <div class="text-center">
          <h3 class="my-5">{{ $t('spatial') }}</h3>
        </div>
        <HorizontalItems
          :data="entity.spatial"
          :title="$t('spatial')"
          height="200"
        />

        <v-container v-if="center">
          <div id="map-wrap" style="height: 40vh" class="my-2">
            <mapc :markers="markers" :zoom="2" :center="center" />
          </div>
        </v-container>
      </div>
      -->
    </v-container>

    <v-container v-if="center">
      <div class="text-center">
        <h3 class="my-5">{{ $t('spatial') }}</h3>
      </div>
      <div id="map-wrap" style="height: 40vh" class="my-2">
        <mapc :markers="markers" :zoom="2" :center="center" />
      </div>
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

import HorizontalItems from '~/components/display/HorizontalItems.vue'
import ResultOption from '~/components/display/ResultOption.vue'
import Mapc from '~/components/common/Map.vue'
import MoreLikeThis from '~/components/item/MoreLikeThis.vue'
import SimilarImages from '~/components/item/SimilarImages.vue'

export default {
  components: {
    HorizontalItems,
    ResultOption,
    Mapc,
    MoreLikeThis,
    SimilarImages,
  },
  async asyncData({ payload, app }) {
    if (payload) {
      return payload
    } else {
      const id = app.context.route.params.id

      const url = process.env.es + '/main/_doc/' + id
      const username = 'search'
      const password = process.env.password

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
      prefix: 'https://w3id.org/hi',
      endpoint: 'https://diyhistory.org/c.php/http://3.212.248.73:8890/sparql',
      github: 'https://w3id.org/hi',
      userUids: [],
      entity: {
        agential: [],
        spatial: [],
        about: [],
        all: [],
      },
      settings: {
        agential: {
          type: 'type:Agent',
          query: 'fc-agentials',
          label: '人物',
          slug: 'entity/chname',
          mdi: 'mdi-account',
        },
        spatial: {
          type: 'type:Place',
          query: 'fc-places',
          label: '場所',
          mdi: 'mdi-map',
          slug: 'entity/place',
        },
        about: {
          type: 'type:Keyword',
          query: 'fc-about',
          label: 'キーワード',
          mdi: 'mdi-tag',
          slug: 'term/keyword',
        },
        temporal: {
          type: 'type:Time',
          query: 'fc-temporal',
          label: '時間',
          mdi: 'mdi-calendar',
          slug: 'entity/time',
        },
      },
      markers: [],
      center: null,
      relatedItems: [],
    }
  },

  computed: {
    // 算出 getter 関数
    url() {
      // `this` は vm インスタンスを指します
      return this.source._url
    },
    uri() {
      return this.prefix + '/api/data/' + this.id
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
          text: 'HOME',
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

  created() {
    this.getEntity('agential')
    this.getEntity('spatial')
    this.getEntity('about')
    this.getEntity('temporal')
    this.getMarker()
    this.getRelatedItems()
  },

  methods: {
    async getEntity(field = 'spatial') {
      const source = this.source

      const setting = this.settings[field]

      if (!source[field]) {
        return
      }
      const values = source[field]

      const moreLikeThisData0 = []

      const ids = []

      for (let i = 0; i < values.length; i++) {
        const image = setting.mdi

        const value = values[i]

        const to = this.localePath({
          name: 'entity-entity-id',
          params: { entity: field, id: value },
        })

        moreLikeThisData0.push({
          _id: 'abc',
          _source: {
            _label: [value],
            _thumbnail: [image],
            _url: [this.baseUrl + to],
          },
          to,
        })

        const uri = this.github + '/api/' + setting.slug + '/' + value
        ids.push(`?s = <${uri}>`)
      }

      this.entity[field] = moreLikeThisData0

      if (ids.length === 0) {
        return
      }

      const filter = ids.join(' || ')

      const query = `
      PREFIX schema: <http://schema.org/>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      SELECT DISTINCT ?s ?label ?description ?image WHERE {
        ?cho ?p ?s . 
        ?s rdfs:label ?label .
        filter (${filter})
        optional { ?s schema:description ?description }
        optional { ?s schema:image ?image }
      }
      `

      let url = this.endpoint + '?query='

      url = url + encodeURIComponent(query) + '&output=json'

      const res = await axios.get(url)
      const results = res.data.results.bindings

      const map = {}

      for (let i = 0; i < results.length; i++) {
        const hit = results[i]
        map[hit.s.value] = hit
      }

      for (let i = 0; i < values.length; i++) {
        const item = moreLikeThisData0[i]

        if (!item) {
          continue
        }

        const facet = values[i]
        const uri = this.github + '/api/' + setting.slug + '/' + facet

        if (!map[uri]) {
          continue
        }
        const hit = map[uri]

        const image = hit.image ? [hit.image.value] : [setting.mdi]

        if (hit.description) {
          item._source.description = [
            hit.description.value +
              ` <a href="https://ja.wikipedia.org/wiki/${facet}">Wikipedia</a>`,
          ]
        }

        item._source._thumbnail = image
      }

      this.entity[field] = moreLikeThisData0
      const arr = this.entity.all
      for (let i = 0; i < moreLikeThisData0.length; i++) {
        arr.push(moreLikeThisData0[i])
      }

      this.entity.all = arr
    },
    async getMarker() {
      const source = this.source

      const field = 'spatial'

      const setting = this.settings[field]

      if (!source[field]) {
        return
      }
      const values = source[field]

      const ids = []

      for (let i = 0; i < values.length; i++) {
        const value = values[i]

        const uri = this.github + '/api/' + setting.slug + '/' + value
        ids.push(`?spatial = <${uri}>`)
      }

      if (ids.length === 0) {
        return
      }

      const filter = ids.join(' || ')

      const query = `
      PREFIX schema: <http://schema.org/>
      PREFIX jps: <https://jpsearch.go.jp/term/property#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      SELECT DISTINCT ?spatial ?lat ?long ?label WHERE {
        ?cho jps:sourceInfo ?source; schema:spatial ?spatial . 
        filter (${filter})
        ?spatial rdfs:label ?label; schema:geo ?geo .
        ?geo schema:latitude ?lat; schema:longitude ?long .
      }
      `

      let url = this.endpoint + '?query='

      url = url + encodeURIComponent(query) + '&output=json'

      const res = await axios.get(url)
      const results = res.data.results.bindings

      const markers = []

      let lats = 0
      let longs = 0

      for (let i = 0; i < results.length; i++) {
        const obj = results[i]

        const label = obj.label.value

        const param = {}
        const fcField = 'fc-spatial'
        param[fcField] = label

        const marker = {
          latlng: [obj.lat.value, obj.long.value],
          content: label,
          path: {
            name: 'entity-entity-id',
            params: {
              entity: 'spatial',
              id: label,
            },
          },
        }

        lats += obj.lat.value
        longs += obj.long.value

        markers.push(marker)
      }

      this.center = [lats / results.length, longs / results.length]

      this.markers = markers
    },
    async getRelatedItems() {
      const u = this.uri

      const query = `
        PREFIX schema: <http://schema.org/>
        PREFIX hi: <https://w3id.org/hi/api/term/property#>
        PREFIX jps: <https://jpsearch.go.jp/term/property#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        SELECT DISTINCT ?p ?label_k ?cho ?image ?label WHERE { 
          BIND(<${u}> as ?cho2)
          ?cho2 ?p ?s . 
          ?s rdfs:label ?label_k . 
          ?cho ?p ?s . 
          filter (?p != rdf:type && ?p != jps:agential 
          && ?p != schema:license && ?p != jps:relationType && ?p != jps:spatial)
          filter(?cho != ?cho2)
          ?cho rdfs:label ?label . 
          optional { ?cho schema:image ?image . }
        } order by rand() limit 20
      `

      let url = this.endpoint + '?query='

      url = url + encodeURIComponent(query) + '&output=json'

      const res = await axios.get(url)

      const results = res.data.results.bindings

      const relatedItems = []

      for (let i = 0; i < results.length; i++) {
        const obj = results[i]

        const uri = obj.cho.value
        const dd = uri.split('/')
        const id = dd[dd.length - 1]

        const dd2 = obj.p.value.split('/')
        let ln = dd2[dd2.length - 1]
        if (ln.includes('#')) {
          ln = ln.split('#')[1]
        }
        const relation = this.$t(ln)

        const source = {
          _label: [obj.label.value],
          _url: [
            this.baseUrl +
              this.localePath({
                name: 'item-id',
                params: {
                  id,
                },
              }),
          ],
          description: [
            this.$i18n.locale === 'ja'
              ? `${relation}が同じ${obj.label_k.value}のアイテムです。`
              : `${relation} ${obj.label_k.value} is the same.`,
          ],
        }

        const item = {
          to: this.localePath({
            name: 'item-id',
            params: {
              id,
            },
          }),
          _source: source,
        }

        if (obj.image) {
          source._thumbnail = [obj.image.value]
        }

        relatedItems.push(item)

        /*

        if (!item) {
          continue
        }

        const facet = values[i]
        const uri = this.github + '/api/' + setting.slug + '/' + facet

        if (!map[uri]) {
          continue
        }
        const hit = map[uri]

        const image = hit.image ? [hit.image.value] : [setting.mdi]

        if (hit.description) {
          item._source.description = [hit.description.value]
        }

        item._source._thumbnail = image
        */
      }

      this.relatedItems = relatedItems

      /*

      let url = this.endpoint + '?query='

      url = url + encodeURIComponent(query) + '&output=json'

      const res = await axios.get(url)
      const results = res.data.results.bindings

      const map = {}

      for (let i = 0; i < results.length; i++) {
        const hit = results[i]
        map[hit.s.value] = hit
      }

      for (let i = 0; i < values.length; i++) {
        const item = moreLikeThisData0[i]

        if (!item) {
          continue
        }

        const facet = values[i]
        const uri = this.github + '/api/' + setting.slug + '/' + facet

        if (!map[uri]) {
          continue
        }
        const hit = map[uri]

        const image = hit.image ? [hit.image.value] : [setting.mdi]

        if (hit.description) {
          item._source.description = [hit.description.value]
        }

        item._source._thumbnail = image
      }

      this.entity[field] = moreLikeThisData0
      const arr = this.entity.all
      for (let i = 0; i < moreLikeThisData0.length; i++) {
        arr.push(moreLikeThisData0[i])
      }

      this.entity.all = arr
      */
    },
    getIframeUrl() {
      if (!this.source.manifest) {
        return null
      }
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
