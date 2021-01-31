import React, { Component } from 'react'
import Footer from './Footer'
import Statistics from './Statistics'

export default class Left extends Component {
    render() {
        return (
         <div className="m-2">
         <div className="question text-left ">
           <div className="question-header">
           </div>
            <div className="d-flex justify-content-between padding">
                 <h3>Today's Question</h3> 
                 <p className="date">Jan/21/2020</p>
             </div>
          <p className="text-left pb-4 padding">Lorem Ipsum is simply dummy text of the printing and typesetting <br></br> industry.Lorem Ipsum has been the industry's standard dummy text </p> 
          <div className="padding"> 
            <button class="buttonB">A. Option A</button><br></br>
            <button class="buttonB">B. Option B</button><br></br>
            <button class="buttonB">C. Option C</button><br></br>
            <button class="buttonB">D. Option D</button><br></br>
          </div>
           <div className ="padding">
           <button class="buttonA float-right">Submit</button>
           <br></br>
           <br></br>
           <br></br>
          </div>   
            </div>
              <Statistics/>
          </div>
        )
    }
}
