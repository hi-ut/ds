<template>
  <div class="mt-10">
    <template v-for="(value, label) in facetOptions">
      <v-card
        v-if="
          aggregations[label] &&
          aggregations[label].buckets &&
          aggregations[label].buckets.length > 0
        "
        :key="label"
        flat
        no-body
        class="mb-10"
      >
        <v-card-title class="grey lighten-2">{{
          label.startsWith('_') ? $t(label.slice(1)) : $t(label)
        }}</v-card-title>

        <div class="pa-5">
          <Chart
            :height="200"
            class="mb-4"
            :buckets="aggregations[label].buckets"
          ></Chart>
        </div>
      </v-card>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Chart from '~/components/search/TestChart.vue'

@Component({
  components: {
    Chart,
  },
})
export default class StatsSearchResult extends Vue {
  get aggregations() {
    return this.$store.state.result.aggregations
  }

  get facetOptions() {
    console.log(this.$store.state.facetOptions)
    return this.$store.state.facetOptions
  }
}
</script>
