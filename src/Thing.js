import React from 'react';

const Thing = ({ id, name, complete, thingClick }) => (
  <li
    style={ complete ? { ...styles.thing, ...styles.complete } : styles.thing }
    onClick={ () => thingClick(id) }
  >
   { name }
  </li>
);

const styles = {
  thing: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Thing;