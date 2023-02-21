const numbers=[12,5,23,56,78,91,567,36,06,57,89,33,66,85,46,6.1,7,];

// Only first element can get use find
const fives =numbers.find(q  => q % 5 === 0);

// all element we can get use filter
const fivesAll =numbers.filter(p => p % 5 ===0);
console.log(fivesAll);
console.log(fives);

const products =[
    {id:1,name:'laptop',price:55000},
    {id:2,name:'mobile',price:85000},
    {id:3,name:'watch',price:25000},
    {id:4,name:'tablet',price:15000},
    {id:5,name:'desktop',price:95000},
];
 const cheap =products.find(product => product.price < 25000);

console.log(cheap);
