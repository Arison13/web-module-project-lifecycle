import React from 'react';


class Follower extends React.Component {

    render () {
        const {follower} = this.props;
        return(
            <div key={follower.id}>
                <img width="100"src={follower.avatar_url} alt={follower.avatar_url}/>
                <h4> {follower.login}</h4>
            </div>
        )
    }
}

export default Follower;