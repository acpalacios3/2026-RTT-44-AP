const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');




const countItems = document.getElementById('count-items');

let totalPrice = 0;
let shoppingCart = [];
let productId = 0;
let count = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// count products
function updateItemCount() {
  let totalItems = 0;

  shoppingCart.forEach(function(product) {
    totalItems += product.quantity;
  });

  countItems.textContent = totalItems;
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');

  const price = parseFloat(item.dataset.price);
  const quantity = parseInt(item.dataset.quantity);
  // const productName = item.dataset.item;
   const id = parseInt(item.dataset.id);

  // updateTotalPrice(-price);
  updateTotalPrice(-(price * quantity));
  
  shoppingCart = shoppingCart.filter(function(product) {
    // return product.item !== productName;
    return product.id !== id;
  });
  
  item.remove();
  updateItemCount();
}


// 1. Add Products:
// Test adding products with different names and prices.
// Ensure each product appears in the list with the correct price.


addProductButton.addEventListener("click", function () {

  let item = productNameInput.value;
  let price = parseFloat(productPriceInput.value);


  if (item === "" || isNaN(price)) {
    alert("Please enter a product!");
    return;
  }

  // create product object
  let product = {
    id: productId++,
    item,
    price,
    quantity: 1
  }

  // send the products object to the array
  shoppingCart.push(product);


  // update count the products
    updateItemCount();


  // update price
  updateTotalPrice(price);


  // create li
  let listItem = document.createElement("li");
  listItem.classList.add("cart-item");

  listItem.dataset.id = product.id;  
  listItem.dataset.price = price;
  listItem.dataset.quantity = 1;
  listItem.dataset.item = item;


  // create span product and price

  let productText = document.createElement("span");
  productText.textContent =
    `${item} - $${price.toFixed(2)}`;


  // create span by quantity
  let quantityText = document.createElement("span");
  quantityText.textContent = " Qty: 1 ";


  // create add qty button
  let plusButton = document.createElement("button");

  plusButton.textContent = "+";


  // create subtract qty button
  let minusButton = document.createElement("button");

  minusButton.textContent = "-";



  // Plus button functionality
  plusButton.addEventListener("click", function () {

    let quantity = parseInt(listItem.dataset.quantity);
    quantity++;
    listItem.dataset.quantity = quantity;
    quantityText.textContent = ` Quantity: ${quantity} `;
    
    product.quantity = quantity;

    updateTotalPrice(price);
    updateItemCount();
  });


  // Minus button functionality
  minusButton.addEventListener("click", function () {

    let quantity = parseInt(listItem.dataset.quantity);

    if (quantity > 1) {

      quantity--;
      listItem.dataset.quantity = quantity;
      quantityText.textContent = ` Quantity: ${quantity} `;
     
      product.quantity = quantity;

      updateTotalPrice(-price);
      updateItemCount();
    }
  });


  // create element Remove button
  let removeButton = document.createElement("button");

  removeButton.textContent = "Remove";

  // Remove product, call function removeItem
  removeButton.addEventListener("click", removeItem);

  // Add elements to li
  listItem.appendChild(productText);
  listItem.appendChild(removeButton);

  // 
  listItem.appendChild(quantityText);
  listItem.appendChild(plusButton);
  listItem.appendChild(minusButton);
  
  // Add li to cart
  cart.appendChild(listItem);

  // Clear the input field
  productNameInput.value = "";
  productPriceInput.value = "";


});

