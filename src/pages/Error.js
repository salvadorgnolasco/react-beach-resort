import Hero from '../components/Hero';
import Banner from '../components/Banner';

import {Link} from 'react-router-dom';
import React from 'react';


export default function Error() {
  return (
    <div>
      <Hero>
        <Banner title="404" subtitle="Page not found">
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </Banner>
      </Hero>
    </div>
  )
}
