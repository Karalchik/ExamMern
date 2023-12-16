import { Button, Card, Typography, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";
import React, { Component } from 'react';
import axios from '../http-common';
export default class AdminOneBoat extends Component {

    constructor(props) {
        super(props);
        this.onSubmit1 = this.onSubmit1.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.state = { boat: [] };
    }
    componentDidMount() {
    }
    onSubmit1(_id) {
        window.location = "/edit_boat/" + _id;
    }
    onSubmit2(_id) {
        axios.delete('http://localhost:5000/api/boats/' + _id)
        .then(res => console.log(res.data));
        window.location = "/admin_rent_boat/";
    }
    render() {
        return (
            <Card className="p-2 flex flex-col justify-center md:items-center cardSmall float-left">
                <CardHeader floated={false}>
                    <img src={this.props.image} style={{ height: "252px", width: "252px" }} alt={this.props.model}/>
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h6" color="indigo" className="mb-2">
                        {this.props.model} with {this.props.engine}
                    </Typography>
                    <Typography color="blue" className="font-medium" textGradient>
                        Year:{this.props.year}&nbsp;Price:{this.props.price}$
                    </Typography>
                    <Typography color="blue" className="font-medium" textGradient>
                        ID:{this.props.ID}
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Button color="blue" onClick={()=>this.onSubmit1(this.props.ID)}>Edit</Button>
                    <Button color="red" onClick={()=>this.onSubmit2(this.props.ID)}>Delete</Button>
                </CardFooter>

            </Card>
        );
    }
}