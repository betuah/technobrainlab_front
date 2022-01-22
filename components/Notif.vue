<template>
    <v-snackbar
        v-model="visible"
        timeout="5000"
        :color="notif.color"
        right
        top
    >
        <div class="d-flex flex-row py-1 rounded-xl">
            <v-icon small>
                {{ notif.icon }}
            </v-icon>
            <div class="text-caption ml-4">
                {{ notif.message }}
            </div>
        </div>

        <template v-slot:action="{ attrs }">
            <v-btn
                text
                v-bind="attrs"
                small
                @click="visible = false"
            >
            Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    export default {
        data: () => ({
            visible: false,
            notif: {
                color: 'success',
                icon: 'check_circle',
                message: ``
            }
        }),
        methods: {
            show(type, message) {
                switch (type) {
                    case 'success':
                        this.notif = {
                            color: 'success',
                            icon: 'check_circle',
                            message: `${message}`
                        }
                        break;
                    
                    case 'info':
                        this.notif = {
                            color: 'light-blue',
                            icon: 'info',
                            message: `${message}`
                        }
                        break;

                    case 'warning':
                        this.notif = {
                            color: 'warning',
                            icon: 'warning',
                            message: `${message}`
                        }
                        break;
                    
                    case 'error':
                        this.notif = {
                            color: 'error',
                            icon: 'error',
                            message: `${message}`
                        }
                        break;
                }
                this.visible = true
            }
        }
    }
</script>