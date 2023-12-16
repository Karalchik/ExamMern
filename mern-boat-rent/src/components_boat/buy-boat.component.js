import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "../components/home.component.css"
import axios from '../http-common';
import { Button, Input, Typography, Checkbox} from '@material-tailwind/react';

export default class BuyBoat extends Component {
    constructor(props) {
        super(props);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.onChangeCap = this.onChangeCap.bind(this);
        this.onChangeDish = this.onChangeDish.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ID: '',
            model: '',
            engine: '',
            image: '',
            isUsing: false,

            baseprice: 0,
            discount: 0,

            length: 0,
            width: 0,

            cabins: 0,
            persons: 0,
            WC: 0,
            year: 0,
            beds: 0,

            boats: [],
            TABLE_ROWS: [],

            startdate: new Date().toISOString().slice(0, 10),
            enddate: new Date().toISOString().slice(0, 10),
            isCap: false,
            isDish: false,
            options: [],

            user: []
        }
        var id = window.location.pathname;
        this.state.ID = id.slice(10);
    }

    onChangeStart(e) {
        this.setState({
            startdate: e.target.value
        });
    }
    onChangeEnd(e) {
        this.setState({
            enddate: e.target.value
        });
    }
    onChangeCap(e) {
        this.setState({
            isCap: e.target.checked
        });
        if(e.target.checked){
            this.setState({
                baseprice:this.state.baseprice+500
            })
        }
        else{
            this.setState({
                baseprice:this.state.baseprice-500
            })
        }
    }
    onChangeDish(e) {
        this.setState({
            isDish: e.target.checked
        });
        if(e.target.checked){
            this.setState({
                baseprice:this.state.baseprice+150
            })
        }
        else{
            this.setState({
                baseprice:this.state.baseprice-150
            })
        }
    }

    countPrice() {
        var dis = this.state.baseprice * this.state.discount / 100;
        return this.state.baseprice - dis + "$";
    }

    componentDidMount() {
        axios.get('boats/' + this.state.ID)
            .then(response => {
                this.setState({
                    model: response.data.model,
                    baseprice: response.data.baseprice,
                    discount: response.data.discount,
                    image: response.data.image,
                    length: response.data.length,
                    cabins: response.data.cabins,
                    persons: response.data.persons,
                    WC: response.data.WC,
                    year: response.data.year,
                    width: response.data.width,
                    engine: response.data.engine,
                    beds: response.data.beds,
                    isUsing: response.data.isUsing,
                    TABLE_ROWS: [
                        {
                            name: "Boat Code",
                            value: response.data._id,
                        },
                        {
                            name: "Price",
                            value: response.data.baseprice + "$",
                        },
                        {
                            name: "Discount",
                            value: response.data.discount + "%",
                        },
                        {
                            name: "Length",
                            value: response.data.length + "m.",
                        },
                        {
                            name: "Width",
                            value: response.data.width + "m.",
                        },
                        {
                            name: "Cabins",
                            value: response.data.cabins,
                        },
                        {
                            name: "Persons",
                            value: response.data.persons,
                        },
                        {
                            name: "Beds",
                            value: response.data.beds,
                        },
                        {
                            name: "WC-es",
                            value: response.data.WC,
                        },
                        {
                            name: "Year",
                            value: response.data.year,
                        },
                        {
                            name: "Engine",
                            value: response.data.engine,
                        },
                    ],
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('boats/')
            .then(response => {
                this.setState({ boats: response.data.map(boat => boat.model) });
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('users/auth', {
            withCredentials: true,
        }).then(res => {
            if (res.data.valid) {
                this.setState({
                    user: res.data.user
                })
                console.log(this.state.user);
            }
            else {
                window.location="/login_user";
            }
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        const request = {
            startdate: this.state.startdate,
            enddate: this.state.enddate,
            boatID: this.state.ID,
            userID: this.state.user._id,
            options: [ {"Capitan": this.state.isCap}, {"Dishes": this.state.isDish}],
        };
        axios.post('requests/save', request).then(res => {
            if (res.data.Saved) {
                window.location="/payment";
            }
        })
    }

    render() {
        return (
            <div class="container mx-auto py-5 px-4 rounded-3xl bSty heightTo centered backimgBuying">
                <div class="row">
                    <div class="autoColl">
                        <img className="maps left2T h-full w-full object-cover" alt="error with loading" src={this.state.image} />
                    </div>
                    <div class="autoColl">
                        <div class="maps right2T centered blure px-10">
                            <Typography variant='small'>{!this.state.isUsing ? <small style={{ color: "green" }}>Available</small> : <small style={{ color: "red" }}>Unavailable</small>}</Typography>
                            <Typography variant='h3' color='blue'>{this.state.model}</Typography>
                            <div className="rounded-3xl table my-2">
                                <table className="w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>

                                            <th key="Properties" className="border-b border-blue-gray-100 bg-blue-gray-50 p-1">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    Characteristics
                                                </Typography>
                                            </th>
                                            <th key="Values" className="border-b border-blue-gray-100 bg-blue-gray-50 p-1">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    Values
                                                </Typography>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.TABLE_ROWS.map(({ name, value }) => (
                                            <tr key={name} className="even:bg-blue-gray-50/50">
                                                <td className="p-1">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {name}
                                                    </Typography>
                                                </td>
                                                <td className="p-1">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {value}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div class="row">
                    <div className="maps bottom2 blure px-10">
                        <div className='rounded-3xl table2 my-2'>
                            <div className='autoColl' style={{ marginLeft: "1em", width: "30%" }}>
                                <Input containerProps={{ className: "m-1" }} label="Start" id='start' type='date' value={this.state.startdate} onChange={this.onChangeStart} />
                                <Input containerProps={{ className: "m-1" }} label="End" id='end' type='date' value={this.state.enddate} onChange={this.onChangeEnd} />
                            </div>
                            <div className='autoColl' style={{ marginLeft: "1em", width: "30%" }}>
                                <p><Checkbox color='blue' id="capitan-on" label="Include Capitan" value={this.state.isCap} onChange={this.onChangeCap} /></p>
                                <p><Checkbox color='blue' id="food-on" label="Include Dishes" value={this.state.isDish} onChange={this.onChangeDish} /></p>
                            </div>
                            <div className='autoColl centered' style={{ marginLeft: "1em", width: "30%" }}>
                                <Typography className='bg-white rounded-3xl centered' variant='h3' color='blue'>{this.countPrice()}</Typography>
                                <Button onClick={this.onSubmit} className='mb-3' variant="gradient" color="blue">
                                    <svg style={{ float: "left" }} class="text-white dark:text-gray-900" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.66699 4.83333V4.84166" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.333 11.5V11.5083" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Purchase and Rent
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}