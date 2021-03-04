<template>
  <v-container v-if="nodes.length > 0">
    <h2 class="my-5 text-center">{{ $t('network') }}</h2>

    <p class="text-center">
      {{
        $t('ノードをダブルクリックすることで、当該事物のページに遷移します。')
      }}
    </p>

    <v-card no-body outlined flat>
      <network
        ref="network"
        :nodes="nodes"
        :edges="edges"
        :options="options"
        style="height: 600px; background-color: #f0f4c3"
        @double-click="aaa"
        @stabilized="stabilized"
      >
      </network>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'nuxt-property-decorator'
import axios from 'axios'
const { Network } = require('vue-vis-network')

function getCode(p: string) {
  if (p === 'https://w3id.org/hi/api/term/property#agential') {
    return '\uF007'
  } else if (p === 'http://schema.org/spatial') {
    return '\uF279'
  } else if (p === 'http://schema.org/temporal') {
    return '\uF133'
  } else {
    return '\uF02B'
  }
}

@Component({
  components: {
    network: Network,
  },
})
export default class about extends Vue {
  @Prop()
  u!: any

  @Prop()
  entity!: any

  nodes: any = []

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
    this.search()
  }

  async search() {
    const u = this.u

    const query = `
        PREFIX schema: <http://schema.org/>
        PREFIX hi: <https://w3id.org/hi/api/term/property#>
        PREFIX jps: <https://jpsearch.go.jp/term/property#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        SELECT DISTINCT ?p ?s ?image ?label ?keyword ?label_k count(?cho) as ?count ?image_k WHERE { 
          BIND(<${u}> as ?s)
          ?cho ?p2 ?s . 
          ?s rdfs:label ?label . 
          optional { ?s schema:image ?image . }
          ?cho ?p ?keyword . 
          filter (?p != rdf:type && ?p != jps:agential 
          && ?p != schema:license && ?p != jps:relationType && ?p != jps:spatial)
          filter(?s != ?keyword)
          ?keyword rdfs:label ?label_k . 
          optional { ?keyword schema:image ?image_k . }
        } order by desc(?count) limit 20
      `

    const result = await axios.get(
      process.env.endpoint +
        '?query=' +
        encodeURIComponent(query) +
        '&output=json'
    )

    const results = result.data.results.bindings

    const nodes = []

    const edges = []

    const nodes2: any = {}

    const entity = this.entity

    for (let i = 0; i < results.length; i++) {
      const obj = results[i]

      const s = obj.s.value
      if (!nodes2[s]) {
        // 中心ノード
        const node: any = {
          label: obj.label.value,
          id: Object.keys(nodes2).length,
          uri: s,
          p:
            entity === 'agential'
              ? 'https://w3id.org/hi/api/term/property#agential'
              : 'http://schema.org/' + entity,
          color: 'lightgreen',
        }

        if (obj.image) {
          node.shape = 'image'
          node.image = obj.image.value
          node.borderWidth = 4
          node.color = {
            border: 'lightgreen',
          }
        } else {
          node.shape = 'icon'
          node.icon = {
            code: getCode(node.p),
            color: 'gray',
          }
        }

        nodes2[s] = node
      }

      let label = obj.label.value
      label = obj.name ? obj.name.value : label

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

      const keyword = obj.keyword.value
      if (!nodes2[keyword]) {
        const node: any = {
          label: labelK,
          id: Object.keys(nodes2).length,
          uri: keyword,
          p,
          color: 'lightgreen',
        }

        if (obj.image_k) {
          node.shape = 'image'
          node.image = obj.image_k.value
          node.borderWidth = 4
          node.color = {
            border: 'lightgreen',
          }
        } else {
          node.shape = 'icon'
          node.icon = {
            code: getCode(p),
            color: 'gray',
          }
        }

        nodes2[keyword] = node
      }

      // ----------------

      edges.push({
        from: nodes2[s].id,
        to: nodes2[keyword].id,
        value: obj.count.value,
        title:
          obj.p.value + '（' + Number(obj.count.value).toLocaleString() + '）',
        color: 'lightgrey',
      })
    }

    for (const uri in nodes2) {
      const node = nodes2[uri]
      nodes.push(node)
    }

    this.nodes = nodes
    this.edges = edges
  }

  aaa(value: any) {
    const nodes = value.nodes
    if (nodes.length > 0) {
      const node = this.nodes[nodes[0]]

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
          name: 'entity-entity-id',
          params: {
            entity,
            id,
          },
        }),
        () => {},
        () => {}
      )
    }
  }

  select(id: string) {
    this.otherId = ''
    if (id !== this.$route.params.id) {
      this.otherId = id
    }

    const network: any = this.$refs.network
    network.selectNodes([id])
    network.focus(id)
  }

  stabilized() {
    this.options.physics.enabled = false
  }
}
</script>
