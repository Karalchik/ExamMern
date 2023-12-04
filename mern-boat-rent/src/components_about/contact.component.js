import React, { Component } from 'react';
import "./aboutus.component.css"
import "../components/home.component.css"
import Icon from "../components/icon.component";
import { Button, Input, Typography, Alert, Textarea } from '@material-tailwind/react';
export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            message: '',
            email: '',
            text: '',
        };
    }
    onChangeEmail(e) {
        console.log(e.target.value);
        this.setState({
            email: e.target.value
        });
    }
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }
    validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    onSubmit(e) {
        e.preventDefault();
        if (this.validateEmail(this.state.email)) {
            this.setState({
                text: ""
            });
        } else {
            this.setState({
                text: "Your email is incorrect"
            });
        }
    }

    render() {
        return (
            <div class="container mx-auto px-4 rounded-3xl bSty heightTo centered backimgContact">
                <div class="row">
                    <div class="column">
                        <iframe class="maps left" src="https://maps.google.com/maps?q=szeczin&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                    </div>
                    <div class="column">
                        <div class="maps right centered blure" style={{minWidth:"80%"}}>
                            <Typography variant='h2' color="blue">Contact us</Typography>
                            <Typography class="mb-5" color='white'>Send us some new ideas or your own things.</Typography>
                            <div class="centered" style={{minWidth:"80%"}}>
                            <Typography variant="h4" className="m-3 text-light-blue-300">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="email@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                            {this.state.text != "" ? <Alert className='text-sm h-7.5 p-1 bg-orange-700 text-deep-orange-50' variants="gradient" icon={<Icon />}>{this.state.text}</Alert> : null}
                            <Typography variant="h4" className="m-3 text-light-blue-300">
                                Your Message
                            </Typography>
                            <Textarea
                                size="lg"
                                placeholder="Hello! I want to speak with you."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={this.state.message}
                                onChange={this.onChangeMessage}
                            />
                            <Button className="mt-6" fullWidth onClick={this.onSubmit} variant="gradient" color="blue">
                                Send
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}