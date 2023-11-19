import React, { Component } from 'react';
import axios from '../http-common';
import { Link } from 'react-router-dom';

export default class LoginUser extends Component {
    constructor(props){
      super(props);
      this.onChangeEmail=this.onChangeEmail.bind(this);
      this.onChangePassword=this.onChangePassword.bind(this);
      this.onSubmit=this.onSubmit.bind(this);

      this.state={
        email:'',
        password:'',
        text:'',
      };
    }
    onChangeEmail(e){
      console.log(e.target.value);
        this.setState({
            email:e.target.value
          });
    }
    onChangePassword(e){
      console.log(e.target.value);
      this.setState({
        password:e.target.value
      });
    }
    validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  
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

      if(this.validateEmail(this.state.email)){
        this.setState({
          text:""
        });
      axios.post('users/login',this.state).then(res=>{
        if(res.data.Login){
          this.setState({
            text:""
          });
          //
          axios.get('users/auth').then(res=>{console.log(res.data);});
        //
          //window.location.assign('/');
        }
        else{
          this.setState({
            text:"Your email or password is incorrect"
          });
        }
      })
      }else{
        this.setState({
          text:"Your email is incorrect"
        });
      }

      // axios.get('http://localhost:5000/users/').then(response=>{
      //   this.setState({users:response.data});
      // }).catch((error)=>{
      //   console.log(error);
      // })

      // if(this.validateEmail(this.state.email)){
      //   this.state.users.forEach((user)=>{
      //     if(user.email===newUser.email && user.password===newUser.password){
      //       window.location.assign('/');
      //     }else{
      //       this.state.text="Your email or password is incorrect";
      //     }
      //   })
      // }else{
      //   this.state.text="Your email is incorrect";
      // }

    }
  render() {
    return (
        <div>
        <h3>Sign-In</h3>
        
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
                <input type="checkbox" onClick={this.onCheckShow}/>Show Password
              </div>
              <input  type="password"
                required
                placeholder='Enter Password'
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                id="password"
              />
              <div className="form-group">
                <small>{this.state.text}</small>
              </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Sign-In" className="btn btn-primary" />
          </div>
          <Link to="/create_user" className="nav-link">Sign-Up</Link>
        </form>
      </div>
    )
  }
}