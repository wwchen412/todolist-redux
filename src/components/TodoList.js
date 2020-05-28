import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

import styled from 'styled-components';

const TodoListGroup = styled.ul`
    margin:0;
    display:flex;
    flex-direction:column-reverse;

`

const TodoList = ({ todos, toggleTodo , editTodo, updatedTodo}) => (
    <div>
        <TodoListGroup>
            {todos.map((todo) => (
                <Todo 
                key={todo.id}
                {...todo} 
                onkeypress ={(text)=> {
                    const id = todo.id;
                    updatedTodo(({ id , text}))}
                }
                onblur={()=> {editTodo(todo.id)}}
                ondoubleclick={()=> editTodo(todo.id)}
                onclick={() => toggleTodo(todo.id)}/>
            ))}
        </TodoListGroup>
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func,
    editTodo: PropTypes.func,
    updatedTodo: PropTypes.func
}

export default TodoList