import React from 'react';

import ReactDOM from 'react-dom';
import ProductTable from './ProductTable.js';


const products  =[{name:"pantalon",price:100,category:"Clothes"},
            {name:"Robe",price:120,category:"Clothes"},
            {name:"samsung",price:600,category:"Electronics"},
            {name:"iPhone",price:900,category:"Electronics"}] ;
console.log(products )

ReactDOM.render(<ProductTable products={products}/>, document.getElementById('root'));