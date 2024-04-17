import React from 'react';

function Home() {
    const imageUrl = 'http://localhost:3000/files/boy2.png';
    const audioUrl = 'http://localhost:3000/files/boy.mp3';

    return (
        <div>
            <img src={imageUrl} alt="boy" />
            <audio controls>
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default Home;
