<template>
    <v-app-bar density="compact" color="primary" elevation="0" class="px-8">
        <v-app-bar-title class="text-left">My Fake Store</v-app-bar-title>
        <template v-slot:append>
            <v-btn prepend-icon="mdi-cart">Cart ({{ this.$store.getters.getCartLength }})
                <v-menu activator="parent" :close-on-content-click="false">
                    <cart-menu />
                </v-menu>
            </v-btn>
        </template>

    </v-app-bar>
</template>

<script>
import CartMenu from '@/components/CartMenu.vue'
export default {
    components: {
        CartMenu
    },
    data() {
        return {
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
    },
}
</script>