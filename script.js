let total = 0;

function addToCart(name, price) {
  const cart = document.getElementById("cart");

  const li = document.createElement("li");
  li.textContent = name + " - " + price + " บาท ";

  const btn = document.createElement("button");
  btn.textContent = "ลบ";
  btn.onclick = function () {
    cart.removeChild(li);
    total -= price;
    document.getElementById("total").textContent = total;
  };

  li.appendChild(btn);
  cart.appendChild(li);

  total += price;
  document.getElementById("total").textContent = total;
}

// ✅ แยกออกมา
function clearCart() {
  document.getElementById("cart").innerHTML = "";
  total = 0;
  document.getElementById("total").textContent = total;
}

// ✅ แยกออกมา
function sendOrder() {
  const items = document.querySelectorAll("#cart li");

  if (items.length === 0) {
    alert("ยังไม่มีสินค้า");
    return;
  }

  let message = "🍰 ร้านขนมแม่เตย\n";
  message += "🛒 ออเดอร์ลูกค้า\n";
  message += "------------------\n";

  items.forEach(item => {
    let text = item.textContent.replace("ลบ", "").trim();
    message += "• " + text + "\n";
  });

  message += "------------------\n";
  message += "💰 รวม: " + total + " บาท";

  let encodedMessage = encodeURIComponent(message);

  // ✅ แบบถูก (ไม่ต้องใส่ LINE ID)
  let url = "https://line.me/R/msg/text/?" + encodedMessage;

  window.open(url, "_blank");
}
