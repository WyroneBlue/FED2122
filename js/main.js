console.log('Hello World');

var shoeSizes;
var shoeColors;
var banner = document.querySelector('#announcement-banner');
var title = document.querySelector('#shoe-title');

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

window.addEventListener('scroll', (e) => {
    console.log(e);
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