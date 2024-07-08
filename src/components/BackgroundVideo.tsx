import React from 'react';
import { useStatus } from "../context/context";

const BackgroundVideo: React.FC = () => {
    const { status } = useStatus();

    return (
        <div className="video-container">
            {status ? (
                <div>
                    <video autoPlay muted loop playsInline className="background-video">
                        <source src="/background/anim-bglight.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <video autoPlay muted loop playsInline className="background-video hidden">
                        <source src="/background/anim-bgdark.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <div>
                    <video autoPlay muted loop playsInline className="background-video hidden">
                        <source src="/background/anim-bglight.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <video autoPlay muted loop playsInline className="background-video">
                        <source src="/background/anim-bgdark.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
};

export default BackgroundVideo;
