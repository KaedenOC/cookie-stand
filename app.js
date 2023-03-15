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
    // return statement is implied with a constructor function
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

// prototype method because it's a constructor function

locationData.prototype.randomCustNum = function(minCust, maxCust){
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

locationData.prototype.getCustPerHour = function(hourArray){ // this function returns an array of customers per hour
    for (let i = 0; i < hourArray.length; i++){
        this.custPerHour.push(this.randomCustNum(this.minCust, this.maxCust));
    }
}

locationData.prototype.getCookiesPerHour = function(){ //this function returns an array of cookies per hour
    this.getCustPerHour(hourArray); //this function calls the function to get customers per hour
    for (let i = 0; i < hourArray.length; i++){
        let hour1 = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
        this.cookiesPerHour.push(hour1);
        this.totalCookies += hour1;
    }
}

let emptHeader = document.createElement("th");
tableElement.appendChild(emptHeader);

//table header loop for hourArray

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

    for (let i = 0; i < hourArray.length; i++){ //this loops through the hourArray
        let tdElement = document.createElement('td');//this creates a td element
        tdElement.textContent = this.cookiesPerHour[i];//this sets the text content of the td element to the value of the hourly cookies
        locationRowEl.appendChild(tdElement);
    }
    let tdTotalElement = document.createElement('td');
    tdTotalElement.textContent = this.totalCookies;
    locationRowEl.appendChild(tdTotalElement);
};
    // for (let i = 0; i < cookiesPerHour[i]; i++){ //or loop through the hour array??

    // }

let headerTotalEl = document.createElement('th');
headerTotalEl.textContent = 'Daily Totals';
tableElement.appendChild(headerTotalEl);

location1.renderTableElements();
location2.renderTableElements();
location3.renderTableElements();
location4.renderTableElements();
location5.renderTableElements();

let footerElement = document.createElement('tfoot');
footerElement.textContent = 'Hourly Totals';
tableElement.appendChild(footerElement);

