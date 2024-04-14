<template>
    <v-list-item>
        <v-list-item-avatar>
            <v-icon x-large>mdi-account-circle</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title>{{$store.state.auth.user}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: "AppUserInfo"
}
</script>