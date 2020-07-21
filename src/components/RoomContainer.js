import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { RoomContext } from '../RoomContext';

import React, { Component } from 'react';

export default class RoomContainer extends Component {

  static contextType = RoomContext;

  render() {
    const { rooms, sortedRooms, loading } = this.context;

    if(loading) {
      return <Loading />
    }

    return (
      <div>
        <RoomsFilter rooms={rooms}></RoomsFilter>
        <RoomsList rooms={sortedRooms}></RoomsList>
      </div>
    )
  }
}

