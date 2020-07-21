import Room from './Room';

import React from 'react';

export default function RoomsList({ rooms }) {

  console.log('rooms', rooms);

  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  const listOfRooms = rooms.map(room => {
    return <Room key={room.id} room={room} />
  });

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {listOfRooms}
      </div>
    </section>
  )
}
