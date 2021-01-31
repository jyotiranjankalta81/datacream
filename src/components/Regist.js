import React, { Component } from 'react'

export default class Regist extends Component {
    render() {
        return (
            <div>
            <div>
            <div className="m-2">
            <div className="prev d-flex flex-column ">
            
            <h2>Login</h2> 
            
              <label className="lable mt-2 mb-0 text-left">Username</label>
              <input type="text" className="input mb-2 mt-0" placeholder="Enter Username" required />
          
              <label className="lable text-left mt-2 mb-0">Password</label>
              <input placeholder="Enter Password"  className="input mb-2 mt-0" required />
                  
            
            <p></p>
              <div className=" text-left  mb-4"><input type="checkbox"/>I agree that the owner of this site is allowed <br></br>to use the result of everyday quiz </div>
              
              
              <button  className="buttonC  mb-4 text-right">Login/Register</button>
              <br></br>
              <br></br>
              </div>
            </div>
          </div>
            </div>
        )
    }
}
