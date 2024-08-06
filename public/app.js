const desertContainer = document.querySelector("#desert-container");
const chekoutContainer = document.querySelector("#checkout-container");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const dessertData = data;
    let output = "";
    for (let d of dessertData) {
      let stringPrice = d.price.toString();
      if (stringPrice.length === 3) {
        stringPrice = `$${stringPrice}0`;
      } else if (stringPrice.length === 1) {
        stringPrice = ` $${stringPrice}.00`;
      } else {
        stringPrice = `$${stringPrice}`;
      }

      output += 
  `<div>
    <div>
      <img class="data-img" src="${d.image.desktop}" alt="">

      <div class="flex justify-center items-end">
       <button class="data-cart ">
         <img src="./images/icon-add-to-cart.svg" alt="icon-svg" />
         <h1>Add to Cart</h1>
       </button>
      </div>
    </div>

    <div class="my-2"> 
         <p class="data-category"> ${d.category}</p>
        <h1 class="data-name">${d.name}</h1>
        <h2 class="data-price">${stringPrice}</h2>
     </div>
  </div>`;

      desertContainer.innerHTML = output;

      console.log(output)
    }
  })
  .catch((err) => {
    console.log("Error:", err);
  });
