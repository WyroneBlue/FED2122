console.log('Overview js');

var filterOpenButton = document.querySelector('section#shoe-title > section > button:first-of-type');
var filterOpenButtonSpan = document.querySelector('section#shoe-title > section > button:first-of-type span');
var filterClosed = false;

var sortByOpenButton = document.querySelector('section#shoe-title > section > button:last-of-type');
var sortByOpenButtonSpan = document.querySelector('section#shoe-title > section > button:last-of-type span');
var sortByOpenChevron = document.querySelector('section#shoe-title > section > button:last-of-type i');
var sortByOptions = document.querySelectorAll('section#shoe-title > section > div span');
var sortByOpen = false;

var filterToggles = document.querySelectorAll('#filter-options > form fieldset legend');

var mobileFilterOpenButton = document.querySelector('#filter-buttons-mobile > button');
var mobileFilterCloseButton = document.querySelector('#filter-options > section:first-of-type > button');

var shoeContainer = document.querySelector('#shoe-overview');
var filterContainer = document.querySelector('.filter');
var sizeButtons = document.querySelectorAll('.size button');
var colorButtons = document.querySelectorAll('.kleur button');
let shoeHtml = '';
let filteredShoes = [];

var filters = {
    sex: [],
    price: [],
    size: [],
    color: [],
}

const toggleFilterMenu = function(){
    body.classList.toggle('filter-closed');
    filterClosed = !filterClosed;
    if(filterClosed){
        filterOpenButtonSpan.textContent = "Show" 
    } else {
        filterOpenButtonSpan.textContent = "Hide" 
    }
}

const toggleSortByMenu = function(){
    body.classList.toggle('sortby-open');
    sortByOpen = !sortByOpen;
    if(sortByOpen){
        sortByOpenChevron.classList = 'fas fa-chevron-down';
    } else {
        sortByOpenChevron.classList = 'fas fa-chevron-up';
    }
}

const setSortBy = function(e){
    resetSortBy();
    e.target.classList.add('active');
    let sort = e.target.textContent;
    sortByOpenButtonSpan.textContent = `: ${sort}`
}

const resetSortBy = function(){
    sortByOptions.forEach(option => {
        option.classList.remove('active');
    });
}

const toggleFilter = function(e){
    let filter = e.target.parentNode;
    filter.classList.toggle('closed');
}

const toggleMobileFilterMenu = function(){
    body.classList.toggle('mobile-filter-open');
}

const activateButton = function(e){
    e.target.classList.toggle('active');
}

const goToDetail = function(e){
    let id = e.dataset.id;
    let link =  'shoe.html?shoe_id=' + id;
    location.href = link;
}

const filterSex = function(){

    let sexfilters = Object.keys(filters.sex).map(function(key, index) {
        return filters.sex[key].value;
    });

    if(sexfilters.length > 0){

        let shoes = [];
        Object.values(filteredShoes).filter(function(key, index) {
            if(sexfilters.includes(filteredShoes[index].sex) == true || sexfilters.length == 0){
                return shoes.push(filteredShoes[index]);
            }
        });
        
        filteredShoes = shoes;
    }
}

const filterPrice = function(){

    let pricefilters = Object.keys(filters.price).map(function(key, index) {
        return filters.price[key].value;
    });

    if(pricefilters.length > 0){
        
        pricefilters = Object.values(pricefilters).map(function(key, index) {
            return pricefilters[index].split("-");
        });
        
        
        let shoes = [];
        pricefilters.filter((filter) => {

            if(filter.length > 1){
                
                Object.values(filteredShoes).filter(function(key, index) {
                    
                    if((filter[0] < filteredShoes[index].price && filter[1] > filteredShoes[index].price) || pricefilters.length == 0 ){            
                        // console.log(filteredShoes[index]);
                        return shoes.push(filteredShoes[index]);
                    }
                });
            } else {

                Object.values(filteredShoes).filter(function(key, index) {

                    if(parseInt(filter[0]) < filteredShoes[index].price){            
                        return shoes.push(filteredShoes[index]);
                    }
                });

            }
        });
        filteredShoes = shoes
    }
}

// const filterSize = function(){
    
//     let sizeFilters = Object.keys(filters.size).map(function(key, index) {
//         return parseInt(filters.size[key].textContent);
//     });

//     if(sizeFilters.length > 0){
        
//         let shoes = []; 
//         sizeFilters.filter((filter) => {

//             Object.values(filteredShoes).filter(function(key, index) {
                
//                 let found = false;
//                 let sizes = filteredShoes[index].sizes;
//                 Object.values(sizes).filter(function(key_2, index_2) {
                    
//                     let size = key_2.size;
//                     if(sizeFilters.includes(size) && found == false){
//                         found = true;
//                         return shoes.push(filteredShoes[index]);
//                     }
//                 });
//             });
//         });
        
//         filteredShoes = shoes
//     }
// }

// const filterColor = function(e){
//     return e.price > 115
// }

const checkFilters = function(e){

    filters.sex = document.querySelectorAll('.geslacht input:checked');
    filters.price = document.querySelectorAll('.prijs input:checked');
    filters.size = document.querySelectorAll('.size button.active');
    filters.color = document.querySelectorAll('.kleur input.active');
}

const filterShoes = function(e){

    shoeHtml = '';
    filteredShoes = shoeList;
    // checkFilters();
    // filterSex();
    // filterPrice();
    // filterSize();
    // filterColor();
    return filteredShoes;
}

const loadShoes = function(e){

    filterShoes();
    filteredShoes.forEach(shoe => {
        
        shoeHtml += `
        <article>
            <a href="shoe.html?shoe_id=${shoe.id}">
                <h2>${shoe.name}</h2>
                <img src="${shoe.images[0]}" alt="">
                <p>${shoe.msg ?? ''}</p>
                <p>€ ${shoe.price}</p>
            </a>
        </article>
        `;
    });
    shoeContainer.innerHTML = shoeHtml;
}

// filterContainer.addEventListener('change', loadShoes);
window.addEventListener('DOMContentLoaded', loadShoes);

filterOpenButton.addEventListener('click', toggleFilterMenu);
sortByOpenButton.addEventListener('click', toggleSortByMenu);
sortByOptions.forEach(option => {
    option.addEventListener('click', setSortBy);
});

filterToggles.forEach(filter => {
    filter.addEventListener('click', toggleFilter);
});

mobileFilterOpenButton.addEventListener('click', toggleMobileFilterMenu);
mobileFilterCloseButton.addEventListener('click', toggleMobileFilterMenu);

sizeButtons.forEach(btn => {
    btn.addEventListener('click', activateButton);
    btn.addEventListener('click', loadShoes);
});

colorButtons.forEach(btn => {
    btn.addEventListener('click', activateButton);
    btn.addEventListener('click', loadShoes);
});

window.addEventListener('scroll', (e) => {
    let inView = isInView(banner);
    if(!inView){
        title.classList.add('sticky')
    } else {
        title.classList.remove('sticky')
    }
});
