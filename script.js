document.addEventListener("DOMContentLoaded", () => {
  const totalPriceEl = document.querySelector(".total");

  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card-body").forEach(card => {
      const unitPriceEl = card.querySelector(".unit-price");
      const quantityEl = card.querySelector(".quantity");
      const unitPrice = parseFloat(unitPriceEl.textContent.replace(" $", ""));
      const quantity = parseInt(quantityEl.textContent);
      total += unitPrice * quantity;
    });
    totalPriceEl.textContent = total + " $";
  }

  document.querySelectorAll(".card-body").forEach(card => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const trashBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");
    const quantityEl = card.querySelector(".quantity");

    // Increase quantity
    plusBtn.addEventListener("click", () => {
      quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
      updateTotal();
    });

    // Decrease quantity
    minusBtn.addEventListener("click", () => {
      let qty = parseInt(quantityEl.textContent);
      if (qty > 0) {
        quantityEl.textContent = qty - 1;
        updateTotal();
      }
    });

    // Delete item
    trashBtn.addEventListener("click", () => {
      card.parentElement.remove(); // remove the card-body
      updateTotal();
    });

    // Like button
    heartBtn.addEventListener("click", () => {
      if (heartBtn.style.color === "red") {
        heartBtn.style.color = "black";
      } else {
        heartBtn.style.color = "red";
      }
    });
  });

  // Initial total
  updateTotal();
});
