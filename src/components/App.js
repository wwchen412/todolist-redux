import React from 'react';
import './App.css';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';

const App = () => (
  <div className="wrap">
    <div className="container card">
      <h2>TODO LIST</h2>
      <Footer />
      <AddTodo />
      <VisibleTodoList />
      
      
    </div>
  </div>
  
)

export default App;
