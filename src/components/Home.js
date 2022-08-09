import React from "react";
import style from '../styles/home.css'

const Home = () => {  
    return(
        <div className="home-main">
            <div className="home-left">
                <div className="home-txt-container">
                    Are you looking for a new console? <br />
                    Or maybe you would like to play a new game? <br />
                    If so, then this is the best place for you!
                </div>
            </div>
            <div className="home-right">
                <div className="bg-container">
                    <div className="bg"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;