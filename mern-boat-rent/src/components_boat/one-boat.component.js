import { Button, Card, Typography, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";
import React, { Component } from 'react';
export default class OneBoat extends Component {

    constructor(props) {
        super(props);
        this.state = { boat: [] };
    }
    componentDidMount() {
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
                        Width:{this.props.width}m.&nbsp;Length:{this.props.length}m.
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Button color="blue" onClick={()=>window.location="/buy_boat/"+this.props.ID}>More Information</Button>
                </CardFooter>

            </Card>
        );
    }
}