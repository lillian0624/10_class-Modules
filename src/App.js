import React, { Component } from 'react'
import './App.css'
import User from './Components/User'


export default class App extends Component {
  render() {
   
    return (
      <div className='app'>
        <User name="22" age={22} gender={'f'}/></div>
    );
  }
} 
