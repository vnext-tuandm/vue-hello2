<template lang="">
    <div>
        <v-footer padless class="wrapper-ft">
            <v-col
            class="text-center"
            cols="12"
            >
            {{ new Date().getFullYear() }} — <strong>TDM</strong>
            </v-col>
        </v-footer>
    </div>
</template>
<script>
export default {
    name: "Footer"
}
</script>
<style lang="scss">
    $bg-footer :#0B0D17;
    .wrapper-ft{
        background-color: $bg-footer !important;
        color: white !important;
    }
</style>