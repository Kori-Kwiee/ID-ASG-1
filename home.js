const toggleBtn = document.getElementById("toggle-glitch-btn");
const hero = document.querySelector(".hero");

toggleBtn.addEventListener("click", () => {
hero.classList.toggle("glitch");

if (hero.classList.contains("glitch")) {
    toggleBtn.textContent = "Stop trauma!";
} else {
    toggleBtn.textContent = "Traumatize them!";
}
});

let cart = [];
      
  const buttons = document.querySelectorAll(".addcartitem");
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price);
      const exists = cart.some(item => item.name === name);
      if (exists) {
        alert("Luka: One only.");
        return;
      }

      cart.push({ name, price });
      updateCart();
    });
  });

  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      total += item.price;

      const li = document.createElement("li");
      li.textContent = `${item.name} — $${item.price}`;
      cartItems.appendChild(li);
    });

    totalDisplay.textContent = `Total: $${total}`;
  }


  const carting = document.getElementById("emptcart");
  carting.addEventListener("click", () => {
  cart = [];
  updateCart();
  alert("Luka: Products bought successfully, enjoy.")
});
