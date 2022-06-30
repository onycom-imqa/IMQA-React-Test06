import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
import { useIMQA } from "imqa-react-sdk";

const Room = ({ room }) => {
    const IMQARef = useIMQA();
    const { name, slug, images, price} = room;
    return (
        <div ref={IMQARef}>
            <article className='room'>
                <div className='img-container'>
                    <img src={images[0] || defaultImg} alt='single-room' />
                    <div className='price-top'>
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Featured</Link>
                </div>
                <p className='room-info'>{name}</p>
            </article>
        </div>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}

export default Room;
