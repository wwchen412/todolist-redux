import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import styled from 'styled-components'

const AddGroup = styled.div`
    input{
      border: 1px solid rgb(255, 100, 96);
      display:block;
      width: calc(100% - 2rem);
      box-sizing:border-box;
      color:rgb(255, 100, 96);
      margin: 0 1rem;
      padding: .5rem 10px;
      font-size: 1rem;
      border-radius:4px;
      &::placeholder{
        color:rgba(255, 100, 96,.6);
      }
    }
`


let AddTodo = ({ dispatch }) => {
  let input

  return (
    <AddGroup>
        <input 
          placeholder="＋ Add Todo"
          onKeyPress={e => {
            if (!input.value.trim()) {
              return
            }else if (e.key === 'Enter'){
              dispatch(addTodo(input.value))
              input.value = ''
            }
            
          }}
          ref={node => {
          input = node
          }
          
        } />
    </AddGroup>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo