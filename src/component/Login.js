import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';
import { login } from  '../store/actions/action'


class LoginForm extends Component{


    renderField=({input, label, type})=>{
        return (
            <div >
                <label>{label}</label>
                <input {...input} type={type}/>
            </div>
        )
        
    }

    onSubmit=(formValues)=>{
        console.log(formValues);

        this.props.login(formValues)
    }

    render(){
       
     
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="username" type="text" component={this.renderField} label="Enter Your Username"/>
                <Field name="password" type="password" component={this.renderField} label="Enter Your Password"/>
                <button className="ui button primary" >Submit</button>
            </form>
        )
    }
}  

const loginForm=reduxForm({form:'loginForm'})(LoginForm)

const mapDispatchToProps=(dispatch)=>{
    return {
        login : (loginData)=>dispatch(login(loginData))
    }
}

export default connect(null, mapDispatchToProps)(loginForm)