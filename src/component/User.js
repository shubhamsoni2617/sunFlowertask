import React from 'react';

const User=(props)=>{

    if(!props.user){
        return null
    }
    if(props.user){
  console.log(props.user.userInfo)

let { login, id, score } = props.user.userInfo;
       
            return (
                <div>
                    <h4>Login</h4>
                    <li>{login}</li>
                    <h4>ID</h4>
                    <li>{id}</li>
                    <h4>Score</h4>
                    <li>{score}</li>
                </div>
            )
    

        
    }
}

export default User;