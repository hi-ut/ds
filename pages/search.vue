<template>
  <div>
    <template v-if="loadingFlag">
      <div class="text-center my-10">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </template>
    <template v-else>
      <v-sheet color="grey lighten-3">
        <SearchFilter />
      </v-sheet>

      <v-container fluid class="mt-5">
        <ResultHead
          :sort-options="sortOptions"
          :layout-options="layoutOptions"
        />
        <Result />
      </v-container>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'

import axios from 'axios'
import SearchFilter from '~/components/search/Filter.vue'
import Result from '~/components/search/Result.vue'
import ResultHead from '~/components/search/ResultHead.vue'

/*
import elasticsearch from "elasticsearch"

//var elasticsearch = require('elasticsearch');

var client = new elasticsearch.client({
    host: "https://gimli-eu-west-1.searchly.com"
});
*/

@Component({
  components: {
    SearchFilter,
    Result,
    ResultHead,
  },
})
export default class search extends Vue {
  // 設定
  sortOptions: any[] = [
    {
      value: '_score:desc',
      text: this.$t('relevance'),
    },
  ]

  layoutOptions: any[] = [
    { value: 'list', text: 'list' },
    { value: 'grid', text: 'grid' },
    { value: 'image', text: 'thumbnail' },
    { value: 'table', text: 'table' },
    { value: 'stats', text: 'graph' },
  ]

  get facetOptions(): any {
    const facetOptions: any = process.env.facetOptions
    for (const key in facetOptions) {
      const obj = facetOptions[key]
      obj.label = this.$t(obj.label)
    }
    return facetOptions
  }

  loadingFlag: boolean = true

  // state
  mounted() {
    this.search()
  }

  @Watch('$route')
  watchRoute(): void {
    this.search()
  }

  async search() {
    const store = this.$store
    const routeQuery: any = this.$route.query

    // 初期化
    if (!routeQuery.sort) {
      routeQuery.sort = '_score:desc'
    }
    if (!routeQuery.layout) {
      routeQuery.layout = process.env.layout
    }
    this.loadingFlag = true
    store.commit('init', routeQuery)

    // ------ インデックス ---------

    /*
    if (store.state.index == null) {
      const index = await this.$searchUtils.loadIndex(
        process.env.BASE_URL + '/data/index.json'
      )
      this.$searchUtils.initStore(store, index)
    }
    */

    // ------ ファセット ---------

    if (Object.keys(store.state.facetOptions)) {
      store.commit('setFacetOptions', this.facetOptions)
    }

    // 検索
    const esQuery = this.$searchUtils.createQuery(routeQuery, store.state)

    const url = 'https://gimli-eu-west-1.searchly.com/main/_search'

    const response = await axios.post(url, esQuery, {
      auth: {
        username: 'search',
        password: '1ff162746e60feac7c91c12d37cf0ca6',
      },
    })

    // 以下、アクセス情報の追加
    const result = response.data.hits.hits

    const result2 = []
    for (let i = 0; i < result.length; i++) {
      const obj = result[i]
      obj.access = this.$utils.formatArrayValue(obj._source.tags)
      result2.push(obj)
    }

    response.data.hits.hits = result2
    this.$store.commit('setResult', response.data)

    // --------------- ここまで elatic search ---------------

    this.loadingFlag = false
  }

  head() {
    return {
      title: this.$t('search'),
    }
  }
}
</script>
