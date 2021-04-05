const API = ///

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: `/catalogData.json`,
    products: [],
    searchLine: "",
    isVisibleCart: false,
    cartList: [],
    emptyCart: true,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => console.log(error))
    },
    addProduct(product) {
      if (this.emptyCart) {
        this.emptyCart = false;
        let cartProd = {
          ...product
        };
        cartProd.quantity = 1;
        this.cartList.push(cartProd);
      } else {
        let find = this.cartList.find(el => el.id_product === product.id_product);
        if (find) {
          find.quantity++;
        } else {
          let cartProd = {
            ...product
          };
          cartProd.quantity = 1;
          this.cartList.push(cartProd);

        }
      }
    },

    cartVisible() {
      if (this.isVisibleCart) {
        this.isVisibleCart = false;
      } else {
        this.isVisibleCart = true;
      }

    },

    removeCart() {

    },
  },

  computed: {
    searchFor () {
        let text = this.searchText.toLowerCase().trim();
        
        if (text === '') {
            this.filteredProducts = this.products;
        } else {
            this.filteredProducts = this.products.filter((el) => {
                return el.product_name.toLowerCase().includes(text);
        });
    }
  },
  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });
    this.getJson(`getProducts.json`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });
  },
},
  })

