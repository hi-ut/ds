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
    <v-sheet v-if="entity.image" color="grey lighten-4">
      <v-img :src="entity.image.value" contain style="height: 300px"></v-img>
    </v-sheet>
    <v-container class="my-5">
      <h1>{{ id }}</h1>

      <p v-if="entity.description" class="my-5">
        {{ entity.description.value }}
        <a :href="'https://ja.wikipedia.org/wiki/' + id">Wikipedia</a>
      </p>

      <div class="text-center my-5">
        <v-tooltip bottom>
          <template #activator="{ on }">
            <v-btn
              class="mx-2"
              target="_blank"
              :href="baseUrl + '/snorql?describe=' + uri"
              icon
              v-on="on"
              ><v-img
                contain
                width="30px"
                :src="baseUrl + '/img/icons/rdf-logo.svg'"
            /></v-btn>
          </template>
          <span>RDF</span>
        </v-tooltip>
        <ResultOption
          :item="{
            url: baseUrl + '/snorql?describe=' + uri,
            label: id,
          }"
        />
      </div>
    </v-container>
    <v-container class="my-5">
      <v-btn
        block
        color="primary"
        rounded
        dark
        x-large
        :to="
          localePath({
            name: 'search',
            query: getQuery(field, id),
          })
        "
      >
        <v-icon class="mr-2">mdi-magnify</v-icon>
        {{ $t('search') }}
      </v-btn>

      <Network :u="uri" :entity="field" class="mt-10 mb-5" />

      <!--
      <HorizontalItems
        v-for="(field, key) in fields"
        :key="key"
        description="カッコ内の値は共起するアイテム数"
        :data="fields[key]"
        :title="`${$t('related')} ${$t(key)}`"
        height="100"
        width="200"
      />
      -->
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import ResultOption from '~/components/display/ResultOption.vue'
import Network from '~/components/Network.vue'

export default {
  components: {
    ResultOption,
    Network,
  },
  asyncData({ payload, app }) {
    if (payload) {
      return { item: payload }
    } else {
      // const id = app.context.params.id
      const field = app.context.params.slug
      console.log({ field })

      return { field, items: [] }
    }
  },

  data() {
    return {
      endpoint: 'https://diyhistory.org/c.php/http://3.212.248.73:8890/sparql',
      baseUrl: process.env.BASE_URL,
      github: 'https://w3id.org/hi', // process.env.github_pages,
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
      },
      entities: [],
      uri: '',
      fields: { agential: [], spatial: [] },
    }
  },

  computed: {
    title() {
      return this.id
    },

    id() {
      return this.$route.params.slug
    },

    url() {
      return this.baseUrl + this.$route.path
    },

    entity() {
      const entities = this.entities
      if (entities.length > 0) {
        return entities[0]
      } else {
        return {}
      }
    },
    bh() {
      const field = this.field
      return [
        {
          text: this.$t('top'),
          disabled: false,
          to: this.localePath({ name: 'index' }),
          exact: true,
        },
        {
          text: this.$t('entity'),
          disabled: false,
          to: this.localePath({ name: 'entity' }),
          exact: true,
        },
        {
          text: this.$t(field),
          disabled: false,
          to: this.localePath({
            name: 'entity-slug',
            params: { slug: field },
          }),
          exact: true,
        },
        {
          text: this.title,
        },
      ]
    },
  },

  created() {
    this.getTarget()
  },

  methods: {
    async getTarget() {
      const map = {
        spatial: 'entity/place',
        temporal: 'entity/time',
        agential: 'entity/chname',
        about: 'term/keyword',
      }

      const id = this.id

      let uri = this.github + '/api/' + map[this.field] + '/' + id
      if (this.field === 'temporal') {
        uri = 'https://jpsearch.go.jp/entity/time/' + id
      }
      this.uri = uri

      const query = `
      PREFIX schema: <http://schema.org/>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      SELECT DISTINCT * WHERE {
        ?s rdfs:label ?label .
        filter (?s = <${uri}>)
        optional { ?s schema:description ?description }
        optional { ?s schema:image ?image }
      }
      LIMIT 1
    `

      let url = this.endpoint + '?query='

      url = url + encodeURIComponent(query) + '&output=json'

      const res = await axios.get(url)
      const results = res.data.results.bindings

      this.entities = results
    },
    getQuery(label, value) {
      const query = {
        // 'dev_MAIN[sortBy]': 'dev_MAIN', // _temporal_asc',
      }
      if (label === 'temporal') {
        value = value.replace('年', '')
      }
      query['fc-' + label] = value
      return query
    },

    getValues(data) {
      if (!data) {
        return []
      }
      return Array.isArray(data) ? data : [data]
    },

    dwnJson() {
      // 保存するJSONファイルの名前
      const fileName = this.item.objectID + '.xml'

      // データをJSON形式の文字列に変換する。
      const data = this.item.xml

      // HTMLのリンク要素を生成する。
      const link = document.createElement('a')

      // リンク先にJSON形式の文字列データを置いておく。
      link.href = 'data:text/xml;charset=utf-8,' + encodeURIComponent(data)

      // 保存するJSONファイルの名前をリンクに設定する。
      link.download = fileName

      // ファイルを保存する。
      link.click()
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
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>
