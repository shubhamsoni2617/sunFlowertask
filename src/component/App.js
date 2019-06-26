import React, { Component} from 'react';
import Login from './Login'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import history from '../history';
import User from './User'

import HomePage from './HomePage';
import AboutUs from './AboutUs';
import { searchUser } from '../store/actions/action';


class App extends Component{

state={
  input : ''
}
  onSubmit=()=>{

    this.props.searchUser(this.state.input)

  }

  render(){

    console.log(this.state.input)
    let secondApp=null

      let allNames=[]

      let tenNames=[];

    if(this.props.userInfo.totalCount){
        this.props.userInfo.users.map(name=>{
              allNames.push(name.login)
        })

        if(allNames.length>10){
          for (let i=0; i<=10;i++){
            tenNames.push(allNames[i])
          }
        }
        
        let listOfTenNames=tenNames.map(name=>
             <li>{name}</li>
          )
      console.log(allNames)
          secondApp=(
            <div>
              <h4>Total users : {this.props.userInfo.totalCount}</h4>
              {listOfTenNames}
            </div>
          )
    }

    return (<div>
       <Router history={history}>
      <div>
        
        <Route to='/login/user' exact component={Login} />
        <Route path='/homepage' exact component={HomePage} />
        <Route path='/about' exact component={AboutUs} />
        <Route path='/user' exact render={()=><User user={this.props.userInfo}/>} />
       
      </div>
      </Router>
      <input value={this.state.input} onChange={(e)=>{ this.setState({input :e.target.value})}} />
        <button onClick={this.onSubmit}>Second App</button>
          {secondApp}
    </div>
     
    )
  }
}


const mapStateToProps=(state)=>{
  console.log(state.auth)
  return {
    userInfo : state.auth
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    searchUser : (queryString)=>dispatch(searchUser(queryString))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
