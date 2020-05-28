// action types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const EDIT_TODO = 'EDIT_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
// others

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
let nextTodoId = 0
// action creators

export const addTodo = (text) => {
    return {type:ADD_TODO, text, id: nextTodoId++}
}
export const toggleTodo = (id) => {
    return {type: TOGGLE_TODO, id}
}
export const editTodo = (id) => {
    return { type: EDIT_TODO , id}
}
export const updatedTodo = ({id,text}) =>{

    return {type: UPDATE_TODO, id,text:text }
}
export const setVisibilityFilter = (filter) => {
    return {type:SET_VISIBILITY_FILTER, filter}
}