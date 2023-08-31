const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            brand: "UjSh",
            product: "Socks",
            des: "Building new project with vue",
            selectedVariant: 0,
            inventory: 10,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id: 2, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
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
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})