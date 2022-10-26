import CardList from '../../components/card-list/card-list.component.jsx';
import Search from '../../components/search/search.component.jsx';
import './App.css'
import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      users: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result=>result.json())
    .then(monsters => this.setState(
         {
           users:monsters
          }
        )
      )
  }
  render(){
    return (
        <div className="App">
            <h1>Monsters Rollodex</h1>
             <Search />
             <CardList monsters={this.state.users}/>
        </div>
    )
  }
}

 export default App





















