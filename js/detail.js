// Variables initialiseren
const url = new URL(window.location);
const shoe_id = url.searchParams.get("shoe_id");
const currentShoe = shoeList[shoe_id];
const names = document.querySelectorAll(".heading h1");
const forWho = document.querySelectorAll(".heading h2");
const prices = document.querySelectorAll(".heading span");
const images = document.querySelector(".images div");
const colors = document.querySelector("#shoe-colors div");

const addToCartButton = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button.add-to-cart");
const addToCartButtonMobile = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button.add-to-cart.mobile");
const addToFavourite = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button:last-of-type");
const addToFavouriteSpan = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button:last-of-type span");
const addToFavouriteHeart = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button:last-of-type i");

const controls = document.querySelectorAll("#controls > span");
const forYou = document.querySelector("#for-you div");
let forYouHtml = '';
let html = {
    image: '',
    colors: '',
};

const forYouIds = [
    6, 9, 12, 13, 18, 20, 21, 25
]

// Scroll for you section
const scrollForYou = (e) => {

    let target;
    let check = e.target.tagName;

    switch (check) {
        case 'SPAN':
            target = e.target.dataset.scroll_controll
            break;

        case 'svg':
            target = e.target.parentNode.dataset.scroll_controll
            break;
            
        case 'path':
            target = e.target.parentNode.parentNode.dataset.scroll_controll
            break;
        default:
            break;          
    }

    if(target == 'next'){
        forYou.scrollLeft = forYou.scrollLeft + 300;
    } else {
        forYou.scrollLeft = forYou.scrollLeft - 300;
    }
}

// Load for you section shoes
const loadForYouShoes = () => {

    let filteredPopularTerms = [];
    for (let i = 0; i < forYouIds.length; i++) {
      let id = forYouIds[i];
      let shoe = shoeList[id];
      filteredPopularTerms.push(shoe);
    }

    filteredPopularTerms.forEach(shoe => {   
        forYouHtml += `
        <figure>
            <a href="shoe.html?shoe_id=${shoe.id}">
                <img draggable="false" src="${shoe.images[0]}" alt="">
                <section>
                    <span>${shoe.name}</span>
                    <span>${shoe.for}</span>
                    <span>€ ${shoe.price}</span>
                </section>
            </a>
        </figure>
        `;
    });
    forYou.innerHTML = forYouHtml;
}

// Load shoe from id in browser url
const getCurrentShoe = () => {

    names.forEach(name => {
        name.innerText = currentShoe.name;
    });

    forWho.forEach(name => {
        name.innerText = currentShoe.for;
    });
    
    prices.forEach(price => {
        price.innerText = "€" + currentShoe.price;
    });

    let currentShoeImages = currentShoe.images;
    for (const key in currentShoeImages) {

        let image = currentShoeImages[key];  
        html.image += `<figure><img src="${image}" alt=""></figure>`;
    }
    images.innerHTML = html.image;

    let currentcolors = currentShoe.colors;
    for (const key in currentcolors) {
        let colorImage = currentcolors[key].image;
        let empty = (currentcolors[key].in_stock != true) ? 'class="empty"' : '';        
        html.colors += `<a href=""><img ${empty} src="${colorImage}" alt=""></a>`;
    }
    colors.innerHTML += html.colors;
}

// Add shoe to favourites
const setFavourite = () => {
    if(addToFavouriteHeart.classList.contains('fas')){
        addToFavouriteHeart.classList = 'far fa-heart';
        addToFavouriteSpan.textContent = 'Favourite';
    } else {
        addToFavouriteHeart.classList = 'fas fa-heart red';
        addToFavouriteSpan.textContent = 'Remove from Favourite';
    }
}

// Eventlisteners
window.addEventListener('DOMContentLoaded', getCurrentShoe);
window.addEventListener('DOMContentLoaded', loadForYouShoes);
addToFavourite.addEventListener('click', setFavourite);

controls.forEach(span => {
    span.addEventListener('click', scrollForYou);
});

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        let inView = isInView(addToCartButtonMobile);
        if(!inView){
            addToCartButton.classList.add('sticky')
        } else {
            addToCartButton.classList.remove('sticky')
        }
    });
});
