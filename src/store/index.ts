import { createStore } from 'vuex'

export default createStore({
  state: {
    restaurantName: "La belle Vue",
    shoppingCart : 0,
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "/images/croissant.jpg",
          alt: "Un croissant",
        },
        inStock: true,
        quantity: 1,
        price: 2.99,
      },
      {
        name: "Baguette de pain",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain",
        },
        inStock: true,
        quantity: 1,
        price: 3.99,
      },
      {
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat",
        },
        inStock: false,
        quantity: 1,
        price: 4.99,
      },
    ],
  },
  getters: {
    copyright :state => {
      const currentYear = new Date().getFullYear();
      return `Copyright ${state.restaurantName} ${currentYear}`;
    },
  },
  mutations: {
    INCREMENT_CART(state,amount) {
      state.shoppingCart += amount;
    }
  },
  actions: {
  //   incrementCart(context, amount) {
  //     context.commit('INCREMENT_CART', amount)
  // }
  //Destructuration 
    incrementCart({commit}, amount): void {
      commit('INCREMENT_CART', amount)
  }

  },
  modules: {
  }
})
