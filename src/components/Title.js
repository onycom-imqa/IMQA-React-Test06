import React from 'react';
import { useIMQA } from "imqa-react-sdk";

const Title = ({title}) => {
    const IMQARef = useIMQA();
    return (
        <div ref={IMQARef}>
            <div className='section-title'>
                <h4>{title}</h4>
                <div></div>
            </div>
        </div>
    )
}

export default Title;
