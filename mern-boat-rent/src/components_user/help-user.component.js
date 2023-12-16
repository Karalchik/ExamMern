import React, { Component } from 'react';
import axios from '../http-common';
import "../components/home.component.css";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Alert,
} from "@material-tailwind/react";
export default class Help extends Component {
    constructor(props) {
        super(props);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            message: '',
            answer:'',
        };
    }
    componentDidMount() {
        var x = document.getElementById("answer");
        x.style.visibility="hidden";
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }

    onSubmit(e) {
        var x = document.getElementById("answer");
        e.preventDefault();
        console.log(this.state.message);
        axios.post('chat',{"message":this.state.message}).then((res)=>{
            this.setState({
                answer:res.data
            });
            x.style.visibility="visible";
        }).catch((err)=>{
            console.error(err);
        })
    }

    render() {
        return (
            <div class="container mx-auto px-4 rounded-3xl bSty heightTo backimgChat">
                <section class="text-gray-700">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="text-center mb-20">
                            <Typography variant='h1' color='blue' class="sm:text-3xl text-2xl font-medium text-center title-font mb-4">
                                Chat with our Chat Bot who can answer you.
                            </Typography>
                            <Typography variant='h5' color='teal' class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                The most common questions about how our business works and what
                                can do for you.
                            </Typography>
                        </div>
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <Input
                                size="lg"
                                placeholder="Hello Bot!"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={this.state.message}
                                onChange={this.onChangeMessage}
                            />
                            <Typography id="answer" variant='small' style={{width:"100%"}} className="font-serif my-2 bg-blue-gray-50 text-blue-gray-500 font-semibold rounded-md py-2 px-4">
                                        {this.state.answer}
                                    </Typography>
                            <Button className="mt-6" style={{width:"25%"}} onClick={this.onSubmit} variant="gradient" color="blue">
                                Make a question
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}