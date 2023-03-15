'use strict';

// store min/max hourly cust and avg cookies per customer in objects
const hourArray = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"]


const tableElement = document.getElementById('table1');

// this is an object constructor function
function locationData(name, minCust, maxCust, avgCookieSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.cookiesPerHour = [];
    this.custPerHour = [];
    this.totalCookies = 0;
}
let location1 = new locationData('Seattle', 23, 65, 6.3);
let location2 = new locationData('Tokyo', 3, 24, 1.2);
let location3 = new locationData('Dubai', 11, 38, 3.7);
let location4 = new locationData('Paris', 20, 38, 2.3);
let location5 = new locationData('Lima', 2, 16, 4.6,);

console.log(location1);
console.log(location2);
console.log(location3);
console.log(location4);
console.log(location5);

locationData.prototype.randomCustNum = function(minCust, maxCust){
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

locationData.prototype.getCustPerHour = function(hourArray){ // this function returns an array of customers per hour
    for (let i = 0; i < hourArray.length; i++){
        this.custPerHour.push(this.randomCustNum(this.minCust, this.maxCust));
    }
}

locationData.prototype.getCookiesPerHour = function(){
    this.getCustPerHour(hourArray);
    for (let i = 0; i < hourArray.length; i++){
        let hour1 = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
        this.cookiesPerHour.push(hour1);
        this.totalCookies += hour1;
    }
}

for (let i = 0; i < hourArray.length; i++){
    let timeHeader = document.createElement('th');
    timeHeader.textContent = hourArray[i];
    tableElement.appendChild(timeHeader);
}

locationData.prototype.renderTableElements = function(){ //this function renders the table
    this.getCookiesPerHour();
    let locationRowEl = document.createElement('tr');
    tableElement.appendChild(locationRowEl);

    let locationRowHeadElement = document.createElement('th');
    locationRowHeadElement.textContent = this.name;
    locationRowEl.appendChild(locationRowHeadElement);

    for (let i = 0; i < hourArray.length; i++){
        let tdElement = document.createElement('td');
        tdElement.textContent = this.cookiesPerHour[i];
        locationRowEl.appendChild(tdElement);
    }
    let tdTotalElement = document.createElement('td');
    tdTotalElement.textContent = this.totalCookies;
    locationRowEl.appendChild(tdTotalElement);
};

location1.renderTableElements();
location2.renderTableElements();
location3.renderTableElements();
location4.renderTableElements();
location5.renderTableElements();
