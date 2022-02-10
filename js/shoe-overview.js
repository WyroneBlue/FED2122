// variablen initialiseren
const filterOpenButton = document.querySelector('section#shoe-title > section > button:first-of-type');
const filterOpenButtonSpan = document.querySelector('section#shoe-title > section > button:first-of-type span');
let filterClosed = false;

const sortByOpenButton = document.querySelector('section#shoe-title > section > button:last-of-type');
const sortByOpenButtonSpan = document.querySelector('section#shoe-title > section > button:last-of-type span:first-of-type');
const sortByOpenChevron = document.querySelector('section#shoe-title > section > button:last-of-type i');
const sortBySection = document.querySelector('section#shoe-title > section > div');
const sortByOptions = document.querySelectorAll('section#shoe-title > section > div label');
let sortByOpen = false;

const filterToggles = document.querySelectorAll('#filter-options > form fieldset legend');

const mobileFilterOpenButton = document.querySelector('#filter-buttons-mobile > button');
const mobileFilterCloseButton = document.querySelector('#filter-options > section:first-of-type > button');
const mobileFilterClearButton = document.querySelector('#filter-options > section:last-of-type button:first-of-type');
const mobileFilterApplyButton = document.querySelector('#filter-options > section:last-of-type button:last-of-type');

const shoeContainer = document.querySelector('#shoe-overview');
const filterContainer = document.querySelector('#filter-options form');

const resultsCount = document.querySelector('section#shoe-title > h1 > span');
const resultsCountMobile = document.querySelector('#filter-buttons-mobile p span');
const sexFilterCount = document.querySelector('.sex legend > span');
const priceFilterCount = document.querySelector('.price legend > span');
const sizeFilterCount = document.querySelector('.size legend > span');
const colorFilterCount = document.querySelector('.color legend > span');
const allFiltersCount = mobileFilterClearButton.querySelector('span');

let shoeHtml = '';
let filteredShoes = [];
const filters = {
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

// filters leegmaken
const clearFilters = () => {
    filterContainer.reset();
    loadShoes();
    toggleMobileFilterMenu();
}

// filters uptodate houden
const updateFilterCount = (shoes) => {
    resultsCount.innerHTML = `(${shoes.length})`;
    resultsCountMobile.innerHTML = shoes.length;
    sexFilterCount.innerHTML = `(${filters.sex.count})`;
    priceFilterCount.innerHTML = `(${filters.price.count})`;
    sizeFilterCount.innerHTML = `(${filters.size.count})`;
    colorFilterCount.innerHTML = `(${filters.color.count})`;
    allFiltersCount.innerHTML = `(${filters.count})`;
}

// filtermenu openmaken (desktop)
const toggleFilterMenu = () => {
    body.classList.toggle('filter-closed');
    filterClosed = !filterClosed;
    if(filterClosed){
        filterOpenButtonSpan.textContent = "Show" 
    } else {
        filterOpenButtonSpan.textContent = "Hide" 
    }
}

// sortmenu open/dichtmaken (desktop)
const toggleSortByMenu = () => {
    body.classList.toggle('sortby-open');
    sortByOpen = !sortByOpen;
}

// gekozen sort actief maken (desktop)
const setSortBy = (e) => {
    resetSortBy();
    e.target.classList.add('active');
    let sort = e.target.textContent;
    sortByOpenButtonSpan.textContent = `: ${sort}`
}

// Sorts resetten
const resetSortBy = () => {
    sortByOptions.forEach(option => {
        option.classList.remove('active');
    });
}

// Filtervakje open/dichtmaken
const toggleFilter = (e) => {
    let filter = e.target.parentNode;
    filter.classList.toggle('closed');
}

// filtermenu openmaken (mobiel)
const toggleMobileFilterMenu = () => {
    body.classList.toggle('mobile-filter-open');
    if(body.classList.contains('mobile-filter-open')){
        stopBannerScroll();
    } else {
        startBannerScroll();
    }
}

// Filter to filter shoes based on sex
const filterSex = () => {
    
    let sexfilters = Object.keys(filters.sex.data).map((key, index) => {
        return filters.sex.data[key].value;
    });
    
    if(sexfilters.length > 0){

        let shoes = [];
        Object.values(filteredShoes).filter((key, index) => {
            if(sexfilters.includes(filteredShoes[index].sex) == true || sexfilters.length == 0){
                return shoes.push(filteredShoes[index]);
            }
        });
        
        filteredShoes = shoes;
    }
}

// Filter to filter shoes based on price
const filterPrice = () => {

    let pricefilters = Object.keys(filters.price.data).map((key, index) => {
        return filters.price.data[key].value;
    });
    
    if(pricefilters.length > 0){
        
        pricefilters = Object.values(pricefilters).map((key, index) => {
            return pricefilters[index].split("-");
        });
        
        
        let shoes = [];
        pricefilters.filter((filter) => {

            if(filter.length > 1){
                
                Object.values(filteredShoes).filter((key, index) => {
                    
                    if((filter[0] < filteredShoes[index].price && filter[1] > filteredShoes[index].price) || pricefilters.length == 0 ){            
                        
                        return shoes.push(filteredShoes[index]);
                    }
                });
            } else {

                Object.values(filteredShoes).filter((key, index) => {

                    if(parseInt(filter[0]) < filteredShoes[index].price){            
                        return shoes.push(filteredShoes[index]);
                    }
                });

            }
        });
        filteredShoes = shoes
    }
}

// Filter to filter shoes based on size
const filterSize = () => {
    
    let sizeFilters = Object.keys(filters.size.data).map((key, index) => {
        return parseInt(filters.size.data[key].value);
    });
    
    if(sizeFilters.length > 0){
        
        let shoes = []; 
        sizeFilters.filter((filter) => {

            Object.values(filteredShoes).filter((key, index) => {
                
                let found = false;
                let sizes = filteredShoes[index].sizes;
                Object.values(sizes).filter((key_2, index_2) => {
                    
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

// Filter to filter shoes based on color
const filterColor = (e) => {

    let colorFilters = Object.keys(filters.color.data).map((key, index) => {
        return filters.color.data[key].value;
    });
    
    if(colorFilters.length > 0){
        let shoes = [];
        colorFilters.filter(() => {
            Object.values(filteredShoes).filter((key, index) => {
                
                let found = false;
                let colors = filteredShoes[index].color_list;
                Object.values(colors).filter((key_2, index_2) => {
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

// Sort shoes based on name or price
const sortShoes = (e) => {

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

// Check all filters and sort from html
const checkFilters = (e) => {
    filters.type = document.querySelectorAll('#filter-options form fieldset.shoe-type input:checked');
    filters.sort.normal = document.querySelector('section#shoe-title > section > div input:checked');
    filters.sort.mobile = document.querySelector('#filter-options form fieldset.sort-by input:checked');
    filters.sex.data = document.querySelectorAll('#filter-options form fieldset.sex input:checked');
    filters.price.data = document.querySelectorAll('#filter-options form fieldset.price input:checked');
    filters.size.data = document.querySelectorAll('#filter-options form fieldset.size input:checked');
    filters.color.data = document.querySelectorAll('#filter-options form fieldset.color input:checked');
}

// run all filters
const filterShoes = (e) => {
    shoeHtml = '';
    filteredShoes = shoeList;
    checkFilters();
    filterSex();
    filterPrice();
    filterSize();
    filterColor();
    sortShoes();
    
    // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
    const ids = filteredShoes.map(o => o.id)
    let shoes = filteredShoes.filter(({id}, index) => !ids.includes(id, index + 1));
    return shoes;
}

// create html string for shoes
const loadShoes = (e) => {
    const shoes = filterShoes();
    updateFilterCount(shoes);
    shoes.forEach(shoe => {
        
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

// Eventlisteners
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

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        let inView = isInView(banner);
        if(!inView){
            title.classList.add('sticky')
        } else {
            title.classList.remove('sticky')
        }
    });
});