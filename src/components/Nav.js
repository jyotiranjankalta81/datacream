import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <div>
             <div id="nav">
              <div className="d-flex justify-content-between">
              <h1>Logo</h1>
              <div className="d-flex">
              <h3 className="my-2 text-bold">Welcome Back! User999</h3>
              <Link to="/login" class="btn btn-primary m-2" type="submit">Logout</Link>
              </div>
              </div>
              </div>
              <br/><br/>
            </div>
        )
    }
}

