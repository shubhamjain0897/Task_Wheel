import React from 'react';
import Option from './Option';
import Action from './Action';
import Header from './Header';
import Options from './Options'; 
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndescisionApp extends React.Component{
    state = { options : [] ,
            selectedOption: undefined }
  
    handleDeleteOptions = () =>{
        this.setState(()=>({ 
            options : []
        }));
      }
      handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
      }
      handleDeleteOption = (OptionToRemove) =>{
          this.setState((prevState) => ({
              options : prevState.options.filter((option) => OptionToRemove != option)
              }));
      };
      handlepick = () =>{
            const Randomnum=Math.floor(Math.random()*this.state.options.length);
            const option = this.state.options[Randomnum];
            this.setState(() =>({
                selectedOption : option
            }));
        }
      handleAddOption  = (option) =>{
        if(!option){
          return 'Enter valid value to add item'
        }
        else if(this.state.options.indexOf(option) > -1){
          return 'This option already exist'
        }
  
        this.setState((prevState)=>({options : prevState.options.concat(option)}));
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
      
  
    render(){
      const subtitle = "Put your life in the hand of the Computer"
      return (
      <div>
        <Header subtitle = {subtitle}/>
        <div className ="container">
          <Action 
        hasOptions = {this.state.options.length > 0 }
        handlepick = {this.handlepick}
         />
         <div className ="widget">
          <Options 
        options = {this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions} 
        handleDeleteOption = {this.handleDeleteOption}
         />
          <AddOption 
        handleAddOption ={this.handleAddOption}  
        />
        </div>
        </div>
        <OptionModal 
        selectedOption = {this.state.selectedOption}
        handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
      );
    }
  }
  