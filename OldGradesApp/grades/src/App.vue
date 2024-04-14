<template>
    <v-app>
        <app-loading-mask></app-loading-mask>
        
        <template v-if="$store.state.auth.session">
            <app-drawer></app-drawer>
            <app-bar></app-bar>
            <v-main>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-main>
        </template>
    </v-app>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/base/AppBar'
import AppDrawer from '@/components/base/AppDrawer'
import AppLoadingMask from '@/components/base/AppLoadingMask';

export default {
    components: {
        AppBar,
        AppDrawer,
        AppLoadingMask
    },

    data: () => ({

    }),

    async created() {
        //await this.$store.dispatch("auth/getSession"); //аутентификация
        //this.$store.dispatch("auth/getUser"); //получение текущего пользователя (AD login)
    }
}
</script>
