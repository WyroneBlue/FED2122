var shoeSizes;
var shoeColors;
var body = document.body;

var bannerScolling;
var banner = document.querySelector('#announcement-banner section');
var bannerButtons = document.querySelectorAll('#announcement-banner div button');
var bannerHtml = '';
var bannerContent = [
    '<p id="banner-1">We’ve extended our returns period to 60 days<br /><a href="#">Learn more</a></p>',
    '<p id="banner-2">STUDENTS NOW GET 10% OFF<br /><a href="#">Learn more</a></p>',
    '<p id="banner-3">COVID-19: Information about Nike stores and deliveries.<br /><a href="#">Learn more</a></p>',
];

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

const loadBanners = () => {

    bannerContent.forEach(banner => {
        bannerHtml += banner;
    });
    banner.innerHTML = bannerHtml;
}

const scrollBanner = () => {    
    if(isInView(document.getElementById("banner-1"))){
        document.getElementById("banner-2").scrollIntoView({behavior: "smooth", block: "end"})
    } else if(isInView(document.getElementById("banner-2"))){
        document.getElementById("banner-3").scrollIntoView({behavior: "smooth", block: "end"})
    } else if(isInView(document.getElementById("banner-3"))){
        document.getElementById("banner-1").scrollIntoView({behavior: "smooth", block: "end"})
    }
}

const startBannerScroll = () => {
    bannerScolling = setInterval(scrollBanner, 5000);
}

const stopBannerScroll = () => {
    bannerScolling = clearInterval(bannerScolling);
};

// https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
const isInView = (el) => {
    const box = el.getBoundingClientRect();
    return (
        box.top >= 0 &&
        box.left >= 0 &&
        box.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        box.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

searchBar.addEventListener('click', toggleSearchBar);
searchIcon.addEventListener('click', toggleSearchBar);
searchBarCloser.addEventListener('click', toggleSearchBar);

hamburger.addEventListener('click', toggleMobileMenu);
blurSection.addEventListener('click', blurSectionClicked);
bannerButtons.forEach(button => {
    button.addEventListener('click', scrollBanner);
});

window.addEventListener('DOMContentLoaded', function(){
    loadBanners();
    startBannerScroll();

    shoeSizes = document.querySelectorAll("#shoe-sizes > button");
    shoeColors = document.querySelectorAll("#shoe-colors a");
    
    shoeSizes.forEach(button => {
        button.addEventListener('click', setSizeActive);
    });
    
    shoeColors.forEach(img => {
        img.addEventListener('click', setColorActive);
    });
});