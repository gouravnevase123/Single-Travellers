import React from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
  { name: 'Bali', description: 'A tropical paradise with beautiful beaches.', image: '/Single-Travellers/single-travellers/src/components/images/bali.jpg' },
  { name: 'Tokyo', description: 'A vibrant city blending tradition and modernity.', image: '/images/tokyo.jpg' },
  { name: 'Iceland', description: 'A land of glaciers, volcanoes, and hot springs.', image: '/images/iceland.jpg' },
];

const DestinationList = () => {
  return (
    <section className="destination-list">
      <h2>Top Destinations</h2>
      <div className="destinations">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default DestinationList;
