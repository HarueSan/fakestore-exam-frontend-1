<template>
    <v-list elevation="1">
        <div class="cart-list">
            <div v-if="this.$store.getters.getCartLength <= 0" class=" text-center align-center pa-12">
                <p class=" text-grey-lighten-1">Empty Cart</p>
                <v-icon color="grey-lighten-1">mdi-emoticon-frown-outline</v-icon>
            </div>
            <v-list-item v-for="item in cart" :key="item.product.id">
                <v-row>
                    <v-col cols="3">
                        <v-img :src="item.product.image" height="50px" width="50px" alt="product" />
                    </v-col>
                    <v-col cols="9">
                        <p class="text-body-1 mr-2 text-truncate">{{ item.product.title }}</p>
                        <div class="d-flex justify-space-between">
                            <div class="d-flex align-center">
                                <v-btn @click="this.$store.commit('removeQuantity', item.product)" size="small"
                                    icon="mdi-minus" variant="text">
                                </v-btn>
                                <p class="text-body-1">{{ item.quantity }}</p>
                                <v-btn @click="this.$store.commit('addQuantity', item.product)" size="small" icon="mdi-plus"
                                    variant="text">
                                </v-btn>
                            </div>
                            <div class="text-right d-flex align-center">
                                <p class="font-weight-bold">{{ (item.quantity * item.product.price).toFixed(2) }} $</p>
                            </div>
                            <v-btn variant="text" size="small" icon="mdi-delete" color="error"
                                @click="this.$store.commit('deleteFromCart', item.product)">
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
                <v-divider />
            </v-list-item>
        </div>
        <v-divider />
        <div class="d-flex px-4 justify-space-between align-center">
            <p class="text-subtitle-1 mr-4 text-uppercase">Sub Total</p>
            <p class="text-body-1">{{ this.$store.getters.getSubTotal }} $</p>
        </div>
    </v-list>
</template>
<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart
        }
    }
}
</script>
<style scoped>
.cart-list {
    width: 320px;
    min-height: 180px !important;
}

.product-detail {
    width: 230px;
}
</style>