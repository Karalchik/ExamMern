import React, { Component } from 'react';
import axios from 'axios';

export default class LogInUser extends Component {
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
        </div>
    )
  }
}