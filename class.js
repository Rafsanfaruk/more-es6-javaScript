// syntactic sugar

class Instructor {
    name;
    designation ='Web Course Instructor';
    team ='Web team';
    location;
    constructor(name,location){
        this.name =name;
        this.location =location;

    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
   }
}
const rafsan =new Instructor( 'rafsan','Dhaka');
console.log(rafsan);

rafsan.startSupportSession('4.00 PM');
rafsan.createQuiz(40);

const Aziz =new Instructor('Aziz','khulna');
console.log(Aziz);