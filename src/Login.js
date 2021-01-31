import React, { Component } from "react";
import "./App.css";
import Left from './components/Left';
import Intstruction from "./components/Intstruction";
import NavL from "./components/NavL";
import Gmail from "./components/Gmail";
import Regist from "./components/Regist";
import Footer from "./components/Footer";

export default class Login extends Component {
    render() {
        return (
            <div>
            <div className="App">
            <NavL/>
             <div className="d-flex flex-sm-row flex-column justify-content-center ">
             <div>
              <Left/>
                </div>          
              <div className="right">
                <Intstruction/>
                <Regist/>
                <Gmail/>      
              </div>
            </div>
           <Footer/>            
          </div>
            </div>
        )
    }
}
