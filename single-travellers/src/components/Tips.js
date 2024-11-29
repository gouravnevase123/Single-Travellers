import React from 'react';

const Tips = () => {
  const tips = [
    'Pack light and smart.',
    'Always have a backup plan.',
    'Learn basic phrases of the local language.',
    'Stay connected but enjoy the moment.',
  ];

  return (
    <section className="tips">
      <h2>Travel Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </section>
  );
};

export default Tips;
