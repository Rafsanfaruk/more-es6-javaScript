const numbers=[12,5,23,56,78,91,567,36,06,57,89,33,66,85,46,6.1,7,];
const bigNums =numbers.filter(number => number > 20);

const tiny =numbers.filter(m =>m < 10);

const even =numbers.filter(p => p%2 ===0);

// console.log(bigNums);
// console.log(tiny);
// console.log(even);

const products =[
    {id:1,name:'laptop',price:55000},
    {id:2,name:'mobile',price:85000},
    {id:3,name:'watch',price:25000},
    {id:4,name:'tablet',price:65000},
    {id:5,name:'desktop',price:95000},
];
// const expensive =products.filter(a =>a.price > 80000);
const expensive =products.filter(a =>a.price < 1000);
console.log(expensive);



