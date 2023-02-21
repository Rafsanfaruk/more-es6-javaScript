const users =[
    { id:1,
        name:'Rafsan',
        job:'bekar'
    }
]
// console.log(users[0].name);

const data ={
    count:500000,
    data:[
        {id:1,name:'Rafsan',job:'bekar'},

        {pp:2,name:'Rafsan',job:'bekar'},

        {id:3,name:'Rafsan',job:'bekar'}
    ]
}

const firstJob =data.data[0].job;
// console.log(firstJob);

const user ={
    id:5001,
    name:'Clay janson',
    address:{
        street:{
            first:'26/A New Dhanmondi',
            second:'4th goli',
            third:'7th floor'

        },
        postCode:'Dhaka-1206',
        city:'Dhaka',
    }
}
const userFloor=user.address.street.third
console.log(userFloor);