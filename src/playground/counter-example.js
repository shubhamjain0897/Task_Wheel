 // cant use class use className
 let count=0;
 const addOne=() =>{
   count ++;
   renderCounterapp();
 };
 const minusOne=() =>{
   count --;
   renderCounterapp();
   console.log("minusOne");
 };
 const reset=() =>{
   count=0;
   renderCounterapp();
   console.log("reset");
 };
   
const appRoot=document.getElementById("app");



const renderCounterapp = () => {
 const template2= (
   <div>
     <h1>Count : {count} </h1>
     <button onClick={addOne}>+1</button>
     <button onClick={minusOne}>-1</button>
     <button onClick={reset}>reset</button>
   </div>
 );


};

renderCounterapp();