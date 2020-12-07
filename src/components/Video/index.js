import React from 'react';
import './styles.css';

export const Video = (props) => {
    const { src, title, member } = props;

    return (
        <div className="video">
            <div className="wrapper">
                <iframe src={src} title={title} allowFullScreen />
            </div>
            <h2>{member}</h2>
        </div>
    );
};

export default Video;