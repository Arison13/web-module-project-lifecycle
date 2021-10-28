import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';


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

  render() {
    // console.log(this.state.followers)
    return(<div>
      <h1>Github Card</h1>

      <form>
        <input type="search" placeholder="Github Handle" /> 
        <button>Search</button>
      </form>

        <User info={this.state.info} />
        <FollowerList followers={this.state.followers}/>
        
    </div>);
  }
}

export default App;
