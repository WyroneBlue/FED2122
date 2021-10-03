const shoePage = 'shoe.html?shoe_id=';
var shoeList = [
    {
        id: 0,
        name: 'Nike Air Zoom Pegasus 38',
        for: 'Hardloopschoen voor heren',
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
            'blue',
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
        for: 'Hardloopschoen voor heren',
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
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'grey',
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'grey',
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'grey',
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'grey',
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'grey',
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'grey',
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'green',
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'grey',
            'black',
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
        for: 'Hardloopschoen voor heren',
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
            'brown',
            'grey',
            'black',
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
];
