import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import jsonData from '../../data.json';

const ProductPage = (props) => {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <SearchBar products={products} setProducts={setProducts}></SearchBar>
    </div>
  );
};

export default ProductPage;
