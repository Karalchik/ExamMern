import React, { useEffect, Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.useEffect=this.useEffect.bind(this);
    }

    useEffect(){
        axios.get('/').then(res=>{
            if(res.data.valid){
                
            }
        }).catch(err=>console.log(err));
    }

    render() {
        return (
        <div>
            <h1>Home Page</h1>
        </div>
        )
    }
}