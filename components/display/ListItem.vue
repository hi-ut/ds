<template>
  <v-card flat>
    <v-row class="pa-4 mb-5">
      <v-col cols="12" sm="3" class="mb-4">
        <nuxt-link
          :to="
            localePath({
              name: 'item-id',
              params: { id: item._id },
            })
          "
        >
          <v-img
            :src="$utils.formatArrayValue(item._source._thumbnail)"
            contain
            style="height: 150px"
            width="100%"
            class="grey lighten-2"
          ></v-img>
        </nuxt-link>
      </v-col>
      <v-col cols="12" sm="9">
        <h3 class="mb-2">
          <nuxt-link
            :to="
              localePath({
                name: 'item-id',
                params: { id: item._id },
              })
            "
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="$utils.formatArrayValue(item._source._label)"></span>
          </nuxt-link>
        </h3>

        <p>
          {{ $t('source') }}:
          {{ $utils.formatArrayValue(item._source.source) }}
          <template v-if="item._source.agential">
            / {{ $utils.formatArrayValue(item._source.agential) }}
          </template>
          <template v-if="item._source.spatial">
            / {{ $utils.formatArrayValue(item._source.spatial) }}
          </template>
          <template v-if="item._source.temporal">
            / {{ $utils.formatArrayValue(item._source.temporal) }}
          </template>
        </p>

        <div
          style="
            max-height: 200px;
            overflow-y: auto;
            color: #646464;
            font-size: small;
          "
        >
          {{ $utils.formatArrayValue(item._source.text) }}
        </div>

        <div class="text-right mt-4">
          <a
            v-if="item._source._related"
            class="mr-2 primary--text"
            :href="$utils.formatArrayValue(item._source._related)"
            target="_blank"
          >
            {{ $t('view_full_item') }}
            <v-icon>mdi-open-in-new</v-icon>
          </a>

          <ResultOption
            v-if="!item.share_hide"
            :item="{
              label: $utils.formatArrayValue(item._source._label),
              url: $utils.formatArrayValue(item._source._url),
            }"
          />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import ResultOption from '~/components/display/ResultOption.vue'

@Component({
  components: {
    ResultOption,
  },
})
export default class ListItem extends Vue {
  @Prop()
  item!: any

  sorted(source: any) {
    const obj: any = {}
    const keys = Object.keys(source).sort()
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      obj[key] = source[key]
    }
    return obj
  }
}
</script>
