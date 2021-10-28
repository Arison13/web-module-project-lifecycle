import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    followers:[],
    info:{}
  }

   componentDidMount() {
    axios.get(' https://api.github.com/users/Arison13')
    .then (res => {
      this.setState({info:res.data})
      console.log(res.data)
    }).catch(err => {
      console.error(err)
    })
  }

  // componentDidUpdate(){
  //   axios.get("https://api.github.com/users/Arison13/followers")
  //   .then(res=> {
  //     console.log("component update data:", res.data)
  //     // this.setState({
  //     //   followers: res.data
  //     // })
  //   }).catch(err => console.err(err))
  // }
  
  render() {
    return(<div>
      <h1>Github Card</h1>
      <div className="searchBar">
        <input type="search" placeholder="Github Handle" /> 
        <button>Search</button>
        
        <div className="user-info">
          <h4> {this.state.info.login}</h4>
          <img width="100"src={this.state.info.avatar_url} alt={this.state.info.avatar_url}/>
          <p>Total Repos: {this.state.info.public_repos}</p>
          <p>Total Followers: {this.state.info.followers}</p>
        </div>

        <div className="Followers"> 


        </div>
      </div>
    </div>);
  }
}

export default App;
