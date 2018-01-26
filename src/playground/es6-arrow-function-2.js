// arguments object - no longer bound with arrow functions

const add = function(a,b){
    console.log(arguments);
        return a+b;
}
console.log(add(5,1,2));
// ES6
/*
//Error 
const add = (a,b)=> {
    console.log(arguments);
        return a+b;
}
*/

console.log(add(5,1,2));

// this keyword - no longer bound
//ES5
// this cannot be used in nested function 
// we have to redefined this
/*const user = {
    name: "Tatvam",
    cities: ["Jaipur","bhubaneswar","shimla"],
    placevisited: function(){
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function(city){
            console.log(this.name + "has lived in" + city);
        });
    }
};
const user = {
    name: "Tatvam",
    cities: ["Jaipur","bhubaneswar","shimla"],
    placevisited: function(){
        const that=this;
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function(city){
            console.log(that.name + " has lived in " + city);
        });
    }
};
const user = {
    name: "Tatvam",
    cities: ["Jaipur","bhubaneswar","shimla"],
    // It will give error
    placevisited: () =>{
        const that=this;
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(that.name + " has lived in " + city);
        });
    }
};*/
// Best method
const user = {
    name: "Tatvam",
    cities: ["Jaipur","bhubaneswar","shimla"],
    placevisited(){
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });
    }
};
user.placevisited();

// Map ES6
/*
const user1 = {
    name: "Tatvam",
    cities: ["Jaipur","bhubaneswar","shimla"],
    placevisited(){
        const mapcities = this.cities.map((city) => {
            return this.name +' has lived in ' + city;
        });
        return mapcities;
    }
};
*/
// short method
const user1 = {
    name: "Tatvam",
    cities: ["Jaipur","bhubaneswar","shimla"],
    placevisited(){
        return this.cities.map((city) => this.name +' has lived in ' + city);
    }
};
console.log(user1.placevisited());

// challange

const multiplier= {
        numbers : [1,2,3,9,23],
        multipleby : 3,
        multiply(){
            return this.numbers.map((number) => number*this.multipleby);
        }
};

console.log(multiplier.multiply());