import React, { useEffect, useState } from 'react';
import './EndPopUp.scss'

const EndPopUp = ({score, retry, isOpen}) => {

    const[ userScore, setUserScore] = useState(null)

    useEffect(() => {
        
        isOpen && setUserScore(score)
    }, [isOpen])
    return (
        <div id="pop-up" className={isOpen && "is-open"}>
            <h2>Your have scored {userScore || 0} points</h2>
            <button onClick={retry}>Try Again</button>
        </div>
    );
};

export default EndPopUp;