var hours=['', '10am: ', '11am: ', '12pm: ', '1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
var shops = [];
var hoursEl = document.getElementById('cookies');

function CookieStand(stand, min, max, average) {
  this.stand = stand;
  this.min = min;
  this.max = max;
  this.average = average;
  this.hourlyTotals = []
  this.dailyCookies = 0
  shops.push(this);
  this.calc();
}

CookieStand.prototype.customers = function (){
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  };

CookieStand.prototype.calc = function (){
  for (i=0; i < hours.length-2; i++) {
    var cook = Math.floor(this.customers() * this.average);
    this.hourlyTotals.push(cook);
    console.log(this.hourlyTotals[i]);
    this.dailyCookies += cook;
     console.log(this.dailyCookies + 'daily cookies');
  }
  this.hourlyTotals.unshift(this.dailyCookies);
};

var pikePlace = new CookieStand ('Pike Place Market', 17, 88, 5.2);
var seatac = new CookieStand ('SeaTac Airport', 6, 44, 1.2);
var southcenter = new CookieStand ('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStand ('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand ('Alki', 3, 24, 2.6);

function cookies () {
var tblEl = document.createElement('table');
  var trEl = document.createElement('tr');
  for (var i = 0;  i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
}
tblEl.appendChild(trEl);
for (var h = 0; h < shops.length; h++) {
  var taEl = document.createElement('tr');
  var tgEl = document.createElement('th');
  tgEl.textContent = shops[h].stand;
  taEl.appendChild(tgEl);
console.log(shops[1]);
console.log(shops[1].hourlyTotals.length);
for (var b=0; b < shops[h].hourlyTotals.length; b++){
    var tdEl = document.createElement('td');
    tdEl.textContent = shops[h].hourlyTotals[b];
    taEl.appendChild(tdEl);
  }
  tblEl.appendChild(taEl);
}
  hoursEl.appendChild(tblEl);
};

cookies();



// CookieStand.prototype.render = function () {
//   for (var i=0; i < hours.length; i++){
// }
// }
// var hoursEL = document.getElementById('cookies');
// var tblEl = document.createElement('table');
// tblEl.appendChild(document.createTextNode('Average Cookies per Hour'))
