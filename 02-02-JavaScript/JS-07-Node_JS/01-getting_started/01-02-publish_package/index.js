const { getCode } = require('country-list');
const axios = require('axios').default;

const country = process.argv[2];
const countryCode = getCode(country);
const year = process.argv[3] ? process.argv[3] : parseInt(new Date().getFullYear()); 

axios.get(`https://date.nager.at/Api/v1/Get/${countryCode}/${year}`)
    .then(response => response.data.map(holiday => {
        console.log(holiday.date, holiday.localName)
    }))
    .catch((error) => {
        console.log(error);
    });






