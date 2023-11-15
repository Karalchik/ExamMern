import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    itemErr=document.getElementById('errors');
    isCorrect=true;
    constructor(props){
      super(props);
      this.onChangeEmail=this.onChangeEmail.bind(this);
      this.onChangePassword=this.onChangePassword.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
  
      this.state={
        email:'',
        password:'',
      };
    }
    onChangeEmail(e){
        this.setState({
            email:e.target.value
          });
    }
    onChangePassword(e){
      this.setState({
        password:e.target.value
      });
    }
  
    onCheckShow(e){
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
    onSubmit(e){
      e.preventDefault();
      foreach(item in this.state.email);{
        if(item=='@'){
          this.isCorrect=true;
        }else{
          this.itemErr.textContent="You didn't write an email";
          this.isCorrect=false;
        }
      }
      
      if(this.isCorrect==true){
        
      }
    }
  render() {
    return (
        <div>
        <h3>Sign-In</h3>
        <div>
          <p id="errors"></p>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
              <label>Email: </label>
              <input  type="text"
                required
                placeholder='Enter Email'
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <div>
                <label>Password: </label>
                <input type="checkbox" onclick={this.onCheckShow}>Show Password</input>
              </div>
              <input  type="password"
                required
                placeholder='Enter Password'
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                id="password"
              />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign-Up" className="btn btn-primary" />
          </div>
          <Link to="/create_user" className="nav-link">Sign-Up</Link>
        </form>
      </div>
    )
  }
}