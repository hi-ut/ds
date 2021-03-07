<template>
  <v-container v-if="nodes.length > 0">
    <h2 class="my-5 text-center">{{ $t('network') }}</h2>

    <p class="text-center">
      {{
        $t('ノードをダブルクリックすることで、当該事物のページに遷移します。')
      }}
    </p>
    <v-row dense>
      <v-col cols="12" :sm="3">
        <!-- Main -->
        <v-card flat outlined class="mb-5">
          <v-img
            v-if="nodesMap[u] && nodesMap[u].image"
            :src="nodesMap[u].image"
            contain
            style="height: 150px"
            width="100%"
            class="grey lighten-2"
          ></v-img>

          <div class="pa-4" :style="'max-height: 200px; overflow-y: auto;'">
            <nuxt-link
              :to="
                localePath({
                  name: 'entity-slug-id',
                  params: { slug: nodesMap[u].entity, id: nodesMap[u].label },
                })
              "
            >
              <!-- eslint-disable-next-line vue/no-v-html -->
              <h4 v-html="nodesMap[u].label"></h4>
            </nuxt-link>

            <!--
              <p v-if="item._source.description" class="mt-2 mb-0">
                {{ item._source.description }}
              </p>
              -->

            <template v-if="nodesMap[u] && nodesMap[u].description">
              <div class="mt-2">
                {{ nodesMap[u].description }}
              </div>
            </template>
          </div>

          <template>
            <v-divider />

            <v-card-actions>
              <v-btn v-if="false" color="success" @click="toggle()"
                ><v-icon class="mr-2">{{
                  dialog ? 'mdi-file' : 'mdi-account-network'
                }}</v-icon
                >{{
                  dialog ? 'つながりを一覧する' : 'ネットワークをみる'
                }}</v-btn
              >
              <v-btn color="primary" @click="focus(u)">{{
                $t('フォーカス')
              }}</v-btn>
              <v-spacer></v-spacer>
              <ResultOption
                :item="{
                  label: targetNode.label,
                  url: targetNode.url,
                }"
              />
            </v-card-actions>
          </template>
        </v-card>

        <!-- Other -->

        <!-- v-if="otherNode && otherNode.image" -->
        <v-card v-if="otherId" flat outlined class="mb-5">
          <v-img
            :src="
              otherNode && otherNode.image
                ? otherNode.image
                : 'https://raw.githubusercontent.com/hi-ut/static_images/main/no_image.svg'
            "
            contain
            style="height: 150px"
            width="100%"
            class="grey lighten-2"
          ></v-img>

          <div class="pa-4" :style="'max-height: 200px; overflow-y: auto;'">
            <nuxt-link
              :to="
                localePath({
                  name: 'entity-slug-id',
                  params: { slug: otherNode.entity, id: (otherNode.entity === 'temporal' ? otherNode.label.replace('年', '') : otherNode.label) },
                })
              "
            >
              <!-- eslint-disable-next-line vue/no-v-html -->
              <h4>{{ otherNode.label }}</h4>
            </nuxt-link>

            <!--
              <p v-if="item._source.description" class="mt-2 mb-0">
                {{ item._source.description }}
              </p>
              -->

            <template v-if="otherNode && otherNode.description">
              <div class="mt-2">
                {{ otherNode.description }}
              </div>
            </template>
          </div>

          <template>
            <v-divider />

            <v-card-actions>
              <template v-if="false">
                <v-btn
                  color="primary"
                  :to="
                    localePath({
                      name: 'network-id',
                      params: {
                        id: otherId,
                      },
                    })
                  "
                  ><v-icon class="mr-2">mdi-account-network</v-icon>
                  ネットワークをみる</v-btn
                >
              </template>
              <v-btn color="primary" @click="focus(otherId)">{{
                $t('フォーカス')
              }}</v-btn>
              <v-btn
                color="primary"
                :loading="loading"
                @click="select(otherId, true)"
                >{{ $t('search') }}</v-btn
              >
              <v-spacer></v-spacer>
              <ResultOption
                :item="{
                  label: otherNode.label,
                  url: otherNode.url,
                }"
              />
            </v-card-actions>
          </template>
        </v-card>

        <h3 v-if="false" class="mt-10">
          アイテム
          <nuxt-link
            :to="
              localePath({
                name: 'search',
                query: {
                  'dev_MAIN[refinementList][agential][0]': $route.params.id,
                },
              })
            "
            ><v-icon>mdi-magnify</v-icon></nuxt-link
          >
        </h3>
        <!--
          <ul class="my-5" style="max-height: 200px; overflow-y: auto">
            <li v-for="i in 50" :key="i">aaa</li>
          </ul>
          <p class="text-right"><a>もっと見る</a></p>
          -->
        <p v-if="false" class="mt-5">
          <nuxt-link
            :to="
              localePath({
                name: 'search',
                query: {
                  'dev_MAIN[refinementList][agential][0]': $route.params.id,
                },
              })
            "
            >もっと見る <v-icon>mdi-magnify</v-icon></nuxt-link
          >
        </p>
      </v-col>
      <v-col cols="12" :sm="9">
        <v-row>
          <v-col cols="12" :sm="9">
            <network
              ref="network"
              :nodes="nodes"
              :edges="edges"
              :options="options"
              style="height: 650px; background-color: #f0f4c3"
              @click="onNodeSelected"
              @double-click="doubleClick"
            >
              <!--  @double-click="doubleClick" @stabilized="stabilized" -->
            </network>
          </v-col>
          <v-col cols="12" :sm="3">
            <v-sheet class="grey lighten-3 pa-2"
              ><h3>
                <v-icon>mdi-view-list</v-icon> {{ $t('entity') }}
              </h3></v-sheet
            >
            <v-list dense style="max-height: 600px; overflow-y: auto">
              <v-list-item
                v-for="(item, key) in nodes"
                :key="key"
                @click="select(item.id)"
              >
                <v-list-item-avatar>
                  <v-img :src="item.image"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="item.label"></v-list-item-title>
                </v-list-item-content>

                <!--
                <v-list-item-action>
                  {{ 0 /*item.value*/ }}
                </v-list-item-action>
                -->
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text class="py-5">
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'nuxt-property-decorator'
import axios from 'axios'
import ResultOption from '~/components/display/ResultOption.vue'
const { Network } = require('vue-vis-network')

function getImage(entity: string) {
  const settings: any = process.env.settings
  return settings[entity].image
}

@Component({
  components: {
    network: Network,
    ResultOption,
  },
})
export default class about extends Vue {
  dialog: boolean = false // 一時的

  settings: any = {
    'https://w3id.org/hi/api/term/property#agential': 'agential',
    'http://schema.org/spatial': 'spatial',
    'http://schema.org/temporal': 'temporal',
    'http://schema.org/about': 'about',
  }

  @Prop()
  u!: any

  @Prop()
  entity!: any

  loading: boolean = false

  nodes: any = []

  nodesMap: any = {}
  exEdges: string[] = []

  edges: any = []

  options: any = {
    nodes: {
      color: {
        background: 'lightgray',
        highlight: {
          background: 'lightgray',
          border: '#FF6E00',
        },
      },
      borderWidthSelected: 8,
      borderWidth: 4,
      shapeProperties: {
        useBorderWithImage: true,
      },
    },
    edges: {
      color: 'lightgray',
    },
    physics: {
      enabled: true,
    },
    layout: { randomSeed: 2 },
  }

  otherId = ''

  @Watch('u')
  watchU(): void {
    this.init()
  }

  created() {
    this.init()
  }

  init() {
    const u = this.u
    this.search(u)
  }

  get targetNode() {
    return this.nodesMap[this.u]
  }

  get otherNode(){
    return this.nodesMap[this.otherId]
  }

  async search(u: any) {
    this.loading = true
    const query = `
        PREFIX schema: <http://schema.org/>
        PREFIX hi: <https://w3id.org/hi/api/term/property#>
        PREFIX jps: <https://jpsearch.go.jp/term/property#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        SELECT DISTINCT ?p ?s  ?image ?label ?description ?keyword ?label_k ?description_k count(DISTINCT ?cho) as ?count ?image_k WHERE { 
          BIND(<${u}> as ?s)
          ?cho ?p2 ?s . 
          ?s rdfs:label ?label . 
          optional { ?s schema:image ?image . }
          optional { ?s schema:description ?description . }
          ?cho ?p ?keyword . 
          filter (?p != rdf:type && ?p != jps:agential 
          && ?p != schema:license && ?p != jps:relationType && ?p != jps:spatial)
          filter(?s != ?keyword)
          ?keyword rdfs:label ?label_k . 
          optional { ?keyword schema:image ?image_k . }
          optional { ?keyword schema:description ?description_k . }
        } order by desc(?count) limit 20
      `

    const result = await axios.get(
      process.env.endpoint +
        '?query=' +
        encodeURIComponent(query) +
        '&output=json'
    )

    const results = result.data.results.bindings

    const nodes = this.nodes

    const edges = this.edges

    const nodesMap: any = this.nodesMap

    const exEdges = this.exEdges

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      nodesMap[node.uri] = node
    }

    for (let i = 0; i < results.length; i++) {
      const obj = results[i]

      const s = obj.s.value

      // 中心ノード
      if (!nodesMap[s]) {
        const entity = this.entity

        const node: any = {
          label: obj.label.value,
          // id: Object.keys(nodes2).length,
          id: s,
          uri: s,
          p:
            entity === 'agential'
              ? 'https://w3id.org/hi/api/term/property#agential'
              : 'http://schema.org/' + entity,
          entity,
          color: 'lightgreen',
          url:
            process.env.BASE_URL +
            this.localePath({
              name: 'entity-slug-id',
              params: {
                slug: entity,
                id: obj.label.value,
              },
            }),
        }

        node.shape = 'image'
        node.image = obj.imag ? obj.image.value : getImage(node.entity)
        node.borderWidth = 4
        node.color = {
          border: this.u === s ? 'white' : 'lightgreen',
        }

        if (obj.description) {
          node.description = obj.description.value
        }

        nodesMap[s] = node
      }

      let label = obj.label.value
      label = obj.name ? obj.name.value : label

      // 以下、ターゲット

      const labelK = obj.label_k.value

      if (labelK === '不明') {
        continue
      }

      let p = obj.p.value
      const arr = ['creator', 'publisher', 'contributor', 'provider']
      for (let j = 0; j < arr.length; j++) {
        p = p.replace(
          'http://schema.org/' + arr[j],
          'http://schema.org/' + 'agential'
        )
      }

      // ----------------

      const entity = this.settings[p]

      const keyword = obj.keyword.value
      if (!nodesMap[keyword]) {
        const node: any = {
          label: labelK,
          // id: Object.keys(nodes2).length,
          id: keyword,
          uri: keyword,
          p,
          color: 'lightgreen',
          entity,
          url:
            process.env.BASE_URL +
            this.localePath({
              name: 'entity-slug-id',
              params: {
                slug: entity,
                id: labelK,
              },
            }),
        }

        node.shape = 'image'
        node.image = obj.image_k ? obj.image_k.value : getImage(node.entity)
        node.borderWidth = 4
        node.color = {
          border: 'lightgreen',
        }

        if (obj.description_k) {
          node.description = obj.description_k.value
        }

        nodesMap[keyword] = node
      }

      // ----------------

      const dd2 = obj.p.value.split('/')
      let term = dd2[dd2.length - 1]
      if (term.split('#').length > 1) {
        term = term.split('#')[1]
      }
      term = this.$t(term)

      const edge = {
        from: nodesMap[s].id,
        to: nodesMap[keyword].id,
        value: obj.count.value,
        title: Number(obj.count.value).toLocaleString(), // term + '（' +  + '）',
        color: 'lightgrey',
      }

      const edgeTmpArr: string[] = [edge.to, edge.from]
      edgeTmpArr.sort()
      const exEdge = edgeTmpArr.join(', ')

      if (exEdge.includes(this.u)) {
        edge.color = 'orange'
      }

      if (!exEdges.includes(exEdge)) {
        edges.push(edge)
        exEdges.push(exEdge)
      }
    }

    const nodes2 = []

    for (const uri in nodesMap) {
      const node = nodesMap[uri]
      nodes2.push(node)
      node.index = Object.keys(node).length
    }

    this.nodes = nodes2
    this.edges = edges
    this.loading = false

    this.exEdges = exEdges
  }

  doubleClick(value: any) {
    /*
    const nodes = value.nodes
    if (nodes.length > 0) {
      const node = this.nodesMap[nodes[0]]

      if (!node) {
        return
      }

      let entity = 'agential'
      if (node.p === 'http://schema.org/spatial') {
        entity = 'spatial'
      } else if (node.p === 'http://schema.org/about') {
        entity = 'about'
      } else if (node.p === 'http://schema.org/temporal') {
        entity = 'temporal'
      }

      const dd = node.uri.split('/')
      const id = dd[dd.length - 1]

      this.$router.push(
        this.localePath({
          name: 'entity-slug-id',
          params: {
            slug: entity,
            id,
          },
        }),
        () => {},
        () => {}
      )
    }
    */
    const uri = this.onNodeSelected(value)
    if (uri) {
      this.search(uri)
    }
  }

  onNodeSelected(value: any) {
    const nodes = value.nodes

    const nodeMap = this.nodesMap

    if (nodes.length > 0) {
      const node = nodeMap[nodes[0]]

      /*
      console.log(node)

      let entity = 'entity/chname'
      if (node.p === 'http://schema.org/spatial') {
        entity = 'entity/place'
      } else if (node.p === 'http://schema.org/about') {
        entity = 'term/keyword'
      } else if (node.p === 'http://schema.org/temporal') {
        entity = 'entity/temporal'
      }

      const dd = node.uri.split('/')
      const id = dd[dd.length - 1]

      let uri = 'https://w3id.org/hi/api/' + entity + '/' + id
      if (entity === 'entity/temporal') {
        uri = 'https://jpsearch.go.jp/entity/time/' + id
      }
      */

      const uri = node.id

      this.select(uri)

      return uri
    }

    return ''
  }

  focus(uri: string) {
    const network: any = this.$refs.network
    network.focus(uri)
  }

  select(uri: string, searchFlag: boolean = false) {
    const nodeMap = this.nodesMap

    // this.otherId = ''

    if (nodeMap[uri]) {
      if (this.u !== uri) {
        this.otherId = uri
      }

      const network: any = this.$refs.network
      network.selectNodes([uri])

      if (searchFlag) {
        // network.focus(uri)
        this.search(uri)
      } else {
      }
    } else {
      console.log({ uri })
    }
  }

  stabilized() {
    this.options.physics.enabled = false
  }
}
</script>
