import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onChangeContacts=this.onChangeContacts.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
      username:'',
      contacts:'',
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

  onSubmit(e){
    e.preventDefault();

    const newUser={
      username:this.state.username,
      contacts:this.state.contacts,
      history:this.state.history,
      password:this.state.password,
      isadmin:this.state.isadmin,
    };

    console.log(newUser);

    axios.post('http://localhost:5000/users/add', newUser).then(res=>console.log(res.data));

    this.setState({
        username:'',
        contacts:'',
        history:new Array(),
        password:'',
        isadmin:false,
    })
  }

  render() {
    return (
      <div>
  <h3>Registretion Form</h3>
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
        <label>Contacts: </label>
        <input  type="text"
          required
          className="form-control"
          value={this.state.contacts}
          onChange={this.onChangeContacts}
        />
    </div>
    <div className="form-group">
      <input type="submit" value="Register" className="btn btn-primary" />
    </div>
  </form>
</div>
    )
  }
}