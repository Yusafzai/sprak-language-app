import React from 'react';
import Video from './images/sprak.mp4';

function Home() {
    return (
        <div className=" bg-pink-400 w-full h-screen top-16 relative">        

        <div>
            <video className="w-full h-full" autoPlay loop>
                <source src={Video} type="video/mp4" />
            </video>
        </div>

        </div>
    )
}

export default Home
