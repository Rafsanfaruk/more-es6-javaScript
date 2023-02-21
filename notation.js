const student ={
    name:'Alif',
    age:17,
    class:'ten',
    marks: {
        math:90,
        physics :76,
        chemistry:85
    }
}
// use .notation

const marks =student.marks;
const math =student.marks.math;
// console.log(math);

const chemistry =student['marks']['chemistry'];
// console.log(chemistry);

const subject ='math';
const subjectMark =student.marks[subject];
console.log(subjectMark);