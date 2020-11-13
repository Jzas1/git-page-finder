import React, { Fragment, Component } from 'react'
import './App.css';
import  NavBar from './components/layout/NavBar'
import UserItem from './components/users/UserItem'

class App extends Component {
  render(){
    const name = 'John Doe';
    const loading = true;

    return (
      <div className='App'>
        <NavBar title="GitHub Finder" icon='fab fa-github'/>
        <UserItem />
      </div>
    )
  }
}

export default App;
