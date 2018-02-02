class IndescisionApp extends React.Component{
  render(){
    return (
    <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
    </div>
    );
  }
}
class Header extends React.Component {
      render(){
        return (
          <div>
            <h1> Indescision App </h1>
            <h2> Put your life in the hand of the Computer </h2>
          </div> 
        );
      }
}

class Action extends React.Component {
    render(){
      return (
        <div>
          <button> What should i do ?</button>
        </div>
      );
    }
}
class Options  extends React.Component {
    render(){
      return ( 
      <div>
          Options component here
          <Option />
      </div>
    );
  }
}
class Option extends React.Component {
  render(){
    return ( 
    <div>
        Option component here
    </div>
  );
}
}
class AddOption  extends React.Component {
  render(){
    return ( 
    <div>
        AddOption component here
    </div>
    );
  }
}

ReactDOM.render(<IndescisionApp />, document.getElementById('app'));