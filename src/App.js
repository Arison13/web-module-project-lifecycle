import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
import "./App.css"


class App extends React.Component {
  state = {
    currentUser: "Arison13",
    followers:[],
    info:{}
  }

   componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then (res => {
      this.setState({info:res.data})
    }).catch(err => {
      console.error(err)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.info !== prevState.info) {
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(res=> {
      this.setState({
        ...this.state,
        followers: res.data
      })
    }).catch(err => console.log(err))
    }

  }
  
  handleChange = (e) => {
    this.setState({
      ...this.state,
      currentUser: e.target.value
    })
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then (res => {
      this.setState({
        ...this.state,
        info:res.data
      });
    })
  }
  render() {
    return(<div className="app">
      <h1>Github Card</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="search" placeholder="Github Username" onChange={this.handleChange}/> 
        <button>Search</button>
      </form>
        <div className="loggin-user">
        <User info={this.state.info} />
        </div>
        <h4> Followers: </h4>
        <FollowerList followers={this.state.followers}/>
    </div>);
  } 
}

export default App;
