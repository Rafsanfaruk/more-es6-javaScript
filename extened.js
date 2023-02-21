// common golo eksathe,.,.
class TeamMember {
    name;
    location;

    constructor(name,location){
        this.name=name;
        this.location=location;

    }
    provideFeedback (){
        console.log(`${this.name} Thank you for your feedback`)
       }

}

class Instructor extends TeamMember {
    
    designation ='Web Course Instructor';
    team ='Web team';
    
    constructor(name,location){
        super(name,location);

    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
   }
};


class Developer extends TeamMember {
   
    designation ='Web Course Instructor';
    team ='Developer';
    tech;
    constructor(name,location,tech){
        super(name,location);
        this.tech=tech;

    }
    developFeature(feature){
        console.log(`please develop the  ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
   }
};


class JobPlacement extends TeamMember {
    
    designation ='Job placement commandos';
    team ='job';
    region;

    constructor(name,location,region){
        super(name,location);
        this.region =region;

    }
    provideResume(feature){
        console.log(`please provide the resume  ${feature}`)
    }
    prepareStudent(student){
        console.log(`please prepare student ${student}`)
   }
};
const rafsan =new Developer('rafsan','Dhaka','react');
console.log(rafsan);
rafsan.provideFeedback();

const Anika =new Instructor('Anika','Dhanmondhi','Font');
console.log(Anika);