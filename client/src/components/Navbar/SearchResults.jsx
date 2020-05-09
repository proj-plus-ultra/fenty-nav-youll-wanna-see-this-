import React from 'react';
const SearchResults = (props) =>{
  let shortened = props.products.slice(0, 8);
  let rowOne = shortened.slice(0, 4);
  let rowTwo = shortened.slice(4);

  return (
    <table className='searchList'>
      <tr>
        {rowOne.map((product, i) =>{
          return (
            <td key={i}>
              <img src={product.foreground}/>
              {product.name}
              ${product.price}
            </td>
          );
        })}
      </tr>

      <tr>
        {rowTwo.map((product, i) =>{
          return (
            <td key={i}>
              <img src={product.foreground}/>
              {product.name}
              ${product.price}
            </td>
          );
        })}
      </tr>
    </table>

  );

};

export default SearchResults;