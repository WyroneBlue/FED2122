var filterOpenButton = document.querySelector('section#shoe-title > section > button:first-of-type');
var filterOpenButtonSpan = document.querySelector('section#shoe-title > section > button:first-of-type span');
var filterClosed = false;

var sortByOpenButton = document.querySelector('section#shoe-title > section > button:last-of-type');
var sortByOpenButtonSpan = document.querySelector('section#shoe-title > section > button:last-of-type span:first-of-type');
var sortByOpenChevron = document.querySelector('section#shoe-title > section > button:last-of-type i');
var sortBySection = document.querySelector('section#shoe-title > section > div');
var sortByOptions = document.querySelectorAll('section#shoe-title > section > div label');
var sortByOpen = false;

var filterToggles = document.querySelectorAll('#filter-options > form fieldset legend');

var mobileFilterOpenButton = document.querySelector('#filter-buttons-mobile > button');
var mobileFilterCloseButton = document.querySelector('#filter-options > section:first-of-type > button');
var mobileFilterClearButton = document.querySelector('#filter-options > section:last-of-type button:first-of-type');
var mobileFilterApplyButton = document.querySelector('#filter-options > section:last-of-type button:last-of-type');

var shoeContainer = document.querySelector('#shoe-overview');
var filterContainer = document.querySelector('#filter-options form');

var resultsCount = document.querySelector('section#shoe-title > h1 > span');
var resultsCountMobile = document.querySelector('#filter-buttons-mobile p span');
var sexFilterCount = document.querySelector('.sex legend > span');
var priceFilterCount = document.querySelector('.price legend > span');
var sizeFilterCount = document.querySelector('.size legend > span');
var colorFilterCount = document.querySelector('.color legend > span');
var allFiltersCount = mobileFilterClearButton.querySelector('span');

let shoeHtml = '';
let filteredShoes = [];
var filters = {
    sort: {
        mobile: false,
        normal: false,
    },
    sex: {
        data: [],
        get count(){
            return this.data.length
        }
    },
    price: {
        data: [],
        get count(){
            return this.data.length
        }
    },
    size: {
        data: [],
        get count(){
            return this.data.length
        }
    },
    color: {
        data: [],
        get count(){
            return this.data.length
        }
    },
    get count(){
        return this.sex.count + this.price.count + this.size.count + this.color.count
    }

}

const clearFilters = function(){
    filterContainer.reset();
    loadShoes();
    toggleMobileFilterMenu();
}

const updateFilterCount = function(){
    resultsCount.innerHTML = `(${filteredShoes.length})`;
    resultsCountMobile.innerHTML = filteredShoes.length;
    sexFilterCount.innerHTML = `(${filters.sex.count})`;
    priceFilterCount.innerHTML = `(${filters.price.count})`;
    sizeFilterCount.innerHTML = `(${filters.size.count})`;
    colorFilterCount.innerHTML = `(${filters.color.count})`;
    allFiltersCount.innerHTML = `(${filters.count})`;
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
    if(body.classList.contains('mobile-filter-open')){
        stopBannerScroll();
    } else {
        startBannerScroll();
    }
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
    
    let sexfilters = Object.keys(filters.sex.data).map(function(key, index) {
        return filters.sex.data[key].value;
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

    let pricefilters = Object.keys(filters.price.data).map(function(key, index) {
        return filters.price.data[key].value;
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

const filterSize = function(){
    
    let sizeFilters = Object.keys(filters.size.data).map(function(key, index) {
        return parseInt(filters.size.data[key].value);
    });
    
    if(sizeFilters.length > 0){
        
        let shoes = []; 
        sizeFilters.filter((filter) => {

            Object.values(filteredShoes).filter(function(key, index) {
                
                let found = false;
                let sizes = filteredShoes[index].sizes;
                Object.values(sizes).filter(function(key_2, index_2) {
                    
                    let size = key_2.size;
                    if(sizeFilters.includes(size) && found == false){
                        found = true;
                        return shoes.push(filteredShoes[index]);
                    }
                });
            });
        });
        
        filteredShoes = shoes
    }
}

const filterColor = function(e){

    let colorFilters = Object.keys(filters.color.data).map(function(key, index) {
        return filters.color.data[key].value;
    });
    
    if(colorFilters.length > 0){
        let shoes = [];
        colorFilters.filter(() => {
            Object.values(filteredShoes).filter(function(key, index) {
                
                let found = false;
                let colors = filteredShoes[index].color_list;
                Object.values(colors).filter(function(key_2, index_2) {
                    let color = key_2;
                    
                    if(colorFilters.includes(color) && found == false){
                        found = true;
                        return shoes.push(filteredShoes[index]);
                    }
                });
            });
        });

        filteredShoes = shoes
    }
}

const sortShoes = function(e){

    if(filters.sort.normal !== null || filters.sort.mobile !== null){

        let shoes = [];
        let sortType;

        if(filters.sort.normal !== null){
            sortType = filters.sort.normal.value;
        } else {
            sortType = filters.sort.mobile.value;
        }

        if(sortType == 'name-az'){
            shoes = filteredShoes.sort((a, b) => a.name > b.name && 1 || -1);
        } else if(sortType == 'name-za'){
            shoes = filteredShoes.sort((a, b) => b.name > a.name && 1 || -1);
        } else if(sortType == 'p-hl'){
            shoes = filteredShoes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else if(sortType == 'p-lh'){
            shoes = filteredShoes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }

        filteredShoes = shoes
    }
}

const checkFilters = function(e){
    filters.type = document.querySelectorAll('#filter-options form fieldset.shoe-type input:checked');
    filters.sort.normal = document.querySelector('section#shoe-title > section > div input:checked');
    filters.sort.mobile = document.querySelector('#filter-options form fieldset.sort-by input:checked');
    filters.sex.data = document.querySelectorAll('#filter-options form fieldset.sex input:checked');
    filters.price.data = document.querySelectorAll('#filter-options form fieldset.price input:checked');
    filters.size.data = document.querySelectorAll('#filter-options form fieldset.size input:checked');
    filters.color.data = document.querySelectorAll('#filter-options form fieldset.color input:checked');
}

const filterShoes = function(e){
    shoeHtml = '';
    filteredShoes = shoeList;
    checkFilters();
    filterSex();
    filterPrice();
    filterSize();
    filterColor();
    sortShoes();
    return filteredShoes;
}

const loadShoes = function(e){
    filterShoes();
    updateFilterCount();
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

filterContainer.addEventListener('input', loadShoes);
sortBySection.addEventListener('input', loadShoes);
window.addEventListener('DOMContentLoaded', loadShoes);

filterOpenButton.addEventListener('click', toggleFilterMenu);
sortByOpenButton.addEventListener('click', toggleSortByMenu);
sortByOptions.forEach(option => {
    option.addEventListener('click', setSortBy);
    option.addEventListener('input', loadShoes);
});

filterToggles.forEach(filter => {
    filter.addEventListener('click', toggleFilter);
});

mobileFilterOpenButton.addEventListener('click', toggleMobileFilterMenu);
mobileFilterCloseButton.addEventListener('click', toggleMobileFilterMenu);
mobileFilterClearButton.addEventListener('click', clearFilters);
mobileFilterApplyButton.addEventListener('click', toggleMobileFilterMenu);

window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', () => {
        let inView = isInView(banner);
        if(!inView){
            title.classList.add('sticky')
        } else {
            title.classList.remove('sticky')
        }
    });
});