var popularTermsSectionHtml = '';
var popularTermsSection = document.querySelector('#search-results > section > ul');
var searchBarVal = document.querySelector('header nav#search-results div input');
var results = document.querySelector('header nav#search-results .list');
var msg = document.querySelector('header nav#search-results .no-results');

var shoeSearchable;
let searchHtml = '';

var popularShoeIds = [
  1, 3, 7, 10
]

const loadFilterShoes = function(e){
	shoeList.forEach(shoe => {
		searchHtml += `
		<article>
			<a class="href">
				<h2 class="name"></h2>
				<img class="image" alt="Shoe Image">
				<p class="msg"></p>
				<p class="formatPrice"></p>
			</a>
		</article>
		`;
	});

	loadSearchableResults();
}

const loadSearchableResults = function () {
	
	var options = {
		valueNames: [ 
			'name',
			'msg',
			'formatPrice',
			{ attr: 'href', name: 'href' },
			{ attr: 'src', name: 'image' },
		],
		item: searchHtml
	};

	shoeSearchable = new List('search-results', options, shoeList);
	shoeSearchable.on('updated', function(list) {
		if(list.matchingItems.length > 1){
			msg.classList.remove('show');
		} else {
			msg.classList.add('show');
		}
	})
}

const loadPopularTerms = function(e){

  let filteredPopularTerms = [];
  for (let i = 0; i < popularShoeIds.length; i++) {
    let id = popularShoeIds[i];
    let shoe = shoeList[id];
    filteredPopularTerms.push(shoe);
  }

  filteredPopularTerms.forEach(shoe => {
      
    popularTermsSectionHtml += `
      <li>${shoe.name}</li>
    `;
  });
  popularTermsSection.innerHTML = popularTermsSectionHtml;
}

const checkInput = function(e){
	let section = popularTermsSection.parentNode;
	if(e.target.value != ''){
		section.classList.add('searching');
	} else if(e.target.value == ''){
		section.classList.remove('searching');
	}
}

const onDomLoaded = function(e){
	loadFilterShoes();	
	loadPopularTerms();
}

searchBarVal.addEventListener('input', checkInput);
window.addEventListener('DOMContentLoaded', onDomLoaded);