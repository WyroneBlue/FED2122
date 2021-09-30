console.log('search');

var popularTermsSectionHtml = '';
var popularTermsSection = document.querySelector('#search-results > section > ul');
console.log(shoeList.length);

var popularShoeIds = [
  1, 3, 8, 10
]

const loadPopularTerms = function(e){

  let filteredPopularTerms = [];
  for (let i = 0; i < popularShoeIds.length; i++) {
    let id = popularShoeIds[i];
    let shoe = shoeList[id];
    filteredPopularTerms.push(shoe);
  }

  console.log(filteredPopularTerms);
  filteredPopularTerms.forEach(shoe => {
      
    popularTermsSectionHtml += `
      <li>${shoe.name}</li>
    `;
  });
  popularTermsSection.innerHTML = popularTermsSectionHtml;
}

window.addEventListener('DOMContentLoaded', loadPopularTerms);