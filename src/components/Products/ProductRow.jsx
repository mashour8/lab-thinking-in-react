import React from 'react';

const ProductRow = (props) => {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        {props.inStock ? (
          <td>{props.price}</td>
        ) : (
          <td style={{ color: 'red' }}>{props.price}</td>
        )}
      </tr>
    </>
  );
};

export default ProductRow;
