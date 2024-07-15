import React, { useState, useEffect, useRef } from 'react';
import { useStatus } from "../../../context/context";

const Timer = () => {
    const { status } = useStatus();
    const [minutes, setMinutes] = useState<number>(25);
    const [seconds, setSeconds] = useState<number>(0);
    const [state, setState] = useState<boolean>(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const bell = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        bell.current = new Audio('/sounds/bell.wav');
    }, []);

    useEffect(() => {
        if (!state) {
            intervalRef.current = setInterval(updateSec, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current!);
    }, [state]);

    const updateSec = () => {
        setSeconds((prevSeconds) => {
            if (prevSeconds === 0) {
                if (minutes === 0) {
                    bell.current?.play();
                    resetAndRestartTimer();
                    return 0;
                } else {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                    return 59;
                }
            } else {
                return prevSeconds - 1;
            }
        });
    };

    const appTimer = () => {
        setState((prevState) => !prevState);
    };

    const resetAndRestartTimer = () => {
        setMinutes(25);
        setSeconds(0);
        setState(true); // This stops the timer
        setTimeout(() => {
            setState(false); // This restarts the timer
        }, 100); // Ensure the timer restarts
    };

    return (
        <div className="flex flex-col justify-center items-center grow gap-4 click-div">
            {state ? 'Click to start Focusing' : 'Click to take a break earlier'}
            {status ? (
                <h2 onClick={appTimer} className="timer timer-lightmode text-6xl w-72 h-72 rounded-full flex justify-center items-center cursor-pointer">
                    <span>{minutes.toString().padStart(2, '0')}</span>:
                    <span>{seconds.toString().padStart(2, '0')}</span>
                </h2>
            ) : (
                <h2 onClick={appTimer} className="timer timer-darkmode text-6xl w-72 h-72 rounded-full flex justify-center items-center cursor-pointer">
                    <span>{minutes.toString().padStart(2, '0')}</span>:
                    <span>{seconds.toString().padStart(2, '0')}</span>
                </h2>
            )}
        </div>
    );
};

export default Timer;