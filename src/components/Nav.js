import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <div>
             <div style={{display: 'flex', flexDirection: 'row', flex: 1,}}>
              <div style={{display: 'flex', flex: 0.6, }}>
                <h1>Logo</h1>
              </div>
              <div style={{display: 'flex', flex: 0.4, position: 'relative', paddingLeft: 20 ,justifyContent : 'space-around'}}>
                <div className="secondhalf-nav"/>
                <h3 className="my-2 text-bold navtext">Welcome Back! User999</h3>
                <Link to="/login" class="btn btn-primary m-2" type="submit">Logout</Link> 
              </div>
            </div>
              <br/><br/>
            </div>
        )
    }
}

