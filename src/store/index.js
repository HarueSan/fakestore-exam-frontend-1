import { createStore } from "vuex";
import thousandSeparator from "@/utils/thousandSeparator";
const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, payload) {
      const isExistInCart = state.cart.find((i) => i.product.id === payload.id);

      if (isExistInCart) {
        state.cart = state.cart.map((i) => {
          if (i.product.id === payload.id) {
            return {
              ...i,
              quantity: i.quantity + 1,
            };
          }
          return i;
        });
      } else {
        state.cart = [...state.cart, { product: payload, quantity: 1 }];
      }
    },
    deleteFromCart(state, payload) {
      state.cart = state.cart.filter((i) => i.product.id !== payload.id);
    },
    addQuantity(state, payload) {
      state.cart = state.cart.map((i) => {
        if (i.product.id === payload.id) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        }
        return i;
      });
    },
    removeQuantity(state, payload) {
      const existItem = state.cart.find((i) => i.product.id === payload.id);
      if (existItem) {
        const newQty = existItem.quantity - 1;
        if (newQty <= 0) {
          state.cart = state.cart.filter((i) => i.product.id !== payload.id);
          return;
        }
      }

      state.cart = state.cart.map((i) => {
        if (i.product.id === payload.id) {
          const newQty = i.quantity - 1;
          console.log(newQty);

          return {
            ...i,
            quantity: newQty,
          };
        }
        return i;
      });
    },
  },
  getters: {
    getCartLength(state) {
      return state.cart.length;
    },
    getSubTotal(state) {
      const allCost = state.cart.map((i) => i.product.price * i.quantity);
      const result = allCost.reduce((a, b) => a + b, 0).toFixed(2);
      return thousandSeparator(result)
    },
  },
});

export default store;
