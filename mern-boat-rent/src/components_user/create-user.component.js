import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  itemErr=document.getElementById('errors');
  constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onChangeContacts=this.onChangeContacts.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
      username:'',
      contacts:'',
      email:'',
      history:new Array(),
      password:'',
      isadmin:false,
    };
  }

  onChangeUsername(e){
    this.setState({
      username:e.target.value
    });
  }
  onChangeEmail(e){
    foreach(item in this.state.email);{
      if(item=='@'){
        this.setState({
          email:e.target.value
        });
      }else{
        this.itemErr.textContent="You didn't write an email";
      }
    }
  }
  onChangePassword(e){
    this.setState({
      password:e.target.value
    });
  }
  onChangeContacts(e){
    this.setState({
      contacts:e.target.value
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

    const newUser={
      username:this.state.username,
      contacts:this.state.contacts,
      email:this.state.email,
      history:this.state.history,
      password:this.state.password,
      isadmin:this.state.isadmin,
    };

    axios.post('http://localhost:5000/users/add', newUser).then(res=>console.log(res.data));

    this.setState({
        username:'',
        contacts:'',
        email:'',
        history:new Array(),
        password:'',
        isadmin:false,
    }).then(res=>{useNavigate('/')});
  }

  render() {
    return (
      <div>
  <h3>Sign-Up</h3>
  <div>
    <p id="errors"></p>
  </div>
  <form onSubmit={this.onSubmit}>
    <div className="form-group"> 
        <label>Username: </label>
        <input  type="text"
          required
          placeholder='Enter Username'
          className="form-control"
          value={this.state.username}
          onChange={this.onChangeUsername}
        />
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
        <label>Contacts: </label>
        <input  type="text"
          required
          placeholder='Enter Number of Phone'
          className="form-control"
          value={this.state.contacts}
          onChange={this.onChangeContacts}
        />
    </div>
    <div className="form-group">
      <input type="submit" value="Sign-Up" className="btn btn-primary" />
    </div>
    <Link to="/logIn_user" className="nav-link">Sign-In</Link>
  </form>
</div>
    )
  }
}