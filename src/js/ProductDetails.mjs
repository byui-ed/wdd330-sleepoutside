constructor(productId, dataSource)
  this.productId = productId;
  this.product = {};
  this.dataSource = dataSource;


import { getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';


const productId = getParam('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
product.init();

 init() 
// use the datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
// the product details are needed before rendering the HTML
// once the HTML is rendered, add a listener to the Add to Cart button
// Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings from this week on 'this' to understand why.
document.getElementById('addToCart')
  .addEventListener('click', this.addToCart.bind(this));
