import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import ToDoList from './components/ToDoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ToDoList />
    </div>
  );
}

export default App;
