// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Function to render the product list on the page
function renderProductList() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ''; // Clear the list before rendering

  products.forEach(product => {
    const productItem = document.createElement("li");
    productItem.innerHTML = `
      ${product.name} - $${product.price} 
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productItem);
  });
}

// Function to render the cart on the page
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ''; // Clear the cart list before rendering

  if (cart.length === 0) {
    cartList.innerHTML = '<li>Your cart is empty.</li>';
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `${item.name} - $${item.price}`;
      cartList.appendChild(cartItem);
    });
  }
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product); // Add the product to the cart
    sessionStorage.setItem("cart", JSON.stringify(cart)); // Save cart to session storage
    renderCart(); // Update cart display
  }
}

// Function to clear the cart
function clearCart() {
  cart = []; // Empty the cart array
  sessionStorage.setItem("cart", JSON.stringify(cart)); // Save empty cart to session storage
  renderCart(); // Update cart display
}

// Clear cart button functionality
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);

// Initial render
renderProductList();
renderCart();