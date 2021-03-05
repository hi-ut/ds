<template>
  <div>
    <v-expansion-panels flat :value="openFlag ? 0 : null">
      <v-expansion-panel>
        <v-expansion-panel-header class="grey lighten-2"
          ><h3>
            {{ label.startsWith('_') ? $t(label.slice(1)) : $t(label) }}
          </h3></v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <v-list dense>
            <div class="ma-3">
              <div>{{ $t('Between Year') }}</div>
              <v-text-field
                v-model="after"
                class="my-1"
                single-line
                background-color="grey lighten-3"
                filled
                rounded
                dense
                hide-details
                :label="'e.g. 1800'"
                clearable
                clear-icon="mdi-close-circle"
                @keydown.enter="updateQuery()"
              ></v-text-field>
              <div class="mt-4">{{ $t('and Year') }}</div>
              <v-text-field
                v-model="before"
                class="mt-1"
                single-line
                background-color="grey lighten-3"
                filled
                rounded
                dense
                hide-details
                :label="'e.g. 1900'"
                clearable
                clear-icon="mdi-close-circle"
                @keydown.enter="updateQuery()"
              ></v-text-field>
            </div>
            <!-- <v-divider></v-divider> -->
            <v-list-item>
              <v-list-item-action>
                <!-- small  -->
                <v-btn color="primary" @click="updateQuery()">{{
                  $t('update')
                }}</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch } from 'nuxt-property-decorator'

@Component
export default class DateFacet extends Vue {
  @Prop({
    default: '',
    required: true,
  })
  label!: string

  @Prop({
    required: true,
    default() {
      return []
    },
  })
  buckets: any

  // 検索結果
  get tempo() {
    return this.$store.state.tempo
  }

  set tempo(value) {
    this.$store.commit('setTempo', value)
  }

  after: string = ''
  before: string = ''

  created() {
    this.main()
  }

  @Watch('buckets')
  watchBuckets() {
    this.main()
  }

  main() {
    const dd = this.tempo.split(',')
    this.after = dd[0]

    if (dd.length === 2) {
      this.before = dd[1]
    }
  }

  openFlag: boolean = this.tempo !== ''

  @Watch('after')
  watchAfter() {
    this.change()
  }

  @Watch('before')
  watchBefore() {
    this.change()
  }

  change() {
    this.$store.commit('replaceAdvanced', {
      label: 'q-tempo',
      values: [`${this.after},${this.before}`],
      type: 'q',
    })
  }

  updateQuery() {
    const query = this.$searchUtils.getSearchQueryFromQueryStore(
      this.$store.state,
      this.$route.query.u
    )
    query.from = 0
    this.$router.push(
      this.localePath({
        name: 'search',
        query,
      }),
      () => {},
      () => {}
    )
  }
}
</script>
