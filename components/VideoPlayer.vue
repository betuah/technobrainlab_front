<template>
    <video
        :class="`video-js vjs-big-play-centered ${ this.classes }`"
        controls
        ref="videoPlayer"
    >
    </video>
</template>

<script>
import videojs from 'video.js'
export default {
    name: "VideoPlayer",
    props: [ "classes", "options"],
    data: () => ({
        player: null,
        defaultOptions: {
            fluid: true,
            aspectRatio: '16:9',
            preload: 'auto',
            fill: false,
            responsive: true
        }
    }),
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, {...this.defaultOptions, ...this.options}, function onPlayerReady() {})
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>