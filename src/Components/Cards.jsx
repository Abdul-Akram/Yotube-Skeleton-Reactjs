import React from 'react';
import "./Cards.css";

const Cards = ({ videodet }) => {
    return (
        <div className='container'>
            {videodet.map((video) => {
                const videoUrl = video.url.replace("watch?v=", "embed/");
                return (
                    <div key={video.id} className="card">
                        <iframe
                            src={videoUrl}
                            title={video.name}
                            width="100%"
                            height="200"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <h2>{video.name}</h2>
                        <p>{video.description}</p>
                        <p style={{ fontSize: ".7rem" }}>{video.time}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Cards;
