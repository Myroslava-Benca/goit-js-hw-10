import './css/styles.css';
import  fetchCountries from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

let name = '';

const refs = {
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
    input: document.querySelector('.input')
}

refs.input.addEventListener('input', onSearch)

function onSearch(evt){
  evt.preventDefault()
    name = evt.target.value.trim();

    fetchCountries()
        .then(renderCountry)
        // .catch(error)
}

function renderCountry({name, capital , population , flags , languages}) {
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
}

