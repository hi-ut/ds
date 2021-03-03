<template>
  <HorizontalItems
    v-if="moreLikeThisData.length > 0"
    :key="itemId"
    :data="moreLikeThisData"
    :height="150"
  />
</template>

<script lang="ts">
import { Prop, Component, Watch, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import HorizontalItems from '../display/HorizontalItems.vue'

@Component({
  components: {
    HorizontalItems,
  },
})
export default class morelikethis extends Vue {
  moreLikeThisData: any[] = []

  @Prop({
    required: true,
  })
  itemId!: string

  @Prop({
    required: true,
  })
  query!: string

  @Prop({
    required: true,
  })
  fields!: string[]

  mounted() {
    this.moreLikeThis()
  }

  @Watch('itemId')
  watchId(): void {
    this.moreLikeThis()
  }

  async moreLikeThis() {
    const itemId = this.itemId

    const esQuery = {
      query: {
        more_like_this: {
          fields: this.fields,
          like: this.query,
          min_term_freq: 0,
          min_doc_freq: 0,
          max_query_terms: 12,
        },
      },

      size: 21,
    }

    const url = process.env.es + '/main/_search'

    const response = await axios.post(url, esQuery, {
      auth: {
        username: 'search',
        password: process.env.password + '',
      },
    })

    const result = response.data.hits.hits

    const result2 = []
    if (result.length > 1) {
      for (let i = 0; i < result.length; i++) {
        const obj = result[i]
        if (obj._id !== itemId) {
          // result2.push(obj)

          const source = obj._source

          const to = this.localePath({
            name: 'item-id',
            params: { id: obj._id },
          })

          result2.push({
            _id: 'abc',
            _source: {
              _label: source._label,
              _thumbnail: source._thumbnail,
              _url: [process.env.baseUrl + to],
            },
            to,
          })
        }
      }
    }

    this.moreLikeThisData = result2
  }
}
</script>
