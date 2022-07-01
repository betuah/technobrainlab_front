<template>
    <div>
        <v-dialog
            v-model="visible"
            persistent
            width="unset"
        >
            <v-card class="tw-border-none">
                <v-progress-linear
                    color="error"
                    :value="progress"
                ></v-progress-linear>
                <v-card-title class="text-h6 secondary--text">
                    {{ title }}
                </v-card-title>
                <v-card-text class="text-caption">{{ message }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="secondary"
                        text
                        @click="_cancel()"
                    >
                        Cancel {{ count > 0 ? count : '' }}
                    </v-btn>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="_confirm()"
                        class="font-weight-bold"
                    >
                        DELETE
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'ALertConfirm',
        data: () => ({
            visible: false,
            title: '',
            message: '',
            timeout: 6,
            value: 0,
            count: 0,
            progress: 0,
            interval: null,
            countDownInterval: null,
            resolvePromise: undefined,
            rejectPromise: undefined,
        }),

        computed: {
            getTimeOut() {
                return this.timeout ? this.timeout * 1000 : 0
            },
        },

        methods: {
            show(title, text) {
                this.visible = true
                this.title = title
                this.message = text

                return new Promise((resolve, reject) => {
                    this.resolvePromise = resolve
                    this.rejectPromise = reject
                })
            },
            _confirm() {
                clearInterval(this.interval)
                this.value = 0
                this.progress = 0
                this.visible = false
                this.resolvePromise(true)
            },
            _cancel() {
                clearInterval(this.interval)
                this.value = 0
                this.progress = 0
                this.visible = false
                this.resolvePromise(false)
            },
            closeCount() {
                if (this.getTimeOut < 1) {
                    return
                }

                clearInterval(this.interval)

                this.count = this.timeout ? this.timeout : 0
                this.interval = setInterval(() => {
                    if (this.value === this.getTimeOut) {
                        this._cancel()
                        return
                    }

                    if (this.value % 1000 == 0) this.count--

                    this.value = this.value + 100
                    this.progress = Math.round((this.value / this.getTimeOut) * 100)
                }, 100)
            }
        }
    }
</script>