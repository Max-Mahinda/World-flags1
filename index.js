const countryList = document.getElementById('country-container');
const triviaContainer = document.getElementById('trivia-conainer');
const filters = document.getElementById('country-filters');
const studyBttn = document.getElementById('quiz-button');
const howToPlay = document.getElementById('how-to-play');
const languageSelect = document.getElementById('language-select');
const flagArray = [];
const countriesArray =[];
let incorrect = 0;
let correct =0;
const baseUrl  = 'https://restcountries.com/v3.1/all';
//fetching data from api and storing it in an array of objects
const fetchCountry = () => {
    return fetch(baseUrl)
    .then((response)=> response.json())
};

const renderCountries = (country) => {
    const countryCard = document.createElement('div')
    countryCard.className = 'card'
    
    const figure = document.createElement('figure')
    figure.className ='flag-container'
    const countryFlag = document.createElement('img')
    countryFlag.src = country.flag.svg
    countryFlag.alt = country.name.official
    coumtryFlag.class = 'flags'
    figure.appendChild(countryFlag);
}