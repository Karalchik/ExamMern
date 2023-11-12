import React, { Component } from 'react';
import axios from 'axios';

export default class EditUser extends Component {
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

    const user={
      username:this.state.username,
      contacts:this.state.contacts,
      history:this.state.history,
      password:this.state.password,
      isadmin:this.state.isadmin,
    };

    console.log(user);

    axios.post('http://localhost:5000/users/update/'+this.props.match.params.id, user)
      .then(res => console.log(res.data));
    } 

    render() {
    return (
    <div>
        <h3>Edit User</h3>
    </div>
    )
    }
}