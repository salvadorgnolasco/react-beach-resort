import Banner from '../components/Banner';
import Hero from '../components/Hero';
import RoomsContainer from '../components/RoomContainer';

import React from 'react';
import {Link} from 'react-router-dom';

export default function Rooms() {
  return (
    <>
      <Hero heroClassName="roomsHero">
        <Banner title="Our rooms">
          <Link to="/" className="btn-primary">home</Link>
        </Banner>
      </Hero>
      <RoomsContainer>
        
      </RoomsContainer>
    </>
  )
}
