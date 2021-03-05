<template>
  <div v-if="moreLikeThisData.length > 0">
    <HorizontalItems :key="itemId" :data="moreLikeThisData" :height="150" />
  </div>
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

  mounted() {
    this.moreLikeThis()
  }

  @Watch('itemId')
  watchId(): void {
    this.moreLikeThis()
  }

  async moreLikeThis() {
    // 類似画像の一覧取得
    const url2 = process.env.es + '/image/_doc/' + this.itemId

    const username = 'search'
    const password: any = process.env.password

    const response2 = await axios.get(url2, {
      auth: {
        username,
        password,
      },
    })

    const images = response2.data._source.similar_images.slice(0, 10)

    // 類似アイテムの取得

    const esQuery = {
      query: {
        terms: {
          _id: images,
        },
      },
    }

    const url = process.env.es + '/main/_search'

    const response = await axios.post(url, esQuery, {
      auth: {
        username,
        password,
      },
    })

    const result = response.data.hits.hits

    // 一度マップに変換
    const map: any = {}

    for (let i = 0; i < result.length; i++) {
      const obj = result[i]
      obj.access = this.$utils.formatArrayValue(obj._source.tags)
      map[obj._id] = obj
    }

    // 元の順番で並び替え
    const result2 = []
    for (let i = 0; i < images.length; i++) {
      const id = images[i]
      if (map[id]) {
        const obj: any = map[id]
        obj.to = this.localePath({ name: 'item-id', params: { id } })
        obj._source.description = []
        result2.push(obj)
      }
    }

    this.moreLikeThisData = result2
  }
}
</script>
