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

      output += `<div>

    <div class="relative">
        <img class="rounded-md" src="${d.image.desktop}" alt="" ">
        <button class="data-cart absolute top-28">
          <img src="./images/icon-add-to-cart.svg" alt="icon-svg" />
          <h1>Add to Cart</h1>
        </button>
    </div>
      <p class="text-Rose500 text-xs"> ${d.category}</p>
      <h1 class="text-xs text-Rose900 font-bold">${d.name}</h1>
      <h2 class="text-Red font-semibold text-sm">${stringPrice}</h2>
        </div> `;

      desertContainer.innerHTML = output;
    }
  })
  .catch((err) => {
    console.log("Error:", err);
  });
