import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={username:''};
    }

    somethingsToDo(){
        axios.get('users/auth').then(res=>{
            console.log(res.data.username);
        if(res.data.valid){
            console.log(res.data.username);
            this.setState({
                username:res.data.username
                });
        }
        else{
            //window.location.assign('login_user');
        }
    }).catch(err=>console.log(err));
    }
    render() {
        this.somethingsToDo();
        return (
        <div>
            <h1>Home Page</h1>
            <h3>Welcom {this.state.username}</h3>
        </div>
        )
    }
}

/*export default function Home() {
    const [name,setName]=this.useState('') 

    this.useEffect(()=>{
        axios.get('/').then(res=>{
            if(res.data.valid){
                setName(res.data.username);
            }
            else{
                Navigate({to:'/login_user'});
            }
        }).catch(err=>console.log(err));
    })
    return (
    <div>
        <h1>Home Page</h1>
        <h3>Welcom{this.username}</h3>
    </div>
    )
}*/