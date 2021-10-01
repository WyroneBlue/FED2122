console.log('Hello World');

var shoeSizes;
var shoeColors;
var body = document.body;

var banner = document.querySelector('#announcement-banner');
var title = document.querySelector('#shoe-title');

var searchBar = document.querySelector('header nav#search div input');
var searchIcon = document.querySelector('header nav#hamburger img:nth-of-type(2)');
var searchBarCloser = document.querySelector('header nav#search-results button');

var hamburger = document.querySelector('#hamburger > img:last-of-type');
var blurSection = document.querySelector('body > section');
var menuOpen = false;

const toggleSearchBar = function(){
    body.classList.toggle('search-open');
}

const toggleMobileMenu = function(){
    body.classList.toggle('menu-open');
    menuOpen = !menuOpen;
}

const blurSectionClicked = function(type){
    console.log(type);
    if(body.classList.contains('menu-open')){
        toggleMobileMenu();
    } else {
        toggleSearchBar();
    }
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

searchBar.addEventListener('click', toggleSearchBar);
searchIcon.addEventListener('click', toggleSearchBar);
searchBarCloser.addEventListener('click', toggleSearchBar);

hamburger.addEventListener('click', toggleMobileMenu);
blurSection.addEventListener('click', blurSectionClicked);

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