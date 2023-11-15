import React, { Navigate,Component } from 'react';
import axios from 'axios';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={username:''};
    }

    componentDidMount(){
        axios.get('/').then(res=>{
            if(res.data.valid){
                this.setState({
                    username:res.data.username
                  });
            }
            else{
                Navigate({to:'/login_user'});
            }
        }).catch(err=>console.log(err));
      }
    render() { 
        return (
        <div>
            <h1>Home Page</h1>
            <h3>Welcom{this.state.username}</h3>
        </div>
        )
    }
}

/*export default function Home() {
    const [name,setName]=this.useState('') 

    this.useEffect(()=>{
        axios.get('/').then(res=>{
            if(res.data.valid){
                setName(res.data.username);
            }
            else{
                Navigate({to:'/login_user'});
            }
        }).catch(err=>console.log(err));
    })
    return (
    <div>
        <h1>Home Page</h1>
        <h3>Welcom{this.username}</h3>
    </div>
    )
}*/