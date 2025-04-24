import React, { useEffect, useState } from 'react';
import './Home.css';
import Question from '../Question.json';

const Home = () => {

    const [currentquestion, setcurrentquestion] = useState(0);
    const [score, setscore] = useState(0);
    const [scoreboard, setscoreboard] = useState(false);
    const[timer,setTimer]=useState(10);

    const AddData = (data) => {
        if (data === Question[currentquestion].correctOption) {
            setscore((pre) => pre + 1);
        }
    
        if (currentquestion < Question.length - 1) {
            setcurrentquestion((pre) => pre + 1);
            setTimer(10);
        } else {
            setscoreboard(true);
        }
    }
    

    const Showdisplay = () => {
        setcurrentquestion(0);
        setscore(0);
        setscoreboard(false);
        setTimer(10);
    }

    useEffect(()=>{
        let interval;
        if(timer>0 && !scoreboard){
            interval=setInterval(()=>{
                setTimer((previous)=>previous-1)
            },1000)
        }
        else{
            clearInterval(interval);
            setscoreboard(true);
        }
        return()=>clearInterval(interval);
    },[timer,scoreboard]);

    return (

        <div className="maincontainer">
            {
                scoreboard ? <div className="scoreboard"  >
                    <p>Your Score:{score}/{Question.length}</p>
                    <button onClick={Showdisplay}>Restart</button>
                </div> : <div className='container' /* style={{display:'none'}} */>
                    <h1>Question {currentquestion + 1}</h1>
                    <p>{Question[currentquestion].question}</p>
                    <div>
                        {
                            Question[currentquestion].options.map((data, index) => {
                                return <button key={index} onClick={() => { AddData(data) }}>{data}</button>
                            })
                        }

                    </div>
                    <div className='time'>Time Left :<span>{timer}S</span></div>
                </div>
            }
        </div>
    )
}

export default Home;