const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: "Socks",
            des: "Building new project with vue",
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            onSale: false,
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['S', 'M', 'L', 'XL'],

        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart > 0) {
              this.cart-=1;
            }
          },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})