import React, { useState, useEffect } from 'react';


const Timer = () => {
    // create timer seconds variable
    const [secondsLeft, setTimer] = useState(60);

    // cause timer to count down
    useEffect(() => {
        // on timer start get time
        // Timer Start time
        const timerCurrentTime = new Date(Date.now());
        const initalTime = new Date('May 9, 2021 17:29');


        let timeShiftAmount = 60000;
        // timer end time 
        let endTime = initalTime + timeShiftAmount

        let timeSince = (timerCurrentTime - initalTime);
        console.log('Time since initial time ' + Math.floor(timeSince / 1000));
    })


    return (
        <div>
            <h3 className="w-100 mt-auto bg-secondary p-4">
                Timer Component
    </h3>
            <p>Seconds: {secondsLeft}</p>
        </div>
    );
};

export default Timer;