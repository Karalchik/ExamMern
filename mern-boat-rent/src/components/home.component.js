import React, { Component } from 'react';
import axios from '../http-common';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={user:[]};
        this.somethingsToDo();
    }

    somethingsToDo(){
        console.log("running");
        axios.get('users/auth', {
            withCredentials: true,
        }).then(res=>{
        if(res.data.valid){
            this.setState({
                user:res.data.user
                });
        }
        else{
            //window.location.assign('login_user');
        }
    }).catch(err=>console.log(err));
    }
    componentWillUnmount(){
        console.log("unmount");
    }
    render() {
        return (
        <div>
            <h1>Home Page</h1>
            <h3>Welcom {this.state.user.username}</h3>
        </div>
        )
    }
    
}