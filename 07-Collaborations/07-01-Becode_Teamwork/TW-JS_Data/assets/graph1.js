class DataFromTable {
    constructor() {

    }

    getData() {

    }

    getCountry() {
        let country = [];
        for (let i = 2; i < allData.length; i++) {
            country.push(allData[i][1]);
        }
        return country;
    }

    getCrimes() {

    }

    getYears() {

    }
}

// get year
let table1 = document.getElementById("table1");
let allData = [...table1.rows].map(t => [...t.children].map(u => u.innerText));
let years = allData[1].filter(function (el) { return el; });

console.log(allData);
console.log(years);

let country = [];
for (let i = 2; i < allData.length; i++) {
    country.push(allData[i][1]);
}

let crimes = [];
for (let i = 2; i < allData.length; i++) {
    crimes.push(allData[i].slice(2));
}
console.log(crimes);

let labels = years;
let ctx = document.getElementById("myChart").getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: country[0],
            data: crimes[0],
            fill: false,
        }, {
            label: country[1],
            fill: false,
            data: crimes[1],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'label',
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
});    