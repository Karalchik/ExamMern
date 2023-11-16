import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class LoginUser extends Component {
    constructor(props){
      super(props);
      this.onChangeEmail=this.onChangeEmail.bind(this);
      this.onChangePassword=this.onChangePassword.bind(this);
      this.onSubmit=this.onSubmit.bind(this);

      this.state={
        users:[],
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

      axios.defaults.withCredentials=true;
      const newUser={
        email:this.state.email,
        password:this.state.password,
      };

      axios.get('http://localhost:5000/users/').then(response=>{
        this.setState({users:response.data});
      }).catch((error)=>{
        console.log(error);
      })

      if(this.validateEmail(this.state.email)){
        this.state.users.forEach((user)=>{
          if(user.email===newUser.email && user.password===newUser.password){
            window.location.assign('/');
          }
        })
      }else{
        this.state.text="Your email or password is incorrect";
      }
    }
  render() {
    return (
        <div>
        <h3>Sign-In</h3>
        <div className="form-group">
          <p>{this.state.text}</p>
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

/*export default class LogInUser extends Component {
  constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={users:[]};
  }

  onSubmit(e){
    e.preventDefault();

    const newUser={
      username:this.state.username,
      password:this.state.password,
    };

    console.log(newUser);

    axios.get('http://localhost:5000/users/').then(response=>{
      this.setState({users:response.data});
    }).catch((error)=>{
      console.log(error);
    })

    this.state.users.forEach((user)=>{
        if(user.username==newUser.username && user.password==newUser.password){
            console.log("You are loged in");
            window.location.href="/";
        }
        else{
            document.getElementsByClassName("for-logIn").style.display = 'block';
        }
    })
  }

  onChangeUsername(e){
    this.setState({
      username:e.target.value
    });
  }
  onChangePassword(e){
    this.setState({
      password:e.target.value
    });
  }

  render() {
    return (
        <div>
        <h3>Log In Form</h3>
        <div className="form-group for-logIn">Your password or username is incorrect please retry</div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
              <label>Username: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
              <label>Password: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
          </div>
          <div className="form-group">
            <input type="submit" value="Log In" className="btn btn-primary" />
          </div>
        </form>
        </div>*/