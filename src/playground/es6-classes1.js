// Car class
// make, model, vin, getDescription

class Person{
    constructor(name='Anonymous',age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name} !`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}
class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description+=`. Their major is ${this.major}.`;
        }
        return description;
    }
}
const me1 = new Student("Tatvam Dadheech",20,'Computer science');
const me = new Person("Tatvam Dadheech",20);
console.log(me1);
console.log(me1.hasMajor());
console.log(me1.getDescription());
console.log(me.getDescription());

const other1 = new Student ();
console.log(other1);
console.log(other1.hasMajor());
//console.log(other.getGreeting());
//console.log(other.getDescription());
