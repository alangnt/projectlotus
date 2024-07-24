import React from 'react';
import { useStatus } from "../context/context";

const BackgroundProfile: React.FC = () => {
    const { status } = useStatus();

    return (
        <div className={`form-${status ? 'light' : 'dark'} video-container`}>
            
        </div >
    );
};

export default BackgroundProfile;
