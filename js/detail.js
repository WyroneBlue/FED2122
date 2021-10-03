var url = new URL(window.location);
var shoe_id = url.searchParams.get("shoe_id");
var currentShoe = shoeList[shoe_id];
var names = document.querySelectorAll(".heading h1");
var forWho = document.querySelectorAll(".heading h2");
var prices = document.querySelectorAll(".heading span");
var images = document.querySelector(".images div");
var colors = document.querySelector("#shoe-colors div");

var addToCartButton = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button.add-to-cart");
var addToCartButtonMobile = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button.add-to-cart-mobile");
var addToFavourite = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button:last-of-type");
var addToFavouriteSpan = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button:last-of-type span");
var addToFavouriteHeart = document.querySelector("#detail main > section#shoe-info > section:nth-of-type(2) > section:nth-of-type(4) > button:last-of-type i");

var controls = document.querySelectorAll("#controls > span");
var forYou = document.querySelector("#for-you div");
let forYouHtml = '';
let pos = { top: 0, left: 0, x: 0, y: 0 };
var html = {
    image: '',
    colors: '',
};

const goToDetail = function(e){
    let id = e.dataset.id;
    let link =  'shoe.html?shoe_id=' + id;
    location.href = link;
}

const mouseDownHandler = function(e) {
    forYou.style.cursor = 'grabbing';
    forYou.style.userSelect = 'none';

    pos = {
        left: forYou.scrollLeft,
        x: e.clientX,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}

const mouseMoveHandler = function(e) {
    const dx = e.clientX - pos.x;
    forYou.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function() {
    forYou.style.cursor = 'grab';
    forYou.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

const scrollForYou = function(e){

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

const loadForYouShoes = function(e){

    shoeList.forEach(shoe => {
        
        forYouHtml += `
        <figure onclick="goToDetail(this)" data-id="${shoe.id}">
            <img draggable="false" src="${shoe.images[0]}" alt="">
            <section>
                <span>${shoe.name}</span>
                <span>${shoe.for}</span>
            </section>

            <span>€ ${shoe.price}</span>
        </figure>
        `;
    });
    forYou.innerHTML = forYouHtml;
}

let getCurrentShoe = function(e) {

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

const setFavourite = (e) => {
    if(addToFavouriteHeart.classList.contains('fas')){
        addToFavouriteHeart.classList = 'far fa-heart';
        addToFavouriteSpan.textContent = 'Favourite';
    } else {
        addToFavouriteHeart.classList = 'fas fa-heart red';
        addToFavouriteSpan.textContent = 'Remove from Favourite';
    }
}

window.addEventListener('DOMContentLoaded', getCurrentShoe);
window.addEventListener('DOMContentLoaded', loadForYouShoes);
addToFavourite.addEventListener('click', setFavourite);

forYou.addEventListener('mousedown', mouseDownHandler);

controls.forEach(span => {
    span.addEventListener('click', scrollForYou);
});

window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', () => {
        let inView = isInView(addToCartButtonMobile);
        if(!inView){
            addToCartButton.classList.add('sticky')
        } else {
            addToCartButton.classList.remove('sticky')
        }
    });
});
