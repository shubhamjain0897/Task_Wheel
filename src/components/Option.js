import React from 'react';

const Option =(props) =>(
      <div className ="option">
      <p className = "option__text">{props.count}. {props.optkey} </p>
        <button className ="button button--link" 
        onClick = {(e) =>{
          props.handleDeleteOption(props.optkey)
        }}> 
        Remove
         </button>
      </div>
    );

  export default Option;