const numbers=[12,56,84,44];
const half =numbers.map(n =>n/2)
const thirds =numbers.map(x=> x/3);
// console.log(half);
// console.log(thirds);

const friends =['Rafsan', 'Rafu','Raffuu','Faruk'];
const firstLatter =friends.map(friend => friend[0]);
// console.log(firstLatter);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products =[
    {id:1,name:'laptop',price:55000},
    {id:2,name:'mobile',price:85000},
    {id:3,name:'watch',price:25000},
    {id:4,name:'tablet',price:65000},
    {id:5,name:'desktop',price:95000},
];
//  const items =products.map(product =>console.log(product.name));
 const items=products.map(product => product.name);
 const prices=products.map(p => p.price);
//  console.log(items);
console.log(prices);
