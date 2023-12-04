import React, { Component } from 'react';
import "./aboutus.component.css"
import "../components/home.component.css"
import { Typography } from '@material-tailwind/react';
export default class EditUser extends Component {
constructor(props){
    super(props);

    this.state={
    };
}

render() {
    return (
        <div class="container mx-auto px-4 rounded-3xl bSty heightTo backimgAboutUs centered">
            <div class="about-section">
                <Typography variant='h1' color='blue'>About Us Page</Typography>
                <Typography>Some text about who we are and what we do.</Typography>
                <Typography>Resize the browser window to see that this page is responsive by the way.</Typography>
            </div>

            <Typography variant='h2' color='blue' style={{textAlign:"center"}}>Our Team</Typography>
            <div class="card container mx-auto px-4 rounded-3xl">
                <img class="imgProf" src='https://i.pinimg.com/564x/1a/aa/a8/1aaaa8cc863950eeb1f6889ec7840898.jpg' alt="Mykyta"/>
                <div class="container">
                    <Typography variant='h2' color='blue'>Mykyta Luchaninov</Typography>
                    <Typography color='teal' variant='h4' textGradient>CEO & Founder</Typography>
                    <Typography>Some text that describes me lorem ipsum ipsum lorem.</Typography>
                    <Typography>ddtera636@gmail.com</Typography>
                </div>
            </div>
        </div>
    )
    }
}