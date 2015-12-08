var hours=['10am: ', '11am: ', '12pm: ', '1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
var hoursEL = document.getElementById('cookies');
var ulEl = document.createElement('ul');
ulEl.appendChild(document.createTextNode('Average Cookies per Hour'));
var pikePlace = {
  name: 'Pike Place Market',
  min: 17,
  max: 88,
  average: 5.2,
  hourlyTotals:[],
  customers: function() {
    return Math.floor(Math.random() * (this.max-this.min)+ this.min);
  },
  cookies: function() {
    return Math.floor(this.customers() * this.average);
  },
  calc: function() {
    for (var i=0; i < hours.length; i++){
      this.hourlyTotals.push(this.cookies());
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourlyTotals[i];
      ulEl.appendChild(liEl);
    }
   hoursEL.appendChild(ulEl);
  }
};
console.log(pikePlace.customers());
console.log(pikePlace.cookies());
pikePlace.calc();

var seatac = {
  name: 'SeaTac Airport',
  min: 6,
  max: 44,
  average: 1.2,
  hourlyTotals:[],
  customers: function() {
    return Math.floor(Math.random() * (this.max-this.min)+ this.min);
  },
  cookies: function() {
    return Math.floor(this.customers() * this.average);
  },
  calc: function() {
    for (var i=0; i < hours.length; i++){
      this.hourlyTotals.push(this.cookies());
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourlyTotals[i];
      ulEl.appendChild(liEl);
    }
   hoursEL.appendChild(ulEl);
  }
};
console.log(seatac.customers());
console.log(seatac.cookies());
seatac.calc();

var southcenter = {
  name: 'Southcenter Mall',
  min: 11,
  max: 38,
  average: 1.9,
  hourlyTotals:[],
  customers: function() {
    return Math.floor(Math.random() * (this.max-this.min)+ this.min);
  },
  cookies: function() {
    return Math.floor(this.customers() * this.average);
  },
  calc: function() {
    for (var i=0; i < hours.length; i++){
      this.hourlyTotals.push(this.cookies());
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourlyTotals[i];
      ulEl.appendChild(liEl);
    }
   hoursEL.appendChild(ulEl);
  }
};
console.log(southcenter.customers());
console.log(southcenter.cookies());
southcenter.calc();

var bellevue = {
  name: 'Bellevue Square',
  min: 20,
  max: 48,
  average: 3.3,
  hourlyTotals:[],
  customers: function() {
    return Math.floor(Math.random() * (this.max-this.min)+ this.min);
  },
  cookies: function() {
    return Math.floor(this.customers() * this.average);
  },
  calc: function() {
    for (var i=0; i < hours.length; i++){
      this.hourlyTotals.push(this.cookies());
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourlyTotals[i];
      ulEl.appendChild(liEl);
    }
   hoursEL.appendChild(ulEl);
  }
};
console.log(bellevue.customers());
console.log(bellevue.cookies());
bellevue.calc();

var alki = {
  name: 'Alki',
  min: 3,
  max: 24,
  average: 2.6,
  hourlyTotals:[],
  customers: function() {
    return Math.floor(Math.random() * (this.max-this.min)+ this.min);
  },
  cookies: function() {
    return Math.floor(this.customers() * this.average);
  },
  calc: function() {
    for (var i=0; i < hours.length; i++){
      this.hourlyTotals.push(this.cookies());
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourlyTotals[i];
      ulEl.appendChild(liEl);
    }
   hoursEL.appendChild(ulEl);
  }
};
console.log(alki.customers());
console.log(alki.cookies());
alki.calc();
