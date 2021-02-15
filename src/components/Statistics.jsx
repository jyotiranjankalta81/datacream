import React from 'react';

const Statistics = (props) => {
    console.log("statics", props.data)
    return (
        <div className="mb-2 mt-2">
            <div className="statistics">
                <h2 className="text-left">Statistics</h2>
                <ul class="list-group text-left">
                    <li>1.Games played:{props.data}</li>
                    <li>2. Total Score</li>
                    <li>3. Consistency averge:</li>
                    <li>4. Site consistency average:</li>
                    <li>5. Deviance average: </li>
                    <li>6. Site Deviance average:</li>
                    <li>7. Ranking - 191 of 123,456 </li>
                </ul>
            {/* <button
                onClick={() =>
                    props.gamePlayedHandler({
                        price: 100
                    })
                }
            >Update</button> */}
            </div>
        </div>
    )
}
export default Statistics;

