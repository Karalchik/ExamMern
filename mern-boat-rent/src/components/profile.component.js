import React, { Component } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import axios from '../http-common';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const TABLE_HEAD = ["Base Price", "Discount", "Start Date", "End Date" , "Options"];
 

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={user:[],requests:[]};
        this.somethingsToDo();
    }

    TABLE_ROWS = [
  
    ];

    componentDidMount(){
      axios.get('http://localhost:5000/api/requests/').then(response=>{
        this.setState({requests:response.data});
      }).catch((error)=>{
        console.log(error);
      })
    }
    commonDate(object){
      var a =new Date(object);
      return a.toLocaleDateString('en-GB');
    }

    somethingsToDo(){
        axios.get('users/auth', {
            withCredentials: true,
        }).then(res=>{
        if(res.data.valid){
          this.setState({
            user:res.data.user
          })
            console.log(this.state.user);
        }
        else{
            window.location.assign('login_user');
        }
    }).catch(err=>console.log(err));
    }
    render() {
        return (
            <main class="container mx-auto px-4 rounded-3xl bSty heightTo backimgProf">
        <section className="relative block" style={{ height: "500px" }}>
        </section>
        <section className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-8">
                  <h3 className="text-5xl font-semibold leading-normal mb-2 text-blue-500 mb-2">
                  {this.state.user.username}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {this.state.user.email}
                  </div>
                  <div className="mb-2 text-light-gray-500 mt-3">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    {this.state.user.contacts}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <Card className="h-full w-full">
                        <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                            {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                                >
                            {head}
                            </Typography>
                            </th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.requests.map(({baseprice,discount,startdate,enddate,options}, index) => (
                            <tr className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {baseprice}$
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {discount}%
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {this.commonDate(startdate)}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {this.commonDate(enddate)}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {options}
                                </Typography>
                            </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        )
    }
    
}