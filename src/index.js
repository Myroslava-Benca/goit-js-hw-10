import './css/styles.css';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;

let name = ' ';

const refs = {
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
    input: document.querySelector('.input')
}

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))

function onSearch(evt) {
  evt.preventDefault()
  name = evt.target.value.trim();

  fetchCountries()
    .then(renderCountry)
    .catch(errorMessage)
}


function renderCountry(countries) {
  const markup = countries
    .map(( {name, capital, population, flags, languages }) => {

      return ` <ul>
    <li> 
    <img src =${flags} alt='flags of ${name}' width=60 height=40/>
     </li>
     </ul>
     <ul>
     <li>Capital: ${capital}</li>
     <li>Population: ${population}</li>
     <li>Languages: ${languages}</li>
     </ul>
     `
    })
    .join("");
  refs.countryInfo.innerHTML = markup;
  
  if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  }

function errorMessage(error) {
   Notiflix.Notify.failure("Oops, there is no country with that name");
}
