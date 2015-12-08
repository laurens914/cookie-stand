var hours=['10am: ', '11am: ', '12pm: ', '1pm: ','2pm: ','3pm: ','4pm: ','5pm: '];
var shops = [];

function CookieStand(stand, min, max, average) {
  this.stand = stand;
  this.min = min;
  this.max = max;
  this.average = average;
  this.hourlyTotals = []
  this.dailyCookies = 0
  shops.push(this);
  this.cookies();
}

CookieStand.prototype.customers = function(){
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  };

CookieStand.prototype.cookies = function () {
  for (i=0; i < hours.length; i++) {
    var cook = Math.floor(this.customers() * this.average);
    console.log(cook);
    this.hourlyTotals.push(cook);
    this.dailyCookies += cook;
  }
};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seatac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

// CookieStand.prototype.render = function () {
//   for (var i=0; i < hours.length; i++){
//     var tdEl = document.createElement('td');
//     tdEl.textContent = hours[i] + this.hourlyTotals[i];
//     tblEl.appendChild(tdEl);
// }
// }
// var hoursEL = document.getElementById('cookies');
// var tblEl = document.createElement('table');
// tblEl.appendChild(document.createTextNode('Average Cookies per Hour'))
