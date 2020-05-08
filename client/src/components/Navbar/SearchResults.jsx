import React from 'react';
const SearchResults = (props) =>{
  return (
    <li>
      <div className='searchResults'>
        <img src={props.product.foreground}/>
        {props.product.name}
        <br/>
        {props.product.price}
      </div>
    </li>
  );

};

export default SearchResults;