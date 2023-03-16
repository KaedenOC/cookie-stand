'use strict';

// store min/max hourly cust and avg cookies per customer in objects
const hourArray = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"]

let store = []


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
    store.push(this);
    // return statement is implied with a constructor function
}
new locationData('Seattle', 23, 65, 6.3);
new locationData('Tokyo', 3, 24, 1.2);
new locationData('Dubai', 11, 38, 3.7);
new locationData('Paris', 20, 38, 2.3);
new locationData('Lima', 2, 16, 4.6);
console.log(store);

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

function renderFooter(){
    let footRowEl = document.createElement('tr');
    let footerElement = document.createElement('tfoot');
    footerElement.appendChild(footRowEl);
    let footHeader = document.createElement('th');
    footHeader.textContent = 'Hourly Totals';
    footRowEl.appendChild(footHeader);
    tableElement.appendChild(footerElement);
    let grandTotal = 0;
    for (let i = 0; i < hourArray.length; i++){ //this loops through the hourArray
        let hourlyTotal = 0;
        for (let j = 0; j < store.length; j++){
            let hourlyNum = store[j].cookiesPerHour[i];
            hourlyTotal += hourlyNum; //this adds the value of the hourly cookies to the total
            
        }
        grandTotal += hourlyTotal;
        let hourlyTotalCell = document.createElement('td');
        hourlyTotalCell.textContent = hourlyTotal;
        footRowEl.appendChild(hourlyTotalCell);
    }
    let grandTotalCell = document.createElement('td');
    grandTotalCell.textContent = grandTotal;
    footRowEl.appendChild(grandTotalCell);
    console.log(grandTotal);

}
let headerTotalEl = document.createElement('th');
headerTotalEl.textContent = 'Daily Totals';
tableElement.appendChild(headerTotalEl);

for (let i = 0; i < store.length; i++){ //this function loops through the store array and then calls the renderTableElements function
    store[i].renderTableElements(); 
}

renderFooter();


let buttonElement = document.getElementById("button");
let formElement = document.getElementById("store-form");

function handleClick(){
    console.log("click has happened");
}

buttonElement.addEventListener("click", handleClick);
formElement.addEventListener("submit", function (event){
    event.preventDefault();
    let {location_name, min_customers, max_customers, avg_cookiesale} = event.target;
    location_name = location_name.value;
    min_customers = parseInt(min_customers.value);
    max_customers = parseInt(max_customers.value);
    avg_cookiesale = parseFloat(avg_cookiesale.value);

    new locationData(location_name, min_customers, max_customers, avg_cookiesale);
    console.log(store);

})
