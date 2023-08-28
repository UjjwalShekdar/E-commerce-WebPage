const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: "Ujjwal Shekdar",
            des: "Building new project with vue",
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'green'},
                {id: 2, color: 'blue'}
            ],
            sizes: ['S', 'M', 'L', 'XL'],

        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        }
    }
})