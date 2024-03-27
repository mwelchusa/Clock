import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000); //setInterval function lets you run function that updates every 1000 ms

        return () => {
            clearInterval(intervalId); //Unmounts clock 
        }
    }, []);

    function formatTime(){
        let hours  = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"
        
        hours = hours % 12 || 12; //Converts from military time , if %12 returns 0 that is equivalent to false and then does OR operator
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(meridiem)}`;
    }
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(<div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>

    </div>);
}

export default DigitalClock;