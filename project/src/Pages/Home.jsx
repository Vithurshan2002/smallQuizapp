import React, { useState } from 'react';
import './Home.css';
import Question from '../Question.json';

const Home = () => {

    const [currentquestion, setcurrentquestion] = useState(0);
    const [score, setscore] = useState(0);
    const [scoreboard, setscoreboard] = useState(false);

    return (

        <div className="maincontainer">
            {
                scoreboard ? <div className="scoreboard"  >
                    <p>Your Score:1/3</p>
                    <button>Restart</button>
                </div> : <div className='container' /* style={{display:'none'}} */>
                    <h1>Question {currentquestion+1}</h1>
                    <p>{Question[currentquestion].question}</p>
                    <div>
                        {
                            Question[currentquestion].options.map((data,index)=>{
                                    return  <button key={index}>{data}</button>
                            })
                        }
                    
                    </div>
                    <div className='time'>Time Left :<span>10S</span></div>
                </div>
            }



        </div>
    )
}

export default Home;