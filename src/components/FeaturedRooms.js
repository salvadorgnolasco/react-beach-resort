
import React, { Component } from 'react';
import { RoomContext, RoomContextConsumer } from '../RoomContext';


export default class FeatureRooms extends Component {

  static contextType = RoomContext;

  render() {
    const contextProps = this.context;
    console.log('contextProps', contextProps);

    return (
      <div>
        <RoomContextConsumer>
          {
            ({ greeting, name }) => (
              <div>{greeting} {name}</div>
            )
          }
        </RoomContextConsumer>
      </div>
    )
  }
}
