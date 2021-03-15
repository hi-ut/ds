<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>

    <v-container>
      <h1 class="my-5">{{ $t('map') }}</h1>
      <div v-if="center" id="map-wrap" style="height: 80vh" class="my-2">
        <mapc :markers="markers" :zoom="2" :center="center" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import Mapc from '~/components/common/Map.vue'

@Component({
  components: {
    Mapc,
  },
})
export default class PageMap extends Vue {
  map: any = {}
  markers: any[] = []
  center: any = null

  asyncData({ payload }: any) {
    if (payload) {
      return { item: payload }
    } else {
    }
  }

  get title() {
    return this.$t('map')
  }

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
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  }

  get bh() {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }

  endpoint: any = process.env.endpoint

  async created() {
    const query = `
      PREFIX schema: <http://schema.org/>
      PREFIX jps: <https://jpsearch.go.jp/term/property#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      SELECT DISTINCT ?spatial ?lat ?long ?label WHERE {
        ?cho jps:sourceInfo ?source; schema:spatial ?spatial . 
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
      const obj: any = results[i]

      const label = obj.label.value

      const param: any = {}
      const fcField = 'fc-spatial'
      param[fcField] = label

      const lat = Number(obj.lat.value)
      const long = Number(obj.long.value)

      const marker: any = {
        latlng: [lat, long],
        content: label,
        path: {
          name: 'entity-entity-id',
          params: {
            entity: 'spatial',
            id: label,
          },
        },
      }

      lats += lat
      longs += long

      markers.push(marker)
    }

    this.center = [lats / results.length, longs / results.length]

    this.markers = markers
  }
}
</script>
