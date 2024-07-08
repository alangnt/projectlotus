import Image from 'next/image';
import { useStatus } from '../../../context/context';
import React from 'react';


const LDModes = () => {
    const { status, setStatus } = useStatus();

    const toggleStatus = () => {
        setStatus(prevStatus => !prevStatus);
    };

    return (
        <div onClick={toggleStatus} className='w-min'>
            {status ? (
                <div className="change-flex flex justify-center border-black border-2 h-min rounded-full bg-white transition-all cursor-pointer hover:bg-lightmode">
                    {status ? (
                        <div className="btns rd-btns lightmode border-black border-2 rounded-full w-10 h-10 flex justify-center items-center bg-lightmode scale-110 transition-all opacity-100">
                            <button className="relative w-3/4 h-3/4"><Image fill src="/img/light.png" objectFit="contain" alt="light mode button" /></button>
                        </div>
                    ) : (
                        <div className="btns rd-btns lightmode border-black border-2 rounded-full w-10 h-10 flex justify-center items-center bg-lightmode scale-110 transition-all opacity-0">
                            <button className="relative w-3/4 h-3/4"><Image fill src="/img/light.png" objectFit="contain" alt="light mode button" /></button>
                        </div>
                    )}
                    {status ? (
                        < div className="btns rd-btns darkmode border-black border-2 rounded-full w-10 h-10 flex justify-center items-center bg-nightmode scale-110 transition-all opacity-0">
                            <button className="relative w-3/4 h-3/4"><Image fill src="/img/dark.png" objectFit="contain" alt="dark mode button" /></button>
                        </div>
                    ) : (
                        < div className="btns rd-btns darkmode border-black border-2 rounded-full w-10 h-10 flex justify-center items-center bg-nightmode scale-110 transition-all opacity-100">
                            <button className="relative w-3/4 h-3/4"><Image fill src="/img/dark.png" objectFit="contain" alt="dark mode button" /></button>
                        </div>
                    )}
                </div >
            ) : (
                <div className="change-flex flex justify-center border-black border-2 h-min rounded-full bg-white transition-all cursor-pointer hover:bg-nightmode">
                    {status ? (
                        <div className="btns rd-btns lightmode border-black border-2 rounded-full w-10 h-10 flex justify-center items-center bg-lightmode scale-110 transition-all opacity-100">
                            <button className="relative w-3/4 h-3/4"><Image fill src="/img/light.png" objectFit="contain" alt="light mode button" /></button>
                        </div>
                    ) : (
                        <div className="btns rd-btns lightmode border-black border-2 rounded-full w-10 h-10 flex justify-center items-center bg-lightmode scale-110 transition-all opacity-0">
                            <button className="relative w-3/4 h-3/4"><Image fill src="/img/light.png" objectFit="contain" alt="light mode button" /></button>
                        </div>
                    )}
                    {status ? (
                        < div className="btns rd-btns darkmode border-black border-2 rounded-full w-10 h-10 flex justify-center items-center bg-nightmode scale-110 transition-all opacity-0">
                            <button className="relative w-3/4 h-3/4"><Image fill src="/img/dark.png" objectFit="contain" alt="dark mode button" /></button>
                        </div>
                    ) : (
                        < div className="btns rd-btns darkmode border-black border-2 rounded-full w-10 h-10 flex justify-center items-center bg-nightmode scale-110 transition-all opacity-100">
                            <button className="relative w-3/4 h-3/4"><Image fill src="/img/dark.png" objectFit="contain" alt="dark mode button" /></button>
                        </div>
                    )}
                </div >
            )}
        </div>
    );
};

export default LDModes;