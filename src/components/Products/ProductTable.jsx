import React from 'react';
import ProductRow from './ProductRow';
import { Space, Table, Tag } from 'antd';

const ProductTable = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (_, { inStock }) => (
        <>
          {inStock ? (
            <Tag key={inStock}>{inStock}</Tag>
          ) : (
            <Tag color="red" key={inStock}>
              {inStock}
            </Tag>
          )}
          {console.log('inStock', inStock)}
        </>
      ),
    },
    // {
    //   title: 'inStock',
    //   key: 'inStock',
    //   dataIndex: 'inStock',
    //   render: (_, { inStock }) => (
    //     <>
    //       {inStock.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
  ];

  //   const columns = [
  //     {
  //       title: 'Name',
  //       dataIndex: 'name',
  //       key: 'name',
  //       render: (text) => <a>{text}</a>,
  //     },
  //     {
  //       title: 'Price',
  //       dataIndex: 'price',
  //       key: 'price',
  //     },
  //     {
  //       title: 'InStock',
  //       key: 'inStock',
  //       dataIndex: 'inStock',
  //       render: (_, { inStock }) => (
  //         <>
  //           {inStock.map((tag) => {
  //             let color = tag ? 'geekblue' : 'green';
  //             if (tag === false) {
  //               color = 'volcano';
  //             }
  //             return (
  //               <Tag color={color} key={tag}>
  //                 {tag.toUpperCase()}
  //               </Tag>
  //             );
  //           })}
  //         </>
  //       ),
  //     },
  //   ];

  return (
    <div>
      <Table columns={columns} dataSource={props.products} />;{/* <Table> */}
      {/* <tbody>
          <tr>
            <th>Name</th>
            <th>price</th>
          </tr>
          {props.products.map((product) => {
            return (
              <ProductRow
                key={product.id}
                name={product.name}
                price={product.price}
                inStock={product.inStock}
              ></ProductRow>
            );
          })}
        </tbody> */}
      {/* </Table> */}
    </div>
  );
};

export default ProductTable;
