<template>
  <v-row align-v="stretch">
    <v-col
      v-for="(value, index) in results"
      :key="index"
      :cols="12"
      :sm="col"
      align-self="stretch"
      class="mb-4"
    >
      <ThumbItem :item="value" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ThumbItem from '~/components/display/ThumbItem.vue'

@Component({
  components: {
    ThumbItem,
  },
})
export default class ImageSearchResult extends Vue {
  get col() {
    return 12 / this.$store.state.col
  }

  get results() {
    return this.$store.state.result.hits.hits
  }
}
</script>
