import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import {Link, useHistory} from "react-router-dom";
import {MainContainer} from "./components/MainContainer";


export class Google extends Component {

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);


    };
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="242591386881-0mfgm6rd6nvdgib9m8gkgdpj1o4c7lh9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}

                />
            </div>
        )
    }
}