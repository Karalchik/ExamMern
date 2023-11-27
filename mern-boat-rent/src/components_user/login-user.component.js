import React, { Component } from 'react';
import axios from '../http-common';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

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
          window.location.assign('/');
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

    }
  render() {
    return (
      //   <div>
      //   <h3>Sign-In</h3>
      //   <form onSubmit={this.onSubmit}>
      //     <div className=""> 
      //         <label>Email: </label>
      //         <input  type="text"
      //           required
      //           placeholder='Enter Email'
      //           className=""
      //           value={this.state.email}
      //           onChange={this.onChangeEmail}
      //         />
      //         <div>
      //           <label>Password: </label>
      //           <input type="checkbox" onClick={this.onCheckShow}/>Show Password
      //         </div>
      //         <input  type="password"
      //           required
      //           placeholder='Enter Password'
      //           className=""
      //           value={this.state.password}
      //           onChange={this.onChangePassword}
      //           id="password"
      //         />
              // <div className="">
              //   <small>{this.state.text}</small>
              // </div>
      //     </div>
      //     <div className="">
      //     <Button color="blue" variant="gradient" >
      //       <input type="submit" value="Sign-In" className="" />
      //     </Button>
          
      //     <Button variant="gradient" color="blue" onClick={()=>{window.location.assign('create_user')}}>
      //       Sign-Up
      //     </Button>
      //     </div>
      //   </form>
      // </div>
      <div style={{textAlign:"center"}}>
    <Card color="transparent" shadow={false} >
      <Typography variant="h3" className="text-light-blue-500">
        Sign In
      </Typography>
      <Typography className="mt-1 font-normal text-blue-gray-400">
        Hello again! Enter your details to login.
      </Typography>
      <center>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
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
        <div>
          <Checkbox color="blue"
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
        </div>
        <Button className="mt-6" fullWidth  onClick={this.onSubmit} variant="gradient" color="blue">
          sign in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <a href="create_user" className="font-medium text-light-blue-300">
            Sign Up
          </a>
        </Typography>
      </form></center>
    </Card>
    </div>
    )
  }
}