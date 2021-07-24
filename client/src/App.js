import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import ToDoList from './components/ToDoList';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
