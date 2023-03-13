'use strict';

// store min/max hourly cust and avg cookies per customer in objects

let hourArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

let location1 = {
    name1: 'Seattle',
    minCust1: 23,
    maxCust1: 65,
    avgCookieSale1: 6.3,
}
function randomCustNum(min, max) {
    min = Math.ceil(23);
    max = Math.floor(65);
    return Math.floor(Math.random() * (max - min) + min);
}
// for (let i = 6; i < hourArray.length; )

    // console.log(randomCustNum());

// console.log(location1);

let location2 = {
    name2: 'Tokyo',
    minCust2: 3,
    maxCust2: 24,
    avgCookieSale2: 1.2,
}

// console.log(location2);

let location3 = {
    name3: 'Dubai',
    minCust3: 11,
    maxCust3: 38,
    avgCookieSale3: 3.7,
}

// console.log(location3);

let location4 = {
    name4: 'Paris',
    minCust4: 20,
    maxCust4: 38,
    avgCookieSale4: 2.3,
}

// console.log(location4);

let location5 = {
    name5: 'Lima',
    minCust5: 2,
    maxCust5: 16,
    avgCookieSale5: 4.6,
}

// console.log(location5);
