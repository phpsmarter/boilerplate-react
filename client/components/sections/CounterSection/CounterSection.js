import React from 'react';
import PropTypes from 'prop-types';
import IncrementButton from '../../elements/IncrementButton';
import DecrementButton from '../../elements/DecrementButton';

export default function CounterSection({ counter }) {
  return (
    <div className="section counter-section app-flex">
      <h1 className="title is-1 has-text-centered">Counter:</h1>
      <div className="counter">{counter}</div>
      <div className="columns">
        <div className="column is-6 text-center">
          <IncrementButton />
        </div>
        <div className="column is-6 text-center">
          <DecrementButton />
        </div>
      </div>
    </div>
  );
}

CounterSection.propTypes = {
  counter: PropTypes.number.isRequired,
};
