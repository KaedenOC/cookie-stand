'use strict';

// store min/max hourly cust and avg cookies per customer in objects
const hourArray = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"]

// function randomCustNum(min, max) { //this function returns a random number between min and max
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

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

// locationData.prototype.render = function(){
//     this.getCookiesPerHour();
//     let seattleLi = document.getElementById("seattlelist"); //creates a list item for each hour
//         for (let i = 0; i < hourArray.length; i++){
//         let liElement = document.createElement("li");  //creates a list item
//         liElement.textContent = `${hourArray[i]}: ${this.cookiesPerHour[i]} cookies.`; //this is the liElement function that creates a list item for each hour
//         locationData.appendChild(liElement);
//         }

// }

location1.getCookiesPerHour();
location2.getCookiesPerHour();
location3.getCookiesPerHour();
location4.getCookiesPerHour();
location5.getCookiesPerHour();


// let location1 = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookieSale: 6.3,
//     cookiesPerHour: [], //this is an empty array that will hold all the cookies sold per hour
//     custPerHour: [], //this is an empty array that will hold all the customers per hour
//     totalCookies: 0,
//     getCustPerHour: function () { //this function gets the customers per hour and stores it in the custPerHour array
//         for (let i = 0; i < hourArray.length; i++){ //this is the for loop for each hour
//             this.custPerHour.push(randomCustNum(this.minCust, this.maxCust)); //this is the randomCustNum function that returns a random number between min and max per hour
//         }
//     },
//     getCookiesPerHour: function () {  
//     this.getCustPerHour(); //calls getCustPerHour function
//         for (let i = 0; i < hourArray.length; i++){
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgCookieSale); //this is the Math.ceil function that rounds the number to the nearest whole number
//             this.cookiesPerHour.push(hour1); //pushes the hourly cookies to the array
//             this.totalCookies += hour1; //adds the hourly cookies to the total
//         }
//     },
//     render: function () {
//         this.getCookiesPerHour(); //calls getCookiesPerHour function
//         let seattleLi = document.getElementById("seattlelist"); //creates a list item for each hour
//         for (let i = 0; i < hourArray.length; i++){
//             let liElement = document.createElement("li");  //creates a list item
//             liElement.textContent = `${hourArray[i]}: ${this.cookiesPerHour[i]} cookies.`; //this is the liElement function that creates a list item for each hour
//             seattleLi.appendChild(liElement);
//         }
//         let liElement = document.createElement("li");
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         seattleLi.appendChild(liElement);

//     }
// }
// location1.render();

// let seattleLi = document.getElementById("seah2");
// let h2Element = document.createElement("h2");
// h2Element.textContent = location1.name;
// seattleLi.appendChild(h2Element);;



// let location2 = {
//     name: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.2,
//     cookiesPerHour: [],
//     custPerHour: [],
//     totalCookies: 0,
//     getCustPerHour: function () {
//         for (let i = 0; i < hourArray.length; i++){
//             this.custPerHour.push(randomCustNum(this.minCust, this.maxCust));
//         }
//     },
//     getCookiesPerHour: function () {
//         this.getCustPerHour();
//         for (let i = 0; i < hourArray.length; i++){
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
//             this.cookiesPerHour.push(hour1);
//             this.totalCookies += hour1;
//         }
//     },
//     render: function () {
//         this.getCookiesPerHour();
//         let tokyoLi = document.getElementById("tokyoLi");
//         for (let i = 0; i < hourArray.length; i++){
//             let liElement = document.createElement("li");
//             liElement.textContent = `${hourArray[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             tokyoLi.appendChild(liElement);
//         }
//         let liElement = document.createElement("li");
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         tokyoLi.appendChild(liElement);

//     }
// }
// location2.render();

// let tokyoLi = document.getElementById("tokh2");
// let h2ElementT = document.createElement("h2");
// h2ElementT.textContent = location2.name;
// tokyoLi.appendChild(h2ElementT);


// let location3 = {
//     name: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookieSale: 3.7,
//     cookiesPerHour: [],
//     custPerHour: [],
//     totalCookies: 0,
//     getCustPerHour: function () {
//         for (let i = 0; i < hourArray.length; i++){
//             this.custPerHour.push(randomCustNum(this.minCust, this.maxCust));
//         }
//     },
//     getCookiesPerHour: function () {
//         this.getCustPerHour();
//         for (let i = 0; i < hourArray.length; i++){
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
//             this.cookiesPerHour.push(hour1);
//             this.totalCookies += hour1;
//         }
//     },
//     render: function () {
//         this.getCookiesPerHour();
//         let dubaiLi = document.getElementById("dubaiLi");
//         for (let i = 0; i < hourArray.length; i++){
//             let liElement = document.createElement("li");
//             liElement.textContent = `${hourArray[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             dubaiLi.appendChild(liElement);
//         }
//         let liElement = document.createElement("li");
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         dubaiLi.appendChild(liElement);

//     }

// }
// location3.render();

// let dubaiLi = document.getElementById("dubh2");
// let h2ElementD = document.createElement("h2");
// h2ElementD.textContent = location3.name;
// dubaiLi.appendChild(h2ElementD);


// let location4 = {
//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookieSale: 2.3,
//     cookiesPerHour: [],
//     custPerHour: [],
//     totalCookies: 0,
//     getCustPerHour: function () {
//         for (let i = 0; i < hourArray.length; i++){
//             this.custPerHour.push(randomCustNum(this.minCust, this.maxCust));
//         }
//     },
//     getCookiesPerHour: function () {
//         this.getCustPerHour();
//         for (let i = 0; i < hourArray.length; i++){
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
//             this.cookiesPerHour.push(hour1);
//             this.totalCookies += hour1;
//         }
//     },
//     render: function () {
//         this.getCookiesPerHour();
//         let parisLi = document.getElementById("parisLi");
//         for (let i = 0; i < hourArray.length; i++){
//             let liElement = document.createElement("li");
//             liElement.textContent = `${hourArray[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             parisLi.appendChild(liElement);
//         }
//         let liElement = document.createElement("li");
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         parisLi.appendChild(liElement);

//     }

// }
// location4.render();

// let parisLi = document.getElementById("parish2");
// let h2ElementP = document.createElement("h2");
// h2ElementP.textContent = location4.name;
// parisLi.appendChild(h2ElementP);


// let location5 = {
//     name: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookieSale: 4.6,
//     cookiesPerHour: [],
//     custPerHour: [],
//     totalCookies: 0,
//     getCustPerHour: function () {
//         for (let i = 0; i < hourArray.length; i++){
//             this.custPerHour.push(randomCustNum(this.minCust, this.maxCust));
//         }
//     },
//     getCookiesPerHour: function () {
//         this.getCustPerHour();
//         for (let i = 0; i < hourArray.length; i++){
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
//             this.cookiesPerHour.push(hour1);
//             this.totalCookies += hour1;
//         }
//     },
//     render: function () {
//         this.getCookiesPerHour();
//         let limaLi = document.getElementById("limaLi");
//         for (let i = 0; i < hourArray.length; i++){
//             let liElement = document.createElement("li");
//             liElement.textContent = `${hourArray[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             limaLi.appendChild(liElement);
//         }
//         let liElement = document.createElement("li");
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         limaLi.appendChild(liElement);

//     }
    
// }
// location5.render();

// let limaLi = document.getElementById("limah2");
// let h2ElementL = document.createElement("h2");
// h2ElementL.textContent = location5.name;
// limaLi.appendChild(h2ElementL);