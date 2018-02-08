class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtOne = this.handleSubtOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
        count : 0
    };
  }
  componentDidMount(){
    const upcount = localStorage.getItem('count');
    const count = parseInt(upcount,10);
    if(!isNaN(count)){
      this.setState = (() => ({count}));
    }
}
componentDidUpdate(prevProps,prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count',this.state.count);
    }
}
  handleAddOne(){
    this.setState((prevState)=>{
      return{
        count : prevState.count + 1
      };
    });
    console.log("handleAddOne");
  }
  handleSubtOne(){
    this.setState((prevState)=>{
      return{
        count : prevState.count - 1
      };
    });
    console.log("handleSubtOne");
  }
  handleReset(){
    this.setState(()=>{
      return{
        count : 0
      };
    });
    console.log("handleReset");
  }
  render(){
    return (
        <div>
          <h1> Count : {this.state.count}</h1>
          <button onClick = {this.handleAddOne}>+1</button>
          <button onClick = {this.handleSubtOne}>-1</button>
          <button onClick = {this.handleReset}>reset</button>
        </div>
    );
  }
}

ReactDOM.render(<Counter />,document.getElementById("app"));


//  // cant use class use className
//  let count=0;
//  const addOne=() =>{
//    count ++;
//    renderCounterapp();
//  };
//  const minusOne=() =>{
//    count --;
//    renderCounterapp();
//    console.log("minusOne");
//  };
//  const reset=() =>{
//    count=0;
//    renderCounterapp();
//    console.log("reset");
//  };
   
// const appRoot=document.getElementById("app");



// const renderCounterapp = () => {
//  const template2= (
//    <div>
//      <h1>Count : {count} </h1>
//      <button onClick={addOne}>+1</button>
//      <button onClick={minusOne}>-1</button>
//      <button onClick={reset}>reset</button>
//    </div>
//  );


// };

// renderCounterapp();