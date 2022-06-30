import React from 'react';
import Room from './Room';
import { useIMQA } from "imqa-react-sdk";

const RoomsList = ({rooms}) => {
    const IMQARef = useIMQA();
    if(rooms.length === 0) {
        return(
            <div ref={IMQARef}>
                <div className='empty-search'>
                    <h3>unfortunately no rooms matched your search parameters</h3>
                </div>
            </div>
        )
    }
    return(
        <div ref={IMQARef}>
            <section className='roomslist'>
                <div className='roomslist-center'>
                    {
                        rooms.map((item) => {
                            return <Room key={item.id} room={item} />
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default RoomsList;
