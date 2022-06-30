import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import { useIMQA } from "imqa-react-sdk";

const RoomsContainer = ({context}) => {
    const IMQARef = useIMQA();
    const { loading, sortedRooms, rooms} = context;
    if(loading) {
        return (
            <div ref={IMQARef}>
                <Loading />
            </div>
        )
    }
    return (
        <div ref={IMQARef}>
            <div>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/>
            </div>
        </div>
    )
}

export default withRoomConsumer(RoomsContainer);


// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//     return(
//     <RoomConsumer>
//         {
//             (value) => {
//                 const { loading, sortedRooms, rooms} = value;
//                 if(loading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello from Rooms Container
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                 )
//             }
//         }

//     </RoomConsumer>
//     )
// }

// export default RoomsContainer;
