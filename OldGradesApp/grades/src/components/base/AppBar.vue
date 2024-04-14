<template>
    <v-app-bar app dense>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{title}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBar",

    data() {
        return {
            title: "КубГУ"
        }
    },

    methods: {
        toggleDrawer() {this.$store.commit('toggleDrawer')}
    }
}
</script>