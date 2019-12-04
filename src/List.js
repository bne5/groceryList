import React from 'react';
import Thing from './Thing'

const List = ({ items, name, thingClick }) => (
 <div>
   <h2>{name}</h2>
   <ul>
     { items.map( item => <Thing key={item.id} {...item} thingClick={thingClick}/> )}
   </ul>
 </div>
)


export default List;