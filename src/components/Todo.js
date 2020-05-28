import React,{ useState } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import background from '../images/baseline_done_white_18dp.png';

const StyleLi = styled.li`
    border-bottom: 1px solid #d8d8d8;
    padding: 1rem;
    text-align: left;
input[type="checkbox"]{
    display:none;  
    padding: 0px;
    & + label{
        display:inline-block;
        width: 1rem;
        height: 1rem;
        border: 1px solid #ccc;
        vertical-align: middle;
        cursor: pointer;
        border-radius:50%;
        margin-right: 1rem;
    }
    &:checked + label{
        background-image: url(${background});
        background-color: rgb(255, 100, 96);
        background-size: cover;
    }
}

input[type="text"]{
    border: 1px solid #ccc;

}

`
// {onclick, text, completed ,editing, ondoubleclick,onkeypress,onblur}

const Todo = (props) => {
    
    const [inputValue, setInputValue] = useState(props.text);
    let input
    return(
    
    <StyleLi
        style={{
            textDecoration: props.completed ?'line-through' : 'none',
            order: props.completed ? '0': '1'
        }}
        onDoubleClick={props.ondoubleclick}
    >
    
    <input type="checkbox"
            checked={props.completed}
            onClick={props.onclick}
            id={'check' + props.id}></input>
    <label for={'check' + props.id}></label>
            {props.editing ? 
                <input type="text" 
                    autoFocus
                    ref={node => {input = node}}
                    value={inputValue} 
                    onBlur={props.onblur}
                    onChange={()=>{setInputValue(input.value)}}
                    onKeyPress={ e =>{
                        if (!input.value.trim()) {
                            return
                          }else if (e.key === 'Enter'){
                            props.onkeypress(inputValue)
                          }}
                    } 
                ></input> : props.text}
    </StyleLi>
)}

Todo.propTypes = {
    onClick: PropTypes.func,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo