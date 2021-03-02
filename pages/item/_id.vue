<template>
  <div>
    <v-container class="py-5">
      <iframe
        :src="getIframeUrl()"
        width="100%"
        height="400"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </v-container>
    <!--
    <v-sheet class="py-2" color="grey lighten-3">
      <v-container>
        <h2>{{ label }}</h2>
      </v-container>
    </v-sheet>
    -->
    <v-container>
      <p class="text-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="mx-1"
              icon
              target="_blank"
              :href="getCurationUrl()"
              v-on="on"
              ><img :src="baseUrl + '/img/icons/icp-logo.svg'" width="30px"
            /></v-btn>
          </template>
          <span>{{ 'IIIF Curation Viewer' }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="mx-1"
              icon
              target="_blank"
              :href="getUtaUrl()"
              v-on="on"
              ><img :src="baseUrl + '/img/icons/ut.ico'" width="30px"
            /></v-btn>
          </template>
          <span>{{ $t('uta') }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              class="mx-1"
              target="_blank"
              :href="
                baseUrl + '/snorql/?describe=' + prefix + '/api/data/' + id
              "
              v-on="on"
              ><img :src="baseUrl + '/img/icons/rdf-logo.svg'" width="30px"
            /></v-btn>
          </template>
          <span>{{ 'RDF' }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              class="mx-1"
              target="_blank"
              :href="source.sourceData"
              v-on="on"
              ><img :src="baseUrl + '/img/icons/json-logo.svg'" width="30px"
            /></v-btn>
          </template>
          <span>{{ 'JSON' }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="mx-1"
              icon
              target="_blank"
              :href="'https://twitter.com/intent/tweet?url=' + url"
              v-on="on"
              ><v-icon>mdi-twitter</v-icon></v-btn
            >
          </template>
          <span>{{ 'Twitter' }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="mx-1"
              icon
              target="_blank"
              :href="'https://www.facebook.com/sharer/sharer.php?u=' + url"
              v-on="on"
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
          </template>
          <span>{{ 'Facebook' }}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              class="mx-1"
              icon
              target="_blank"
              :href="'http://getpocket.com/edit?url=' + url"
              v-on="on"
              ><img
                style="font-size: 30px"
                src="https://cultural.jp/img/icons/pocket.svg"
            /></v-btn>
          </template>
          <span>{{ 'Pocket' }}</span>
        </v-tooltip>

        <template v-if="isSignedIn">
          <v-btn icon :color="isOwn ? 'pink' : ''" @click="good(id, !isOwn)">
            <v-icon class="mx-1">{{
              isOwn ? 'mdi-heart' : 'mdi-heart-outline'
            }}</v-icon
            >{{ userUids.length > 0 ? userUids.length : '' }}
          </v-btn>
        </template>
        <template v-else>
          <v-icon class="mx-1">mdi-heart-outline</v-icon
          >{{ userUids.length > 0 ? userUids.length : '' }}
        </template>
      </p>
    </v-container>
    <v-sheet
      class="grey lighten-3 py-5 px-3 py-3 mt-4 mb-5"
      style="background-color: #f9f6f0; word-break: break-word"
    >
      <v-container>
        <dl class="row">
          <dt class="col-sm-3 text-muted"><b>URL</b></dt>
          <dd class="col-sm-9">
            <a :href="url">{{ url }}</a>
          </dd>
        </dl>

        <dl class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('label') }}</b>
          </dt>
          <dd class="col-sm-9">
            {{ $utils.formatArrayValue(title) }}
          </dd>
        </dl>

        <dl v-if="source.tags && source.tags.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('text') }}</b>
          </dt>
          <dd class="col-sm-9">
            <span v-for="(tag, key) in source.tags" :key="key" class="mr-2">{{
              tag
            }}</span>
          </dd>
        </dl>

        <dl v-if="source.type && source.type.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('タイプ') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.type"
              :key="key"
              class="mr-2"
              :to="localePath({ name: 'search', query: { 'fc-type': tag } })"
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl v-if="source.agentials && source.agentials.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('人物') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.agentials"
              :key="key"
              class="mr-2"
              :to="
                localePath({ name: 'search', query: { 'fc-agentials': tag } })
              "
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl v-if="source.keywords && source.keywords.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('タグ') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.keywords"
              :key="key"
              class="mr-2"
              :to="
                localePath({ name: 'search', query: { 'fc-keywords': tag } })
              "
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl v-if="source.places && source.places.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('場所') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.places"
              :key="key"
              class="mr-2"
              :to="localePath({ name: 'search', query: { 'fc-places': tag } })"
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl v-if="source.times && source.times.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('時間') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.times"
              :key="key"
              class="mr-2"
              :to="localePath({ name: 'search', query: { 'fc-times': tag } })"
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl v-if="source.orgs && source.orgs.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('組織') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.orgs"
              :key="key"
              class="mr-2"
              :to="localePath({ name: 'search', query: { 'fc-orgs': tag } })"
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl v-if="source.events && source.events.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('出来事') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.events"
              :key="key"
              class="mr-2"
              :to="localePath({ name: 'search', query: { 'fc-events': tag } })"
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl v-if="source.mtags && source.mtags.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('機械タグ') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.mtags"
              :key="key"
              class="mr-2"
              :to="localePath({ name: 'search', query: { 'fc-mtags': tag } })"
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl v-if="source.label && source.label.length > 0" class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('帖数') }}</b>
          </dt>
          <dd class="col-sm-9">
            <nuxt-link
              v-for="(tag, key) in source.label"
              :key="key"
              class="mr-2"
              :to="localePath({ name: 'search', query: { 'fc-label': tag } })"
              >{{ tag }}</nuxt-link
            >
          </dd>
        </dl>

        <dl class="row">
          <dt class="col-sm-3 text-muted">
            <b>{{ $t('license') }}</b>
          </dt>
          <dd class="col-sm-9">
            <template v-if="$i18n.locale == 'ja'">
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
                ><img
                  alt="クリエイティブ・コモンズ・ライセンス"
                  style="border-width: 0"
                  src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a
              ><br />この作品は<a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
                >クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a
              >の下に提供されています。
            </template>
            <template v-else>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
                ><img
                  alt="Creative Commons License"
                  style="border-width: 0"
                  src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a
              ><br />This work is licensed under a
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
                >Creative Commons Attribution 4.0 International License</a
              >.
            </template>
          </dd>
        </dl>
      </v-container>
    </v-sheet>

    <v-container fluid>
      <MoreLikeThis class="mb-5" :item-id="id" :query="source.tags" />

      <SimilarImages class="mb-5" :item-id="id" :query="source.images" />
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from '../../plugins/firebase'
// import MoreLikeThis from '~/components/item/MoreLikeThis.vue'
// import SimilarImages from '~/components/item/SimilarImages.vue'

const FieldValue = firebase.firestore.FieldValue
const firestore = firebase.firestore()

export default {
  async asyncData({ payload, app }) {
    if (payload) {
      return payload
    } else {
      const id = app.context.route.params.id

      const url = 'https://gimli-eu-west-1.searchly.com/main/_doc/' + id
      const username = 'search'
      const password = '1ff162746e60feac7c91c12d37cf0ca6'

      const response = await axios.get(url, {
        auth: {
          username,
          password,
        },
      })

      const data = response.data
      const source = data._source

      if (source.manifest) {
        source.manifest = source.manifest[0]
      }

      if (source.member) {
        source.member = source.member[0]
      }

      if (source._url) {
        source._url = source._url[0]
      }

      source.id = response._id
      source.sourceData =
        'https://' + username + ':' + password + '@' + url.split('://')[1]

      return { source }
    }
  },

  data() {
    return {
      baseUrl: process.env.BASE_URL,
      prefix: 'https://kunshujo.web.app',
      userUids: [],
    }
  },

  computed: {
    // 算出 getter 関数
    url() {
      // `this` は vm インスタンスを指します
      return this.source._url
    },
    id() {
      return this.$route.params.id
    },
    isSignedIn() {
      return this.$store.getters.getIsSignedIn
    },
    userUid() {
      return this.$store.getters.getUserUid
    },
    title() {
      return this.source._label
    },
    isOwn() {
      return this.userUids.includes(this.userUid)
    },
  },

  created() {
    firebase
      .firestore()
      .collection('items')
      .doc(this.id)
      .onSnapshot(
        (res) => {
          let userUids = []

          if (res.exists && res.data().likedUsers) {
            userUids = res.data().likedUsers
          }

          this.userUids = userUids
        },
        (error) => {
          console.error('GET_REALTIME_LIST', error)
        }
      )
  },

  methods: {
    getIframeUrl() {
      const memberId = this.source.member
      const manifest = this.source.manifest
      const url =
        this.baseUrl +
        '/curation/?manifest=' +
        manifest +
        '&canvas=' +
        encodeURIComponent(memberId)
      return url
    },

    getCurationUrl() {
      if (!this.source.member) {
        return null
      }
      const memberId = this.source.member
      const manifest = this.source.manifest
      const memberIdSpl = memberId.split('#xywh=')
      const canvasId = memberIdSpl[0]
      const xywh = memberIdSpl[1]
      const url =
        'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=' +
        manifest +
        '&canvas=' +
        encodeURIComponent(canvasId) +
        '&xywh=' +
        xywh +
        '&xywh_highlight=border'
      return url
    },
    getUtaUrl() {
      if (!this.source.member) {
        return null
      }
      const memberId = this.source.member
      const memberIdSpl = memberId.split('#xywh=')
      const canvasId = memberIdSpl[0]
      const xywh = memberIdSpl[1]

      const page = canvasId.split('/canvas/p')[1]

      const id = canvasId.split('/iiif/')[1].split('/canvas/')[0]

      const url =
        'https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/tanaka/document/' +
        id +
        '#?c=0&m=0&s=0&cv=' +
        (Number(page) - 1) +
        '&xywh=' +
        xywh
      return url
    },

    async good() {
      const addFlag = !this.isOwn

      // ----------

      // itemRef
      const item = await firebase
        .firestore()
        .collection('items')
        .doc(this.id)
        .get()
      const itemRef = item.ref
      if (!item.exists) {
        await itemRef.set({
          id: this.id,
          createTime: FieldValue.serverTimestamp(),
          updateTime: FieldValue.serverTimestamp(),
        })
      }

      const batch = firestore.batch()

      // anotherRef
      const anotherUser = await firebase
        .firestore()
        .collection('users')
        .doc(this.userUid)
        .get()

      const anotherUserRef = anotherUser.ref
      if (!anotherUser.exists) {
        await anotherUserRef.set({
          id: this.userUid,
          createTime: FieldValue.serverTimestamp(),
          updateTime: FieldValue.serverTimestamp(),
        })
      }

      if (addFlag) {
        batch.update(firestore.doc(itemRef.path), {
          // id: anotherUserRef.id,
          updateTime: FieldValue.serverTimestamp(),
          likedUsers: firebase.firestore.FieldValue.arrayUnion(
            anotherUserRef.id
          ),
        })

        batch.set(
          firestore
            .doc(anotherUserRef.path)
            .collection('likedItems')
            .doc(itemRef.id),
          {
            id: itemRef.id,
            itemRef,
            createTime: FieldValue.serverTimestamp(),
            title: this.source._label[0],
            thumbnail: this.source._thumbnail[0],
          }
        )

        // batch.update(itemRef, { likeCount: FieldValue.increment(1) })
        batch.update(anotherUserRef, { likeItemCount: FieldValue.increment(1) })
      } else {
        batch.update(firestore.doc(itemRef.path), {
          // id: anotherUserRef.id,
          updateTime: FieldValue.serverTimestamp(),
          likedUsers: firebase.firestore.FieldValue.arrayRemove(
            anotherUserRef.id
          ),
        })

        batch.delete(
          firestore
            .doc(anotherUserRef.path)
            .collection('likedItems')
            .doc(itemRef.id)
        )

        // batch.update(itemRef, { likeCount: FieldValue.increment(-1) })
        batch.update(anotherUserRef, {
          likeItemCount: FieldValue.increment(-1),
        })
      }

      await batch.commit()
    },
  },

  head() {
    const title = this.title
    return {
      title,
      meta: [
        /*
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        */
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        /*
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        */
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.thumbnail,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>
