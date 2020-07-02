import React from 'react';
import PropTypes from 'prop-types';

function ProductTable(props) {


    const {products} = props ;
   console.log(products)
    
    const thTable = (
      <tr style={{color:'White',fontSize:'150px',backgroundColor:"pink"}}>
        <th style={{padding:'40px'}}>name</th>
        <th style={{padding:'40px'}}>price</th> 
        <th style={{padding:'40px'}}>category</th>
      </tr>
    );

       


    const tdTable = products.map((product) =>
     <tr style={{fontSize:'50px' }}>
    <td style={{padding:'20px'}}>{product.name} </td>
    <td style={{color:'green'}}>{product.price} $</td>
    <td style={{backgroundColor:'#e6ffe6'}}>{product.category}</td> 
  </tr> 

      
        );



  return (
    <table style={{textAlign:"center",fontFamily:'arial',width:'100%'}}>
            {thTable}

        {tdTable}

    </table>
  );

}

export default ProductTable ;

  ProductTable.propTypes ={
  products: PropTypes.arrayOf(PropTypes.object),
  
} ;

