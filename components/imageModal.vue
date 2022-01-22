<template>
    <div>
        <v-dialog
            v-model="visible"
            width="unset"
        >
            <v-img
                :src="`${uri}`"
                contain
                class="grey lighten-2"
            ></v-img>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'imageModal',
        data: () => ({
            visible: false,
            uri: ""
        }),
        methods: {
            show(uri) {
                this.visible = true
                this.uri = uri
            },
            dismiss() {
                this.visible = false
                this.uri = ""
            }
        }
    }
</script>