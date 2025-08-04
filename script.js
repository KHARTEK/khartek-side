const products = [ { name: "Grifon GWM-601", brand: "Grifon", price: 7900 }, { name: "Grifon GWM-602", brand: "Grifon", price: 8200 }, { name: "Grifon GWM-603", brand: "Grifon", price: 8500 }, { name: "Grifon GWM-604", brand: "Grifon", price: 8700 }, { name: "Grifon GWM-605", brand: "Grifon", price: 9000 }, { name: "Grifon GWM-606", brand: "Grifon", price: 9200 }, { name: "Grifon GWM-607", brand: "Grifon", price: 9500 }, { name: "Grifon GWM-608", brand: "Grifon", price: 9800 }, { name: "Grifon GWM-609", brand: "Grifon", price: 10000 }, { name: "Grifon GWM-610", brand: "Grifon", price: 10500 }, { name: "Grunhelm GWM-801", brand: "Grunhelm", price: 7700 }, { name: "Grunhelm GWM-802", brand: "Grunhelm", price: 8000 }, { name: "Grunhelm GWM-803", brand: "Grunhelm", price: 8400 }, { name: "Grunhelm GWM-804", brand: "Grunhelm", price: 8700 }, { name: "Grunhelm GWM-805", brand: "Grunhelm", price: 8900 }, { name: "Grunhelm GWM-806", brand: "Grunhelm", price: 9100 }, { name: "Grunhelm GWM-807", brand: "Grunhelm", price: 9400 }, { name: "Grunhelm GWM-808", brand: "Grunhelm", price: 9800 }, { name: "Grunhelm GWM-809", brand: "Grunhelm", price: 10000 }, { name: "Grunhelm GWM-810", brand: "Grunhelm", price: 10600 }, ];

const cart = [];

function displayProducts(list) { const container = document.getElementById("products"); container.innerHTML = ""; list.forEach((p, index) => { const item = document.createElement("div"); item.innerHTML = <h3>${p.name}</h3> <p>${p.brand}</p> <p>${p.price} ?</p> <button onclick="addToCart(${index})">Додати</button>; container.appendChild(item); }); }

function applyFilters() { const brand = document.getElementById("brand-filter").value; const maxPrice = parseFloat(document.getElementById("price-filter").value); let filtered = products; if (brand !== "all") filtered = filtered.filter(p => p.brand === brand); if (!isNaN(maxPrice)) filtered = filtered.filter(p => p.price <= maxPrice); displayProducts(filtered); }

function addToCart(index) { cart.push(products[index]); updateCart(); }

function updateCart() { const ul = document.getElementById("cart-items"); ul.innerHTML = ""; let total = 0; cart.forEach(p => { const li = document.createElement("li"); li.textContent = ${p.name} — ${p.price} ?; ul.appendChild(li); total += p.price; }); document.getElementById("cart-total").textContent = total + " ?"; }

function checkout() { const phone = prompt("Введіть ваш номер телефону для замовлення:"); if (phone) { alert("Дякуємо! Ми зателефонуємо вам для підтвердження замовлення."); cart.length = 0; updateCart(); } }

function setLang(lang) { // Placeholder — тут можна підключити словник для перекладу, якщо потрібно. alert("Мовна версія наразі у розробці. Підтримка: українська."); }

displayProducts(products);