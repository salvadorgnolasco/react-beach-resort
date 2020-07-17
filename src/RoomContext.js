
import React, { Component } from 'react';

const RoomContext = React.createContext();

class RoomContextProvider extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello ',
      name: 'Salvatorum',
    }
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomContextConsumer = RoomContext.Consumer;

export { RoomContext, RoomContextProvider, RoomContextConsumer };