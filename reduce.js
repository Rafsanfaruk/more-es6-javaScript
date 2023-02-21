// map,forEach,filter,find,reduce
const numbers =[1,2,3,4,5,6];

// .reduce (accumulator function , initial value)
// accumulatorFunction use 2 parameters

const total =numbers.reduce((previous,current ) =>previous+current , 0 )

console.log(total);