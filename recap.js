//1. var let const
// break up with var

const  numbers=[12,546,45,98];
let salary =10000;
salary=12000;


// 2.default parameters

function calculateSalary(salary,tax=0.25,bonus=0){
    const remaining =salary-salary*tax;
    const total=remaining + bonus;
    return total;
}

// const finalTotal =calculateSalary(10000);
// console.log(finalTotal);

// template string
const elementHTML=`
<div>
<h3>Name: </h3>
<p>Address: </p>
<p>salary: ${calculateSalary(10000,0,0)} </p>
<P>Others : ${numbers[2]}</P>
</div>
`

// Arrow Function

const doubleIt = x => x*2;
const calculateSalary2=(salary,tax,bonus) =>salary-salary*tax+bonus;


// 
const ages =[11,13,14,25,23,20];

// const newAges=ages;

const newAges=[...ages,22,21,19];

// destructuring

const {x,y,z, ...c}={ x: 45, y:12 , z:33 ,name:'Rafsan', salary:500000 }

const [a,b, ...r]=[12,45,21,35,23,99,114,245]

