import React, { useState } from "react";
import style from '../styles/sidebar.css'

const Sidebar = ({dataFromSidebar}) => {

    let [displayer, setDisplayer] = useState('Bestsellers')

    let displayConsoles = () => {
        let consoles = document.querySelectorAll('.consoles')
        consoles.forEach(console => console.style.display = 'block')
    }
    let noDisplayConsoles = () => {
        let consoles = document.querySelectorAll('.consoles')
        consoles.forEach(console => console.style.display = 'none')
    }
    let displayAccessories = () => {
        let accessories = document.querySelectorAll('.accessories')
        accessories.forEach(accessory => accessory.style.display = 'block')
    }
    let noDisplayAccessories = () => {
        let accessories = document.querySelectorAll('.accessories')
        accessories.forEach(accessory => accessory.style.display = 'none')
    }
    let displayGames = () => {
        let games = document.querySelectorAll('.games')
        games.forEach(game => game.style.display = 'block')
    }
    let noDisplayGames = () => {
        let games = document.querySelectorAll('.games')
        games.forEach(game => game.style.display = 'none')
    }

    function sendDataAndSetDisplayer(event){
        dataFromSidebar(event.target.innerText + ' ' + event.target.className)
        setDisplayer(event.target.innerText + ' ' + event.target.className)
    }

    return(
        <div className="sidebar">
            <div className="current-displayer">
                <div className="cd-child">Shop/</div>
                <div className="cd-child">{displayer}</div>
            </div>
            <div onMouseEnter={displayConsoles} onMouseLeave={noDisplayConsoles}  className="console-container">
                <div className="sidebar-element">Consoles</div>
                <div onClick={sendDataAndSetDisplayer} className="consoles">PlayStation</div>
                <div onClick={sendDataAndSetDisplayer} className="consoles">Nintendo</div>
                <div onClick={sendDataAndSetDisplayer} className="consoles">Xbox</div>
            </div>
            <div onMouseEnter={displayAccessories} onMouseLeave={noDisplayAccessories} className="accessories-container">
                <div className="sidebar-element">Accessories</div>
                <div onClick={sendDataAndSetDisplayer} className="accessories">PlayStation</div>
                <div onClick={sendDataAndSetDisplayer} className="accessories">Nintendo</div>
                <div onClick={sendDataAndSetDisplayer} className="accessories">Xbox</div>
            </div>
            <div onMouseEnter={displayGames} onMouseLeave={noDisplayGames} className="games-container">
                <div className="sidebar-element">Games</div>
                <div onClick={sendDataAndSetDisplayer} className="games">PlayStation</div>
                <div onClick={sendDataAndSetDisplayer} className="games">Nintendo</div>
                <div onClick={sendDataAndSetDisplayer} className="games">Xbox</div>
            </div>
        </div>
    );
    
}

export default Sidebar