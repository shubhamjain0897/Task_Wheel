// Grab the add function from thse add .js file in the utilis folder
// add(2,14)
// Grab react from the npm module(third party dependencies)

class IndescisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handlepick = this.handlepick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.handleDeleteOption=this.handleDeleteOption.bind(this);
    this.state = {
      options : []
    }
  }

  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options)
      { this.setState(() =>({options})); }
    }
    catch (e){

    }
   
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length ){
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options',json);
    }
  }
  componentWillUnmount(){
    console.log("componentWillMount");
  }
    handleDeleteOptions(){
      this.setState(()=>({ 
          options : []
      }));
    }
    handleDeleteOption(OptionToRemove){
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => OptionToRemove != option)
            }));
    };
    handlepick(){
          const Randomnum=Math.floor(Math.random()*this.state.options.length);
          const option = this.state.options[Randomnum];
          alert(option);
    }
    handleAddOption(option){
      if(!option){
        return 'Enter valid value to add item'
      }
      else if(this.state.options.indexOf(option) > -1){
        return 'This option already exist'
      }

      this.setState((prevState)=>({options : prevState.options.concat(option)}));
    }

  render(){
    const subtitle = "Put your life in the hand of the Computer"
    return (
    <div>
      <Header subtitle = {subtitle}/>
      <Action 
      hasOptions = {this.state.options.length > 0 }
      handlepick = {this.handlepick}
      />
      <Options 
      options = {this.state.options}
      handleDeleteOptions = {this.handleDeleteOptions} 
      handleDeleteOption = {this.handleDeleteOption}
      />
      <AddOption 
      handleAddOption ={this.handleAddOption}  
      />
    </div>
    );
  }
}

const Header = (props) =>{
  return(
    <div>
      <h1> {props.title} </h1>
      {props.subtitle && <h2> {props.subtitle} </h2>}
    </div> 
  );
};

Header.defaultProps = {
        title : 'Indescision App'
};

const Action = (props) => {
  return (
    <div>
      <button 
      onClick = {props.handlepick}
      disabled = {!props.hasOptions}
      > 
      What should i do ?
      </button>
    </div>
  );
};


// class Action extends React.Component {
//     render(){
//       return (
//         <div>
//           <button 
//           onClick = {this.props.handlepick}
//           disabled = {!this.props.hasOptions}
//           > 
//           What should i do ?
//           </button>
//         </div>
//       );
//     }
// }
const Options = (props) =>{
      return ( 
       <div>
          <button onClick = {props.handleDeleteOptions} >Remove All </button> 
          {props.options.length === 0 && <p> Please add an option to get started </p>}
          {props.options.map((option) => (
            <Option key = {option}
             optkey = {option}
             handleDeleteOption ={props.handleDeleteOption}
              />
              ))
            }
      </div>
    );
}
const Option = (props) =>{
  return(
    <div>
      {props.optkey}
      <button onClick = {(e) =>{
        props.handleDeleteOption(props.optkey)
      }}> 
      Remove
       </button>
    </div>
  );
};

class AddOption  extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      state : undefined
    }
  }

  handleAddOption(e){

    e.preventDefault();

    const option = e.target.elements.option.value.trim();

     const error = this.props.handleAddOption(option);

    this.setState(()=>({error : error}));

    if(!error){
      e.target.elements.option.value = "";
    }

  }
  render(){
    return ( 
    <div>
    {this.state.error && <p>{this.state.error}</p>}
    <form onSubmit = {this.handleAddOption}>  
        <input type = "text" name = "option" />
        <button>Add Option </button>
    </form>
    </div>
    );
  }
}


// const User = (props) => {
//     return(
//       <div>
//         <p> Name: {props.Name} </p>
//         <p> Age: </p>
//       </div>
//     );
// };
ReactDOM.render(< IndescisionApp />, document.getElementById('app'));