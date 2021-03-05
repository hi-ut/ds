<template>
  <div>
    <!-- facets -->
    <template v-for="(obj, index) in facetOptions">
      <template v-if="index === 'temporal'">
        <TimeFacetOption
          v-if="aggregations[index]"
          :key="index"
          :term="index"
          :label="obj.label"
          :buckets="aggregations[index].buckets"
          :query="query"
          class="mb-5"
        />
      </template>
      <template v-else>
        <FacetOption
          v-if="aggregations[index]"
          :key="index"
          :term="index"
          :label="obj.label"
          :buckets="aggregations[index].buckets"
          :query="query"
          class="mb-5"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FacetOption from '~/components/custom/CustomFacetOption.vue'
import TimeFacetOption from '~/components/search/DateFacet.vue'

@Component({
  components: {
    FacetOption,
    TimeFacetOption,
  },
})
export default class FacetSearchOptions extends Vue {
  get aggregations() {
    return this.$store.state.result.aggregations
  }

  get facetOptions() {
    return this.$store.state.facetOptions
  }

  get query() {
    return this.$store.state.query
  }
}
</script>
