import Loading from './Loading';
import Room from './Room';
import Title from './Title';

import React, { Component } from 'react';
import { RoomContextConsumer } from '../RoomContext';


export default class FeatureRooms extends Component {

  getListOfRooms(rooms) {
    return rooms.featuredRooms.map(room => <Room key={room.id} room={room} />);
  }

  render() {

    return (
      <section className="featured-rooms">
        <Title title={"Featured Rooms"} />
        <RoomContextConsumer>
          {
            (rooms) => {
              let listOfRooms = this.getListOfRooms(rooms);
              return (
                <div className="featured-rooms-center ">
                  {rooms.loading ? <Loading /> : listOfRooms}
                </div>
              );
            }
          }
        </RoomContextConsumer>
      </section>
    )
  }
}
