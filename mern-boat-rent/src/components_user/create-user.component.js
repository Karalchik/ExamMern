import React, { Component } from 'react';
import axios from '../http-common';
import { Link } from 'react-router-dom';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default class CreateUser extends Component {
  constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onChangeContacts=this.onChangeContacts.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onAgree=this.onAgree.bind(this);

    this.state={
      username:'',
      contacts:'',
      email:'',
      history:new Array(),
      password:'',
      isadmin:false,
      text:'',
      isAgree:false,
    };
  }

  onAgree(e){
    this.setState({
      onAgree:e.target.value
    });
  }
  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  onChangeUsername(e){
    this.setState({
      username:e.target.value
    });
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
  onChangeContacts(e){
    this.setState({
      contacts:e.target.value
    });
  }

  onCheckShow(){
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
    }).then(res=>{
      window.location.assign('/');
    });
    }else{
    this.setState({
      text:"Your email is incorrect"
    });
  }
  }

  render() {
    return (
//       <div>
//   <h3>Sign-Up</h3>
//   <div className="form-group">
//           <p>{this.state.text}</p>
//         </div>
//   <form onSubmit={this.onSubmit}>
//     <div className="form-group"> 
//         <label>Username: </label>
//         <input  type="text"
//           required
//           placeholder='Enter Username'
//           className="form-control"
//           value={this.state.username}
//           onChange={this.onChangeUsername}
//         />
//         <label>Email: </label>
//         <input  type="text"
//           required
//           placeholder='Enter Email'
          // className="form-control"
          // value={this.state.email}
          // onChange={this.onChangeEmail}
//         />
//         <div>
//           <label>Password: </label>
//           <input type="checkbox" onClick={this.onCheckShow}/>Show Password
//         </div>
//         <input  type="password"
//           required
//           placeholder='Enter Password'
//           className="form-control"
//           value={this.state.password}
//           onChange={this.onChangePassword}
//           id="password"
//         />
//         <label>Contacts: </label>
//         <input  type="text"
//           required
//           placeholder='Enter Number of Phone'
//           className="form-control"
//           value={this.state.contacts}
//           onChange={this.onChangeContacts}
//         />
//     </div>
//     <div className="form-group">
//       <input type="submit" value="Sign-Up" className="btn btn-primary" />
//     </div>
//     <Link to="/login_user" className="nav-link">Sign-In</Link>
//   </form>
// </div>
      <div style={{textAlign:"center"}}>
    <Card color="transparent" shadow={false} >
      <Typography variant="h4" className="text-light-blue-500">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-blue-gray-400">
        Nice to meet you! Enter your details to register.
      </Typography>
      <center>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-3 text-light-blue-300">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="Username"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
          <Typography variant="h6" className="-mb-3 text-light-blue-300">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="email@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <Typography variant="h6" className="-mb-3 text-light-blue-300">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={this.state.password}
            onChange={this.onChangePassword}
            id="password"
          />
          <div className="">
                <small style={{color:"red"}}>{this.state.text}</small>
          </div>
        </div>
        <div class="inline-flex items-center">
          <Checkbox text-light-blue-300 color="blue"
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-small">
              Show Password
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          onClick={()=>this.onCheckShow()}
          /> 
          <Checkbox style={{marginLeft:"13px"}} color="blue" onChange={this.onAgree}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-small"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-light-blue-300"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          />
        </div>
        <Button className="mt-6" fullWidth onClick={()=>this.onSubmit()} variant="gradient" color="blue">
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="login_user" className="font-medium text-light-blue-300">
            Sign In
          </a>
        </Typography>
      </form></center>
    </Card>
    </div>
    )
  }
}