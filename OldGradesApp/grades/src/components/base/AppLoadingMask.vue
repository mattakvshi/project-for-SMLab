<template>
    <v-dialog
        v-model="isLoading"
        persistent
        overlay-opacity="0.15"
        width="20%"
    >
        <v-progress-linear
            indeterminate
            color="light-blue"
        ></v-progress-linear>
    </v-dialog>
</template>

<script>
export default {
    name: "AppLoadingMask",

    computed: {
        isLoading: {
            get() {return this.$store.state.isLoading},
            set() {}
        }
    }
}
</script>