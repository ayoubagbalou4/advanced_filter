import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input
          type="radio"
          onChange={props.function}
          value={props.value}
          name={props.name} 
          checked={props.checked}
        />
        <label>{props.label}</label>
    </div>
  )
}

export default Input