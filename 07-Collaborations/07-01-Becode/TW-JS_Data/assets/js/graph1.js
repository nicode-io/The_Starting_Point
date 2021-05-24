class LineChart {
  constructor(table) {
    this.originTable = document.getElementById(table);
    this.originData = [...this.originTable.rows].map(t => [...t.children].map(u => u.innerText));
    this.type = 'line';
    this.years = [];
    this.countries = [];
    this.data = {};
    this.datasets = [];
    this.crimesByYear = [];
    this.crimesByYearInt = [];
    this.fill = false;
  }

  /**
   * Get an array with all years to display as label on X-axis
   */
  getYears() {
    this.years = this.originData[1].filter(function (el) { return el; });
  }

  /**
   * Get an array with crimes' numbers
   */
  getCrimes() {
    for (let i = 2; i < this.originData.length; i++) {
      this.crimesByYear.push(this.originData[i].slice(2));
    }

    this.crimesByYear.forEach(el => {
      for (let i = 0; i < el.length; i++) {
        el[i] = parseFloat(el[i].replace(/,/g, '.'));
      }
    })
  }
  /**
   * Get an array with all countries for wich we have datas to show
   */
  getCountries() {
    for (let i = 2; i < this.originData.length; i++) {
      this.countries.push(this.originData[i][1]);
    }
  }

  /**
   * Get an array with datasets' objects
   */
  getDatasets() {
    for (let i = 0; i < this.countries.length; i++) {
      this.datasets[i] = { label: this.countries[i], data: this.crimesByYear[i] };
    }
    console.log(this.datasets);
  }

  returnChartParameter() {
    this.data = {
      type: this.type,
      data: {
        labels: this.years,
        datasets: this.datasets
      }
    }
    return this.data;
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'canvas');
    this.canvas.width = 800;
    this.canvas.height = 500;
    table1.before(this.canvas);
    this.ctx = document.getElementById('canvas');
  }

}

finalObject = new LineChart('table1');
finalObject.getYears();
finalObject.getCountries();
finalObject.getCrimes();
finalObject.getDatasets();
finalObject.createCanvas();

let chart = new Chart(document.getElementById('canvas'), {
  type: 'line',
  data: {
    labels: finalObject.years,
    datasets: finalObject.datasets
  }, options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


