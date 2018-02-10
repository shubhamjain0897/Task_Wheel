import React from 'react';

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

  export default Option;