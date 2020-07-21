
import React, { Component } from 'react';

import items from './data';

const RoomContext = React.createContext();

class RoomContextProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
    }
  }

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
    });
  }
  
  formatData(items) {
    let temporalItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });

    return temporalItems;
  }

  getRoom = (slug) => {
    let tempRoom = [...this.state.rooms];
    const room = tempRoom.find((room) => room.slug === slug);
    return room;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomContextConsumer = RoomContext.Consumer;

export { RoomContext, RoomContextProvider, RoomContextConsumer };