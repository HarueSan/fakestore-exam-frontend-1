<template>
    <v-app-bar density="compact" color="primary" elevation="0" class="px-8 pa-2">
        <v-app-bar-title class="text-left font-weight-bold">My Fake Store</v-app-bar-title>
        <template v-slot:append>
            <p class=" text-body-1">
                {{ this.$store.getters.getSubTotal }} $
            </p>
            <v-badge color="amber" :content="this.$store.getters.getCartLength">
                <v-btn size="small" id="menu-activator" icon="mdi-cart"></v-btn>
            </v-badge>
            <v-menu activator="#menu-activator" :close-on-content-click="false">
                <cart-menu />
            </v-menu>
        </template>
    </v-app-bar>
</template>

<script>
import CartMenu from '@/components/CartMenu.vue'
export default {
    components: {
        CartMenu
    },
}
</script>