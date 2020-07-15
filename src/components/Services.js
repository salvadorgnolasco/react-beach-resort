import Title from './Title';

// https://react-icons.github.io/react-icons/icons?name=fa
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import React, { Component } from 'react';

export default class Services extends Component {

  state = {
    services: [
      { icon: <FaCocktail />, title: "free cocktails", info: "Tempor velit labore sit fugiat labore non sit est eiusmod quis ut." },
      { icon: <FaHiking />, title: "endless hiking", info: "Tempor velit labore sit fugiat labore non sit est eiusmod quis ut." },
      { icon: <FaShuttleVan />, title: "free shuttle", info: "Tempor velit labore sit fugiat labore non sit est eiusmod quis ut." },
      { icon: <FaBeer />, title: "Strongest beer", info: "Tempor velit labore sit fugiat labore non sit est eiusmod quis ut." }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
