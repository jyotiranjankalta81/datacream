import React, { Component } from 'react'

export default class Yesterday extends Component {
    render() {
        return (
            <div className="m-2 card">
            <div className="prev ">
            <h2>Yesterday</h2> 
            <div className="text-left">
                  <p> Number of players: 123,456</p>
                <h5>  Question: </h5>
           <p> This is yesterday's question </p>
                A. Option A<br />
                B. Option B<br />
                C.  Option C<br />
                D. Option D<br /><br />
                Most common answer: B <br />
                Your answer: B 
            <h4 className = "text-center">Tomorrow</h4> 
           <p className = "text-center"> Hint: Question about birds</p>
              </div>
          </div>
            </div>
        )
    }
}
