import React from 'react';
import { useIMQA } from "imqa-react-sdk";

const Banner = ({title, subtitle, children}) => {
    const IMQARef = useIMQA();
    return (
        <div ref={IMQARef}>
            <div className='banner'>
                <h1>{title}</h1>
                <div></div>
                <p>{subtitle}</p>
                {children}
            </div>
        </div>
    )
}

export default Banner;
