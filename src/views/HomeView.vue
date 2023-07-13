<template>
  <v-container>
    <div class="mb-8 d-flex justify-start">
      <v-btn-toggle v-model="selectedCategory" divided variant="outlined" color="secondary">
        <v-btn v-for="category in categories" :key="category">
          {{ category }}
        </v-btn>
      </v-btn-toggle>
    </div>
    <v-row dense>
      <v-col v-for="product in products" :key="product.id" class="v-col-12 v-col-sm-6 v-col-md-4 v-col-lg-3 mb-2 pa-2">
        <v-card v-if="!isLoading" elevation="1" class="product-card pa-2">
          <div class=" d-flex justify-start mb-2">
            <v-chip size="small" color="secondary">{{ product.category }}</v-chip>
          </div>
          <div class="product-img">
            <v-img :src="product.image"></v-img>
          </div>
          <v-card-item class="pb-0">
            <h3 class="text-truncate">{{ product.title }}</h3>
            <p class="text-truncate">{{ product.description }}</p>
            <div class="d-flex mt-2 text-left">
              <v-icon size="small" color="amber" icon="mdi-star"></v-icon>
              <p class=" text-subtitle-2 mr-1">{{ product?.rating?.rate }}</p>
              <p class=" text-subtitle-2 text-grey-darken-1">({{ product?.rating?.count }} reviews)</p>
            </div>
            <div class="text-right">
              <p class="text-h6">{{ product.price.toFixed(2) }} $</p>
            </div>
          </v-card-item>
          <v-card-actions class="pt-0">
            <div class="d-flex align-center justify-end w-100">
              <v-btn @click="addToCart(product)" prepend-icon="mdi-cart-arrow-down" variant="flat" color="primary">
                Add to Cart
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
        <v-skeleton-loader v-if="isLoading" type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import appConfig from '@/appConfig'

export default {
  name: "HomeView",

  async mounted() {
    this.getProducts()
    this.getCategories()
  },

  data: () => ({
    products: [],
    isLoading: true,
    selectedCategory: 0,
    categories: []
  }),

  computed: {},

  watch: {
    selectedCategory(newVal) {
      if (!newVal) {
        this.selectedCategory = 0
        return this.getProducts()
      }
      const category = this.categories[newVal]
      this.getProducts(category)
    }
  },
  methods: {
    async getProducts(category) {
      this.isLoading = true
      this.products = Array.from(Array(8), (_, i) => ({ id: i + 1 }));
      if (category) {
        const apiName = `/products/category/${category}`
        const routeApi = appConfig.apiUrl + apiName
        const { data } = await this.axios.get(routeApi)
        this.products = data
      }
      else {
        const apiName = "/products"
        const routeApi = appConfig.apiUrl + apiName
        const { data } = await this.axios.get(routeApi)
        this.products = data
      }
      this.isLoading = false
    },

    async getCategories() {
      this.isLoading = true
      const apiName = "/products/categories"
      const routeApi = appConfig.apiUrl + apiName
      const { data } = await this.axios.get(routeApi)
      this.categories = ['all', ...data]
      this.isLoading = false
    },

    addToCart(value) {
      this.$store.commit('addToCart', value)
    }
  },
}
</script>


<style scoped>
.product-card {
  width: 100%;
}

.product-card .product-img {
  height: 200px
}
</style>