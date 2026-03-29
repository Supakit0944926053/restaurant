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

  // 🔥 ใส่ LINE ID ของคุณตรงนี้
  let lineID = "supakit__k__"; // <-- เปลี่ยนเป็นของคุณ

  let encodedMessage = encodeURIComponent(message);

  // ✅ เด้งเข้าแชทคุณเลย
  const url = `https://line.me/R/ti/p/~${lineID}?text=${encodedMessage}`;

  window.open(url, "_blank");
}
