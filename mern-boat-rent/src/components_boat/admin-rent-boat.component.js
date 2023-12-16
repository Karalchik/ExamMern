import React, { Component } from 'react';
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import AdminOneBoat from "../components_boat/admin-one-boat.component";
import axios from '../http-common';
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Input,
} from "@material-tailwind/react";
import "../components/home.component.css"
export default class RentBoat extends Component {
    constructor(props) {
        super(props);
        this.onChangeMaxPrice = this.onChangeMaxPrice.bind(this);
        this.onChangeMaxYear = this.onChangeMaxYear.bind(this);
        this.onChangeMaxLength = this.onChangeMaxLength.bind(this);
        this.onChangeMaxWidth = this.onChangeMaxWidth.bind(this);
        this.onChangeMaxCabins = this.onChangeMaxCabins.bind(this);
        this.onChangeMaxPersons = this.onChangeMaxPersons.bind(this);
        this.onChangeMaxBeds = this.onChangeMaxBeds.bind(this);
        this.onChangeMaxWC = this.onChangeMaxWC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            boats: [],
            maxPrice: 15000,
            useFilters: false,
            maxYear: 2024,
            maxLength: 200,
            maxWidth: 200,
            maxCabins: 50,
            maxPersons: 100,
            maxBeds: 50,
            maxWC: 50,
        };
    }

    onChangeMaxPrice(e) {
        this.setState({
            maxPrice: e.target.value
        });
    }
    onChangeMaxYear(e) {
        this.setState({
            maxYear: e.target.value
        });
    }
    onChangeMaxLength(e) {
        this.setState({
            maxLength: e.target.value
        });
    }
    onChangeMaxWidth(e) {
        this.setState({
            maxWidth: e.target.value
        });
    }
    onChangeMaxCabins(e) {
        this.setState({
            maxCabins: e.target.value
        });
    }
    onChangeMaxPersons(e) {
        this.setState({
            maxPersons: e.target.value
        });
    }
    onChangeMaxBeds(e) {
        this.setState({
            maxBeds: e.target.value
        });
    }
    onChangeMaxWC(e) {
        this.setState({
            maxWC: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ useFilters: !this.state.useFilters })
    }

    componentDidMount() {
        
        axios.get("users/auth", {
            withCredentials: true,
          }).then(res=>{
          if(res.data.valid&&res.data.user.isadmin===true){
              console.log(res.data.user)
          }else{
              window.location="/hello"
          }}).catch(err=>console.log(err));
        axios.get('boats/')
            .then(response => {
                this.setState({ boats: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
        
    }

    render() {
        return (
            <div class="container mx-auto p-5 rounded-3xl bSty heightTo backimgRenting centered">
                <Card className="h-full w-full rounded-3xl">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                        <div className="mb-4 flex flex-col justify-center gap-8 md:flex-row md:items-center">
                            <div>
                                <Typography className='centered' variant="h3" color="blue">
                                    Full Boats
                                </Typography>
                                <Typography className='centered' variant="small" color="pink">
                                    Please select max properties.
                                </Typography>
                                <div className="flex w-full shrink-0 gap-2 md:w-max">
                                    <div>
                                        <Input containerProps={{ className: "m-1" }} value={this.state.maxPrice} onChange={this.onChangeMaxPrice} label="Price" id='price' type='number' min={1} max={15000} />
                                        <Input containerProps={{ className: "m-1" }} value={this.state.maxYear} onChange={this.onChangeMaxYear} label="Year" id='year' type='number' min={1950} max={2024} />
                                    </div>
                                    <div>
                                        <Input containerProps={{ className: "m-1" }} value={this.state.maxLength} onChange={this.onChangeMaxLength} label="Lenght" id='lenght' type='number' min={1} max={200} />
                                        <Input containerProps={{ className: "m-1" }} value={this.state.maxWidth} onChange={this.onChangeMaxWidth} label="Width" id='width' type='number' min={1} max={200} />
                                    </div>
                                    <div>
                                        <Input containerProps={{ className: "m-1" }} value={this.state.maxCabins} onChange={this.onChangeMaxCabins} label="Cabins" id='cabins' type='number' min={0} max={50} />
                                        <Input containerProps={{ className: "m-1" }} value={this.state.maxPersons} onChange={this.onChangeMaxPersons} label="Persons" id='persons' type='number' min={1} max={100} />
                                    </div>
                                    <div>
                                        <Input containerProps={{ className: "m-1" }} value={this.state.maxBeds} onChange={this.onChangeMaxBeds} label="Beds" id='beds' type='number' min={0} max={50} />
                                        <Input containerProps={{ className: "m-1" }} value={this.state.maxWC} onChange={this.onChangeMaxWC} label="WC-es" id='WC-es' type='number' min={0} max={50} />
                                    </div>
                                    <div>
                                        <Button onClick={this.onSubmit} className='m-1' color='blue' size='lg'>
                                            <MagnifyingGlassCircleIcon strokeWidth={2} className="h-5 w-5 float-left" /> Use Settings
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </CardHeader>
                    <CardBody className="px-0 transition duration-150 ease-out heightTo2">
                        {this.state.useFilters ?
                            this.state.boats.filter((boat) =>
                                boat.baseprice <= this.state.maxPrice && boat.year <= this.state.maxYear && boat.length <= this.state.maxLength && boat.width <= this.state.maxWidth && boat.cabins <= this.state.maxCabins && boat.persons <= this.state.maxPersons && boat.beds <= this.state.maxBeds && boat.WC <= this.state.maxWC
                            ).map((boat) => (<>
                                <AdminOneBoat model={boat.model} engine={boat.engine} image={boat.image} length={boat.length} width={boat.width} year={boat.year} price={boat.baseprice} ID={boat._id} />
                            </>
                            ))
                            :
                            this.state.boats.map((boat) => (<>
                                <AdminOneBoat model={boat.model} engine={boat.engine} image={boat.image} length={boat.length} width={boat.width} year={boat.year} price={boat.baseprice} ID={boat._id} />
                            </>
                            ))
                        }
                    </CardBody>
                    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">

                    </CardFooter>
                </Card>
            </div>
        )
    }
}