// Variables initialiseren
let popularTermsSectionHtml = '';
const popularTermsSection = document.querySelector('#search-results > section > ul');
const searchBarVal = document.querySelector('header nav#search-results div input');
const results = document.querySelector('header nav#search-results .list');
const msg = document.querySelector('header nav#search-results .no-results');

let shoeSearchable;
let searchHtml = '';

const popularShoeIds = [
  1, 3, 7, 10
]

// Load filter shoes
const loadFilterShoes = (e) => {
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

// Lists.js Initialiseren
const loadSearchableResults = () => {
	
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
	shoeSearchable.on('updated', (list) => {
		if(list.matchingItems.length > 1){
			msg.classList.remove('show');
		} else {
			msg.classList.add('show');
		}
	})
}

// Load popular terms from ids
const loadPopularTerms = (e) => {

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

// Check input from searchbar
const checkInput = (e) => {
	let section = popularTermsSection.parentNode;
	if(e.target.value != ''){
		section.classList.add('searching');
	} else if(e.target.value == ''){
		section.classList.remove('searching');
	}
}

// Load functions 
const onDomLoaded = () => {
	loadFilterShoes();	
	loadPopularTerms();
}

// Eventlisteners
searchBarVal.addEventListener('input', checkInput);
window.addEventListener('DOMContentLoaded', onDomLoaded);