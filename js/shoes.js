// Shoelist
const shoePage = 'shoe.html?shoe_id=';
var shoeList = [
    {
        id: 0,
        name: 'Nike Air Zoom Pegasus 38',
        for: "Men's Shoes",
        price: 119.99,
        description: '',
        sex: 'men',
        msg: 'Promo Exclusion',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg',
            },
            1: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg',
            }
        },
        color_list:[
            'black',
            'white',
            'grey',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: false,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg',
            1:'images/sneakers/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg',
            2:'images/sneakers/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg',
            3:'images/sneakers/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 1,
        name: 'Lunar Force 1 Acronym',
        for: "Men's Shoes",
        price: 200.00,
        description: '',
        sex: 'women',
        msg: 'Coming Soon',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/nike-air-force-1-acronym.jpg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/nike-air-force-1-acronym.jpg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/nike-air-force-1-acronym.jpg',
            },
        },
        color_list:[
            'white',
        ],
        sizes: [
            {
                size: 38,
                in_stock: false,
                announcement: '',
            },
            {
                size: 40,
                in_stock: false,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/nike-air-force-1-acronym.jpg',
            1:'images/sneakers/nike-air-force-1-acronym.jpg',
            2:'images/sneakers/nike-air-force-1-acronym.jpg',
            3:'images/sneakers/nike-air-force-1-acronym.jpg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 2,
        name: 'Dunk High x AMBUSH Black',
        for: "Men's Shoes",
        price: 179.99,
        description: '',
        sex: 'unisex',
        msg: 'Just In',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/dunk-high-x-ambush-black.jpg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/dunk-high-x-ambush-black.jpg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/dunk-high-x-ambush-black.jpg',
            },
        },
        color_list:[
            'black',
            'white',
        ],
        sizes: [
            {
                size: 38,
                in_stock: false,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: false,
                announcement: '',
            },
            {
                size: 45,
                in_stock: false,
                announcement: '',
            },
            {
                size: 46,
                in_stock: false,
                announcement: '',
            },
            {
                size: 47,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/dunk-high-x-ambush-black.jpg',
            1:'images/sneakers/dunk-high-x-ambush-black.jpg',
            2:'images/sneakers/dunk-high-x-ambush-black.jpg',
            3:'images/sneakers/dunk-high-x-ambush-black.jpg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 3,
        name: 'Nike Air Force 1 LXX',
        for: "Men's Shoes",
        price: 109.99,
        description: '',
        sex: 'men',
        msg: 'Just In',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-force-1-lxx-shoe-Q4pP8V.png.jpeg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-lxx-shoe-Q4pP8V.png.jpeg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-lxx-shoe-Q4pP8V.png.jpeg',
            },
        },
        color_list:[
            'white',
            'blue',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: false,
                announcement: '',
            },
            {
                size: 47,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-force-1-lxx-shoe-Q4pP8V.png.jpeg',
            1:'images/sneakers/air-force-1-lxx-shoe-Q4pP8V.png.jpeg',
            2:'images/sneakers/air-force-1-lxx-shoe-Q4pP8V.png.jpeg',
            3:'images/sneakers/air-force-1-lxx-shoe-Q4pP8V.png.jpeg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 4,
        name: 'Nike Air Zoom Pegasus',
        for: "Men's Shoes",
        price: 119.99,
        description: '',
        sex: 'men',
        msg: 'Promo Exclusion',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-running-shoe-GVlNV5.png.jpeg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-running-shoe-GVlNV5.png.jpeg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-running-shoe-GVlNV5.png.jpeg',
            },
        },
        color_list:[
            'black',
            'white',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: false,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-zoom-pegasus-38-running-shoe-GVlNV5.png.jpeg',
            1:'images/sneakers/air-zoom-pegasus-38-running-shoe-GVlNV5.png.jpeg',
            2:'images/sneakers/air-zoom-pegasus-38-running-shoe-GVlNV5.png.jpeg',
            3:'images/sneakers/air-zoom-pegasus-38-running-shoe-GVlNV5.png.jpeg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 5,
        name: 'Nike Air Force 1 Low',
        for: "Men's Shoes",
        price: 109.99,
        description: '',
        sex: 'men',
        msg: 'Promo Exclusion',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-force-1-low-shoe-gvG9vB.png.jpeg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-low-shoe-gvG9vB.png.jpeg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-low-shoe-gvG9vB.png.jpeg',
            },
        },
        color_list:[
            'black',
            'white',
            'green',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: false,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-force-1-low-shoe-gvG9vB.png.jpeg',
            1:'images/sneakers/air-force-1-low-shoe-gvG9vB.png.jpeg',
            2:'images/sneakers/air-force-1-low-shoe-gvG9vB.png.jpeg',
            3:'images/sneakers/air-force-1-low-shoe-gvG9vB.png.jpeg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 6,
        name: 'Nike Air Max 90 G',
        for: "Men's Shoes",
        price: 139.99,
        description: '',
        sex: 'men',
        msg: 'Just In',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-max-90-g-golf-shoe-zCm8W1.png.jpeg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-90-g-golf-shoe-zCm8W1.png.jpeg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-90-g-golf-shoe-zCm8W1.png.jpeg',
            },
        },
        color_list:[
            'black',
            'white',
            'grey',
            'blue',
            'pink',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: false,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-max-90-g-golf-shoe-zCm8W1.png.jpeg',
            1:'images/sneakers/air-max-90-g-golf-shoe-zCm8W1.png.jpeg',
            2:'images/sneakers/air-max-90-g-golf-shoe-zCm8W1.png.jpeg',
            3:'images/sneakers/air-max-90-g-golf-shoe-zCm8W1.png.jpeg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 7,
        name: 'Air Force 1 Pastel Reveal',
        for: "Men's Shoes",
        price: 119.99,
        description: '',
        sex: 'women',
        msg: 'Launching in SNKRS',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/women-s-air-force-1-pastel-reveal-release-date.jpg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/women-s-air-force-1-pastel-reveal-release-date.jpg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/women-s-air-force-1-pastel-reveal-release-date.jpg',
            },
        },
        color_list:[
            'white',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: false,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/women-s-air-force-1-pastel-reveal-release-date.jpg',
            1:'images/sneakers/women-s-air-force-1-pastel-reveal-release-date.jpg',
            2:'images/sneakers/women-s-air-force-1-pastel-reveal-release-date.jpg',
            3:'images/sneakers/women-s-air-force-1-pastel-reveal-release-date.jpg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 8,
        name: 'Nike Air Max 95',
        for: "Men's Shoes",
        price: 169.99,
        description: '',
        sex: 'women',
        msg: 'Coming Soon',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-max-95-shoe-s1vKMc.png.jpeg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-95-shoe-s1vKMc.png.jpeg',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-max-95-shoe-s1vKMc.png.jpeg',
            },
        },
        color_list:[
            'white',
            'pink',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 42,
                in_stock: false,
                announcement: '',
            },
            {
                size: 43,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-max-95-shoe-s1vKMc.png.jpeg',
            1:'images/sneakers/air-max-95-shoe-s1vKMc.png.jpeg',
            2:'images/sneakers/air-max-95-shoe-s1vKMc.png.jpeg',
            3:'images/sneakers/air-max-95-shoe-s1vKMc.png.jpeg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 9,
        name: 'Air Jordan 1 Hi FlyEasek',
        for: "Men's Shoes",
        price: 159.99,
        description: '',
        sex: 'men',
        msg: 'Promo Exclusion',
        colors: {
            0: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-jordan-1-hi-flyease-shoe-7J4Sf9.png.jpeg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-jordan-1-hi-flyease-shoe-7J4Sf9.png.jpeg',
            },
            2: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-jordan-1-hi-flyease-shoe-7J4Sf9.png.jpeg',
            },
        },
        color_list:[
            'white',
            'grey',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 42,
                in_stock: false,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: true,
                announcement: '',
            },
            {
                size: 48,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-jordan-1-hi-flyease-shoe-7J4Sf9.png.jpeg',
            1:'images/sneakers/air-jordan-1-hi-flyease-shoe-7J4Sf9.png.jpeg',
            2:'images/sneakers/air-jordan-1-hi-flyease-shoe-7J4Sf9.png.jpeg',
            3:'images/sneakers/air-jordan-1-hi-flyease-shoe-7J4Sf9.png.jpeg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 10,
        name: 'Air Jordan 1 Low',
        for: "Men's Shoes",
        price: 129.99,
        description: '',
        sex: 'men',
        msg: 'Launching in SNKRS',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-jordan-1-low-to-my-first-coach-release-date.jpg',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-jordan-1-low-to-my-first-coach-release-date.jpg',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-jordan-1-low-to-my-first-coach-release-date.jpg',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-jordan-1-low-to-my-first-coach-release-date.jpg',
            },
        },
        color_list:[
            'white',
            'blue',
            'pink',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: false,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: false,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-jordan-1-low-to-my-first-coach-release-date.jpg',
            1:'images/sneakers/air-jordan-1-low-to-my-first-coach-release-date.jpg',
            2:'images/sneakers/air-jordan-1-low-to-my-first-coach-release-date.jpg',
            3:'images/sneakers/air-jordan-1-low-to-my-first-coach-release-date.jpg'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 11,
        name: 'Nike Air Zoom Pegasus 38',
        for: "Men's Shoes",
        price: 124.99,
        description: '',
        sex: 'men',
        msg: 'Member Access',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-road-running-shoes-snS7wr.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-road-running-shoes-snS7wr.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-road-running-shoes-snS7wr.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-zoom-pegasus-38-road-running-shoes-snS7wr.png',
            },
        },
        color_list:[
            'black',
            'red',
            'green',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-zoom-pegasus-38-road-running-shoes-snS7wr.png',
            1:'images/sneakers/air-zoom-pegasus-38-road-running-shoes-snS7wr.png',
            2:'images/sneakers/air-zoom-pegasus-38-road-running-shoes-snS7wr.png',
            3:'images/sneakers/air-zoom-pegasus-38-road-running-shoes-snS7wr.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 12,
        name: 'Nike Air VaporMax 2021 FK',
        for: "Men's Shoes",
        price: 219.99,
        description: '',
        sex: 'men',
        msg: 'Sustainable Materials',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-vapormax-2021-fk-shoe-v2XJWq.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-vapormax-2021-fk-shoe-v2XJWq.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-vapormax-2021-fk-shoe-v2XJWq.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-vapormax-2021-fk-shoe-v2XJWq.png',
            },
        },
        color_list:[
            'black',
            'white',
            'grey',
            'green',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 42,
                in_stock: true,
                announcement: '',
            },
            {
                size: 44,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-vapormax-2021-fk-shoe-v2XJWq.png',
            1:'images/sneakers/air-vapormax-2021-fk-shoe-v2XJWq.png',
            2:'images/sneakers/air-vapormax-2021-fk-shoe-v2XJWq.png',
            3:'images/sneakers/air-vapormax-2021-fk-shoe-v2XJWq.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 13,
        name: 'NikeCourt Zoom Vapor Cage 4 Rafa',
        for: "Men's Hard Court Tennis Shoes",
        price: 149.99,
        description: '',
        sex: 'men',
        msg: 'New',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-0fw7FS.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-0fw7FS.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-0fw7FS.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-0fw7FS.png',
            },
        },
        color_list:[
            'black',
            'white',
            'grey',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 42,
                in_stock: true,
                announcement: '',
            },
            {
                size: 44,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-0fw7FS.png',
            1:'images/sneakers/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-0fw7FS.png',
            2:'images/sneakers/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-0fw7FS.png',
            3:'images/sneakers/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-0fw7FS.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 14,
        name: 'Nike Air Max 90',
        for: "Men's Shoes",
        price: 139.99,
        description: '',
        sex: 'men',
        msg: 'New',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-90-shoes-P5Pf0w.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-90-shoes-P5Pf0w.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-max-90-shoes-P5Pf0w.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-90-shoes-P5Pf0w.png',
            },
        },
        color_list:[
            'black',
            'white',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 43,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-max-90-shoes-P5Pf0w.png',
            1:'images/sneakers/air-max-90-shoes-P5Pf0w.png',
            2:'images/sneakers/air-max-90-shoes-P5Pf0w.png',
            3:'images/sneakers/air-max-90-shoes-P5Pf0w.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 15,
        name: 'Nike Air Max 96 II',
        for: "Men's Shoes",
        price: 169.99,
        description: '',
        sex: 'men',
        msg: 'Retro',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-96-ii-shoes-R7pb32.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-96-ii-shoes-R7pb32.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-max-96-ii-shoes-R7pb32.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-max-96-ii-shoes-R7pb32.png',
            },
        },
        color_list:[
            'black',
            'white',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 43,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-max-96-ii-shoes-R7pb32.png',
            1:'images/sneakers/air-max-96-ii-shoes-R7pb32.png',
            2:'images/sneakers/air-max-96-ii-shoes-R7pb32.png',
            3:'images/sneakers/air-max-96-ii-shoes-R7pb32.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 16,
        name: 'Nike Pegasus Trail 3 GORE-TEX',
        for: "Men's Waterproof Trail Running Shoes",
        price: 149.99,
        description: '',
        sex: 'men',
        msg: 'Retro',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq02.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq02.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq02.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq02.png',
            },
        },
        color_list:[
            'brown',
            'grey',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 39,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq02.png',
            1:'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq02.png',
            2:'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq02.png',
            3:'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq02.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 17,
        name: 'Nike Air Pegasus 83 Premium',
        for: "Men's Waterproof Trail Running Shoes",
        price: 99.99,
        description: '',
        sex: 'men',
        msg: 'Classic',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-pegasus-83-shoes-ZfDxR5.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-pegasus-83-shoes-ZfDxR5.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-pegasus-83-shoes-ZfDxR5.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-pegasus-83-shoes-ZfDxR5.png',
            },
        },
        color_list:[
            'brown',
            'grey',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 39,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-pegasus-83-shoes-ZfDxR5.png',
            1:'images/sneakers/air-pegasus-83-shoes-ZfDxR5.png',
            2:'images/sneakers/air-pegasus-83-shoes-ZfDxR5.png',
            3:'images/sneakers/air-pegasus-83-shoes-ZfDxR5.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 18,
        name: 'Nike Dunk High',
        for: "Men's Waterproof Trail Running Shoes",
        price: 129.99,
        description: '',
        sex: 'men',
        msg: 'Member Access',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/custom-nike-dunk-high-by-you.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/custom-nike-dunk-high-by-you.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/custom-nike-dunk-high-by-you.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/custom-nike-dunk-high-by-you.png',
            },
        },
        color_list:[
            'brown',
            'white',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 42,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/custom-nike-dunk-high-by-you.png',
            1:'images/sneakers/custom-nike-dunk-high-by-you.png',
            2:'images/sneakers/custom-nike-dunk-high-by-you.png',
            3:'images/sneakers/custom-nike-dunk-high-by-you.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 19,
        name: 'Nike Pegasus Trail 3 GORE-TEX',
        for: "Men's Waterproof Trail Running Shoes",
        price: 149.99,
        description: '',
        sex: 'men',
        msg: 'Member Access',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq022.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq022.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq022.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq022.png',
            },
        },
        color_list:[
            'black',
            'white',
            'blue',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq022.png',
            1:'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq022.png',
            2:'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq022.png',
            3:'images/sneakers/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes-3JHq022.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 20,
        name: "Nike Air Force 1 '07 WB",
        for: "Men's shoe",
        price: 139.99,
        description: '',
        sex: 'men',
        msg: 'Almost out of stock',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            },
        },
        color_list:[
            'brown',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            1:'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            2:'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            3:'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 21,
        name: "Nike Air Force 1 '07",
        for: "Women's Shoe",
        price: 109.99,
        description: '',
        sex: 'women',
        msg: 'Bestseller',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            },
        },
        color_list:[
            'white',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 47,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            1:'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            2:'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png',
            3:'images/sneakers/air-force-1-07-wb-shoe-p5KgrZ.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 22,
        name: "Jordan MA2",
        for: "Women's Shoe",
        price: 129.99,
        description: '',
        sex: 'women',
        msg: 'New',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/jordan-ma2-shoe-6VGDM4.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/jordan-ma2-shoe-6VGDM4.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/jordan-ma2-shoe-6VGDM4.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/jordan-ma2-shoe-6VGDM4.png',
            },
        },
        color_list:[
            'white',
            'grey',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 39,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: false,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 42,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/jordan-ma2-shoe-6VGDM4.png',
            1:'images/sneakers/jordan-ma2-shoe-6VGDM4.png',
            2:'images/sneakers/jordan-ma2-shoe-6VGDM4.png',
            3:'images/sneakers/jordan-ma2-shoe-6VGDM4.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 23,
        name: "Jordan MA2",
        for: "Women's Shoe",
        price: 129.99,
        description: '',
        sex: 'women',
        msg: 'New',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/jordan-ma2-shoe-6VGDM42.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/jordan-ma2-shoe-6VGDM42.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/jordan-ma2-shoe-6VGDM42.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/jordan-ma2-shoe-6VGDM42.png',
            },
        },
        color_list:[
            'brown',
            'white',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 39,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: false,
                announcement: '',
            },
            {
                size: 41,
                in_stock: true,
                announcement: '',
            },
            {
                size: 42,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/jordan-ma2-shoe-6VGDM42.png',
            1:'images/sneakers/jordan-ma2-shoe-6VGDM42.png',
            2:'images/sneakers/jordan-ma2-shoe-6VGDM42.png',
            3:'images/sneakers/jordan-ma2-shoe-6VGDM42.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 23,
        name: "Air Jordan 12 Retro",
        for: "Women's Shoe",
        price: 139.99,
        description: '',
        sex: 'men',
        msg: 'Available in SNKRS',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-jordan-12-retro-older-shoes.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-jordan-12-retro-older-shoes.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/air-jordan-12-retro-older-shoes.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/air-jordan-12-retro-older-shoes.png',
            },
        },
        color_list:[
            'white',
            'red',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 39,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: false,
                announcement: '',
            },
            {
                size: 43,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/air-jordan-12-retro-older-shoes.png',
            1:'images/sneakers/air-jordan-12-retro-older-shoes.png',
            2:'images/sneakers/air-jordan-12-retro-older-shoes.png',
            3:'images/sneakers/air-jordan-12-retro-older-shoes.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 24,
        name: "Nike Victori One",
        for: "Men's Shower Slide",
        price: 24.99,
        description: '',
        sex: 'men',
        msg: 'Highly Rated',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/victori-one-shower-slide-VVgsmC.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/victori-one-shower-slide-VVgsmC.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/victori-one-shower-slide-VVgsmC.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/victori-one-shower-slide-VVgsmC.png',
            },
        },
        color_list:[
            'black',
            'white',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 39,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: false,
                announcement: '',
            },
            {
                size: 43,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
            {
                size: 46,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/victori-one-shower-slide-VVgsmC.png',
            1:'images/sneakers/victori-one-shower-slide-VVgsmC.png',
            2:'images/sneakers/victori-one-shower-slide-VVgsmC.png',
            3:'images/sneakers/victori-one-shower-slide-VVgsmC.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 25,
        name: "Nike OffCourt Slide Be True",
        for: "Womans's Shower Slide",
        price: 44.99,
        description: '',
        sex: 'women',
        msg: 'Trending',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/offcourt-slide-be-true-shoes-9D9p6D.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/offcourt-slide-be-true-shoes-9D9p6D.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/offcourt-slide-be-true-shoes-9D9p6D.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/offcourt-slide-be-true-shoes-9D9p6D.png',
            },
        },
        color_list:[
            'black',
            'pink',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 39,
                in_stock: true,
                announcement: '',
            },
            {
                size: 41,
                in_stock: false,
                announcement: '',
            },
            {
                size: 42,
                in_stock: true,
                announcement: '',
            },
            {
                size: 43,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/offcourt-slide-be-true-shoes-9D9p6D.png',
            1:'images/sneakers/offcourt-slide-be-true-shoes-9D9p6D.png',
            2:'images/sneakers/offcourt-slide-be-true-shoes-9D9p6D.png',
            3:'images/sneakers/offcourt-slide-be-true-shoes-9D9p6D.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
    {
        id: 26,
        name: "Nike OffCourt Slide Be True",
        for: "Shower Slide",
        price: 32.99,
        description: '',
        sex: 'unisex',
        msg: 'Coming Soon',
        colors: {
            0: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/victori-one-print-slide-2h46m3.png',
            },
            1: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/victori-one-print-slide-2h46m3.png',
            },
            2: {
                in_stock: false,
                announcement: '',
                image: 'images/sneakers/victori-one-print-slide-2h46m3.png',
            },
            3: {
                in_stock: true,
                announcement: '',
                image: 'images/sneakers/victori-one-print-slide-2h46m3.png',
            },
        },
        color_list:[
            'white',
        ],
        sizes: [
            {
                size: 38,
                in_stock: true,
                announcement: '',
            },
            {
                size: 40,
                in_stock: true,
                announcement: '',
            },
            {
                size: 42,
                in_stock: false,
                announcement: '',
            },
            {
                size: 43,
                in_stock: true,
                announcement: '',
            },
            {
                size: 45,
                in_stock: true,
                announcement: '',
            },
        ],
        images: {
            0:'images/sneakers/victori-one-print-slide-2h46m3.png',
            1:'images/sneakers/victori-one-print-slide-2h46m3.png',
            2:'images/sneakers/victori-one-print-slide-2h46m3.png',
            3:'images/sneakers/victori-one-print-slide-2h46m3.png'
        },
        get href(){
            return shoePage + this.id;
        },
        get image(){
            return this.images[0];
        },
        get formatPrice(){
            return '€ '+ this.price;
        },
    },
];
