import React from 'react';
import { useIMQA } from "imqa-react-sdk";

const Hero = ({children, hero}) => {
    const IMQARef = useIMQA();
    return (
        <div ref={IMQARef}>
            <header className={hero}>
                {children}
            </header>
        </div>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero'
}

export default Hero;
