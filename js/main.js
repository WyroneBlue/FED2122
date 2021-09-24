console.log('Hello World');

var shoeSizes;
var shoeColors;
var body = document.body;

var banner = document.querySelector('#announcement-banner');
var title = document.querySelector('#shoe-title');

var filterOpenButton = document.querySelector('section#shoe-title > section > button:first-of-type');
var filterOpenButtonSpan = document.querySelector('section#shoe-title > section > button:first-of-type span');
var filterClosed = false;

var sortByOpenButton = document.querySelector('section#shoe-title > section > button:last-of-type');
var sortByOpenButtonSpan = document.querySelector('section#shoe-title > section > button:last-of-type span');
var sortByOpenChevron = document.querySelector('section#shoe-title > section > button:last-of-type i');
var sortByOptions = document.querySelectorAll('section#shoe-title > section > div span');
var sortByOpen = false;
var hamburger = document.querySelector('#hamburger > img:last-of-type');
var filterOpenButton = document.querySelector('#filter-buttons > button');
var filterCloseButton = document.querySelector('#filter-options > section:first-of-type > button');
var body = document.body;
var blurSection = document.querySelector('body > section');
var menuOpen = false;

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
const toggleMobileMenu = function(){
    body.classList.toggle('menu-open');
    menuOpen = !menuOpen;
}

const toggleFilterMenu = function(){
    body.classList.toggle('filter-open');
}

const deactivateAllSizes = function(){
    shoeSizes.forEach(button => {
        button.classList.remove('active');
    }); 
}

const setSizeActive = function(e){

    if(!e.target.classList.contains('empty')){
        deactivateAllSizes();
        let btn = e.target;
        btn.classList.toggle('active');
    }
}

const deactivateAllColors = function(){
    shoeColors.forEach(img => {
        img.classList.remove('active');
    }); 
}

const setColorActive = function(e){
    e.preventDefault();

    if(!e.target.classList.contains('empty')){
        deactivateAllColors();
        let img = e.target.parentNode;
        img.classList.toggle('active');
    }
}

const isInView = (el) => {
    const box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
}

hamburger.addEventListener('click', toggleMobileMenu);
blurSection.addEventListener('click', toggleMobileMenu);
filterOpenButton.addEventListener('click', toggleFilterMenu);
filterCloseButton.addEventListener('click', toggleFilterMenu);
sortByOpenButton.addEventListener('click', toggleSortByMenu);
sortByOptions.forEach(option => {
    option.addEventListener('click', setSortBy);
});
window.addEventListener('scroll', (e) => {
    let inView = isInView(banner);
    if(!inView){
        title.classList.add('sticky')
    } else {
        title.classList.remove('sticky')
    }
});

window.addEventListener('DOMContentLoaded', function(){
    
    shoeSizes = document.querySelectorAll("#shoe-sizes > button");
    shoeColors = document.querySelectorAll("#shoe-colors a");

    shoeSizes.forEach(button => {
        button.addEventListener('click', setSizeActive);
    });
    
    shoeColors.forEach(img => {
        img.addEventListener('click', setColorActive);
    });
});