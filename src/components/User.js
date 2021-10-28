import React from "react";


class User extends React.Component {
    
    render() {
        const {info} = this.props;
        return(
        <div className="user-info">
          <img width="100"src={info.avatar_url} alt={info.avatar_url}/>
          <h4> {info.login}</h4>
          <p>Total Repos: {info.public_repos}</p>
          <p>Total Followers: {info.followers}</p>
        </div>
        )
    }
}

export default User;