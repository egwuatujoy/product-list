const confirmBtn = document.querySelector("#confirm-btn");
const confirmSection = document.querySelector("#confirm-session");
const desertContainer = document.querySelector("#desert-container");

// for confirm Btn
confirmBtn.addEventListener("click", () => {
  confirmSection.classList.toggle("hidden");
});

// will add products to the desertContainer
let products = [];

function addProducts() {
  desertContainer.innerHTML = "";

  if (products.length > 0) {
    products.forEach((product) => {
      let newPrice = product.price.toString();

      if (newPrice.length === 3) {
        newPrice = `$${newPrice}0`;
      } else if (newPrice.length === 1) {
        newPrice = `$${newPrice}.00`;
      } else {
        newPrice;
      }

      let myBtn = `<div class="data-cart-div">
             <button class="data-cart" id="data-cart">
             <img
                src='./images/icon-add-to-cart.svg'
                alt='icon-add-to-cart'
              />
              Add to Cart
              </button>
          </div>`;

      // the products
      let newProducts = document.createElement("div");
      newProducts.innerHTML = `<div>
              <img
                src="${product.image.desktop}"
                alt="image-waffle-desktop"
                class=""
              />
              ${myBtn}
            </div>
            <div class="">   
              <p class="data-category">${product.category}</p>
              <h1 class="data-name">${product.name}</h1>
              <h1 class="data-price">${newPrice}</h1>
            </div>`;
      desertContainer.appendChild(newProducts);
    });
  }
}

// fetch products
const initApp = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      addProducts();
    });
};

initApp();

let counterBtn = `
    <button class="decrease" onclick="decrease(this)" >
      <img src="./images/icon-decrement-quantity.svg" alt="icon-decrement-quantity">
    </button>
     <hi class="text">1</hi>
    <button class="increase" onclick="increase(this)" >
      <img src="./images/icon-increment-quantity.svg" alt="icon-increment-quantity">
   </button>
   `;

desertContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("data-cart")) {
    e.target.className = "data-cart-selected";
    e.target.innerHTML = counterBtn;
  }
});

function decrease(e) {
  let text = e.nextElementSibling;
  text.textContent = parseInt(text.textContent) - 1;
  if (text.textContent == 0) {
    e.parentNode.parentNode.innerHTML = `<button class="data-cart" id="data-cart">
             <img
                src='./images/icon-add-to-cart.svg'
                alt='icon-add-to-cart'
              />
              Add to Cart
              </button>`;
  }
}

function increase(e) {
  let text = e.previousElementSibling;
  text.textContent = parseInt(text.textContent) + 1;
  console.log(text);
}
