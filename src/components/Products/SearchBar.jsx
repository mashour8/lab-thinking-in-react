import React from 'react';
import ProductTable from './ProductTable';
import { Input } from 'antd';

const SearchBar = (props) => {
  const [checked, setChecked] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const handleChange = () => {
    setChecked(!checked);
  };
  const handleSearch = (event) => {
    // console.log('event.target.value', event.target.value);
    setSearch(event.target.value);
    // props.setProducts(data);
    const newArry = props.products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
    // if (search === '') {
    //   console.log('search1', search);
    // } else {
    //   props.setProducts(newArry);
    //   console.log('search2', search);
    // }
    // props.setProducts(jsonData);
  };
  const data = {
    // nodes:
  };
  return (
    <div>
      <div className="search">
        <h3>Search</h3>
        <label htmlFor="search">
          <Input
            id="search"
            enterButton="Search"
            placeholder="Search"
            size="large"
            loading
            onChange={handleSearch}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          ></input>
          Only show product in stock
        </label>
      </div>
      <div className="table">
        <ProductTable
          products={props.products.filter((product) =>
            product.name.toLowerCase().includes(search)
          )}
          setProducts={props.setProducts}
        ></ProductTable>
      </div>
    </div>
  );
};

export default SearchBar;
