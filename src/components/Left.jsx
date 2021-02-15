import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import gamePlayed from "../containers/GamePlayedContainers";
// import Footer from './Footer'
import { connect } from "react-redux";
import {gamePlayed} from "../services/actions/actions";
import Statistics from './Statistics';

const Left = (props) => {
  console.log("left",props)
  const [option, setOption] = useState({
    A: " ",
    B: " ",
    C: " ",
    D: " "
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setOption((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    })
  }

  const gamePlayedHandler= (event) => {
    event.preventDefault();
    // alert("thank you");
    const newNote = {
      A: option.A,
      B: option.B,
      C: option.C,
      D: option.D
    }
    console.log(newNote);
    alert("Form Submitted Sucessfully");


    axios.post(`http://localhost:5000/`, newNote)
  };

  useEffect(() => {

  });
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
          <form >
            <h1>{option.name}</h1>
            <input type="radio"
              name="A"
              onChange={inputEvent}
              value="ghee"
            />
            {/* <br/> */}
            <span>
              <label>&nbsp; Option A</label>

            </span>
            <br />
            <input type="radio"
              name="B"
              onChange={inputEvent}
              value="pepsi"
            // checked={option.name === "Option A"}
            />
            <span><label>&nbsp; Option B</label></span>
            <br />
            <input type="radio"
              name="C"
              onChange={inputEvent}
              value="jam"
            />
            <span><label>&nbsp; Option C</label></span>
            <br />
            <input type="radio"
              name="D"
              onChange={inputEvent}
              value="cock"
            />
            <span><label>&nbsp; Option D</label></span>

          </form>
        </div>
        <div className="padding">
          <button
            onClick={gamePlayedHandler}
            type="submit"
            class="buttonA float-right">Submit</button>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <Statistics />
    </div>
  )
}


const mapStateToProps=state=>({
  data: state.cardItems
})

const mapDispatchToProps=dispatch=>({
  gamePlayedHandler: data=>dispatch(gamePlayed(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Left)
