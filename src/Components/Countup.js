import React from 'react';
import CountUp from 'react-countup';

// Custom component for counting up the first letter of the description
export const CountUpFirstLetter = ({ value }) => {
  const firstLetter = value.charAt(0);
  const restOfText = value.slice(1);

  return (
    <>
      <span className="count-up-letter">
        <CountUp start={0} end={firstLetter} duration={2} delay={0} />
      </span>
      {restOfText}
    </>
  );
};