<template lang="pug">
  .container(v-if="track && track.id")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar
            a.button.is-primary.is-large
              span.icon(@click="selectTrack") ▶️
      .column.is-8
        .panel
          .panel-heading
            h1.title {{trackTitle}}
          .panel-block
            article.media
              .media-content
                .content
                  ul
                    li(v-for="(v, k) in track")
                      strong {{k}};&nbsp;
                      span {{v}}
              nav.level
                .level-left
                  a.level-item        
        
</template>
<script>

import trackMixin from '@/mixins/track'
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  mixins: [trackMixin],
  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({id})
        .then(() => {
          console.log('Track loader ...')
        })
    }
  },
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])

  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>
<style lang="scss">
  .columns {
    margin: 20px;
  }

  .button-bar {
    margin-top: 20px
  }
</style>

