 function applyCoupon() {
    let coupon = document.getElementById("couponCode").value.trim().toUpperCase();
    let subtotal = 899;
    let shipping = 50;
    let total = subtotal + shipping;
    let message = "";

    if (coupon === "DISCOUNT10") {
      total = total - 100;
      message = "Coupon applied successfully! ₹100 off.";
    } else if (coupon === "FREESHIP") {
      total = subtotal;
      shipping = 0;
      message = "Free shipping applied!";
      document.getElementById("shipping").innerText = shipping;
    } else if (coupon === "") {
      message = "Please enter a coupon code.";
    } else {
      message = "Invalid coupon code.";
    }

    document.getElementById("total").innerText = total;
    document.getElementById("couponMessage").innerText = message;
  }