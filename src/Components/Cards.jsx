import React from 'react'
import { videodet } from './videodet'
import "./Cards.css";

const Cards = () => {
    return (
        <div className='container'>
            {videodet.map((video) => {
                return (
                    <div key={video.id} className="card">
                        <img src={video.url} alt={video.name} />
                        <h2>{video.name}</h2>
                        <p>{video.description}</p>
                    </div>
                )

            })}
        </div>
    )
}

export default Cards