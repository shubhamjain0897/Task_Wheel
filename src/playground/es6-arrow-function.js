//ES5 Function

const square=function(x){
    return x*x;
};

console.log(square(8));

//ES6 Function

const square_arrow = (x) => {
        return x*x;
};

console.log(square_arrow(9));

// simple exp using arrowFunction

const sqArrow= (x) => x*x;
console.log(sqArrow(4));

// Challenge

const firstName= (name) => name.split(' ')[0];

console.log(firstName("Tatvam Dadheech"));