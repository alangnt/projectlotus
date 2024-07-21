import React, { useState, useEffect, useRef } from 'react';
import { useStatus } from "../../../context/context";

const Timer = () => {
    const { status } = useStatus();
    const [timeLeft, setTimeLeft] = useState<number>(25 * 60); // total time in seconds
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const bell = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        bell.current = new Audio('/sounds/bell.wav');
    }, []);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 0) {
                        bell.current?.play();
                        clearInterval(intervalRef.current!);
                        setTimeLeft(25 * 60); // Reset to 25 minutes
                        setIsRunning(false); // Stop the timer
                        return 25 * 60; // Reset time
                    } else {
                        return prevTimeLeft - 1;
                    }
                });
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current!);
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="flex flex-col justify-center items-center grow gap-4 click-div">
            {isRunning ? 'Click to take a break earlier' : 'Click to start Focusing'}
            <h2
                onClick={toggleTimer}
                className={`timer ${status ? 'timer-lightmode' : 'timer-darkmode'} text-6xl w-72 h-72 rounded-full flex justify-center items-center cursor-pointer`}
            >
                <span>{String(minutes).padStart(2, '0')}</span>:
                <span>{String(seconds).padStart(2, '0')}</span>
            </h2>
        </div>
    );
};

export default Timer;
