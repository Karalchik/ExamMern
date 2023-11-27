import React, { Component } from 'react';
import axios from '../http-common';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={user:[]};
        this.onLogout=this.onLogout.bind(this);
        this.onChange=this.onChange.bind(this);
        this.somethingsToDo();
    }

    onLogout(){
        axios.post('users/logout', {
            withCredentials: true,
        })
    }
    onChange(){
        window.location.assign('/');
    }

    somethingsToDo(){
        axios.get('users/auth', {
            withCredentials: true,
        }).then(res=>{
        if(res.data.valid){
            this.state.user=res.data.user;
            console.log(this.state.user.username);
        }
        else{
            window.location.assign('login_user');
        }
    }).catch(err=>console.log(err));
    }
    render() {
        return (
            <div>
            <section class="vh-100" style={{backgroundColor: "#f4f5f7"}}>
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-6 mb-4 mb-lg-0">
                  <div class="card mb-3" style={{borderRadius: "5px"}}>
                    <div class="row g-0">
                      <div class="col-md-4 text-center text-white"
                        style={{borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px",backgroundColor:"#ad8b47"}}>
                        <img src=""
                          alt="Avatar" class="img-fluid my-5" style={{width: "80px"}} /> 
                        <h5>{this.state.user.username}</h5>
                        <p>{this.state.user.email}</p>
                        <i class="far fa-edit mb-5"></i>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-4">
                          <h6>Information</h6>
                          <hr class="mt-0 mb-4"/>
                          <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <h6>Username</h6>
                              <p class="text-muted">{this.state.user.username}</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Email</h6>
                              <p class="text-muted">{this.state.user.email}</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Password</h6>
                              <p class="text-muted">{this.state.user.password}</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Contacts</h6>
                              <p class="text-muted">{this.state.user.contacts}</p>
                            </div>
                          </div>
                          <h6>History</h6>
                          <hr class="mt-0 mb-4"/>
                          <div class="row pt-1">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
        )
    }
    
}