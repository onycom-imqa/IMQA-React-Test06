import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';
import { useIMQA } from "imqa-react-sdk";

const Loading = () => {
    const IMQARef = useIMQA();
    return (
        <div ref={IMQARef}>
            <div className='loading'>
                <h4>room data loading</h4>
                <img src={loadingGif} alt="" />
            </div>
        </div>

    )
}

export default Loading;
