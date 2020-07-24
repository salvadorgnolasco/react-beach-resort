import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../RoomContext';
import Title from './Title';


const getUniqueRoom = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
};


export default function RoomsFilter({ rooms }) {

  const context = useContext(RoomContext);

  const {
    handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
  } = context;

  /**
   * Types
   */
  let types = getUniqueRoom(rooms, 'type');
  types = ['all', ...types];
  let capacities = [...getUniqueRoom(rooms, 'capacity')];

  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  capacities = capacities.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  /**
   * Render Filters
   */
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">

        {/* Select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* End Select type */}

        {/* Capacity filter */}
        <div className="form-group">
          <label htmlFor="capacity">capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}>
            {capacities}
          </select>
        </div>
        {/* End Capacity filter */}

        {/* Price filter */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input id="price" type="range"
            name="price"
            value={price}
            min={minPrice} max={maxPrice}
            onChange={handleChange} className="form-control">
          </input>
        </div>
        {/* End Price filter */}


        {/* Size filter */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" value={minSize} id="size" onChange={handleChange} className="size-input" />
            <input type="number" name="maxSize" value={maxSize} id="size" onChange={handleChange} className="size-input" />
          </div>
        </div>
        {/* End Size filter */}

        {/* Pet and Breakfast filter */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
          
        </div>
        {/* End Pet and Breakfast filter */}

      </form>
    </section>
  )
}
