const cardKorzina = document.querySelector(".card");

function productCard({
  image,
  rating,
  discount,
  price,
  description,
  id,
  quantity,
}) {
  let box = `
<div class="box">
<div class="img">
    <img src=${image} alt="">
    <p class="skidka">-${discount}%</p>
    <div class="heard">
        <i class="fa-regular fa-heart"></i>
    </div>
</div>
<div class="text">
    <div class="left">
        <h4>${(price * (1 - discount / 100)).toFixed(2)} ₽</h4>
        <p>С картой</p>
    </div>
    <div class="right">
        <h4>${price} ₽</h4>
        <p>Обычная</p>
    </div>
</div>
<p class="info"> ${description}</p>
<div class="stars">
    ${getRating(rating)}
</div>
<div class="add">
    <button onclick="del(${id})">-</button>
    <button>${quantity}</button>
    <button onclick="add(${id})">+</button>
</div>
</div>`;

  return box;
}

function getting() {
  cardKorzina.innerHTML = "";
  carts.map((el) => {
    cardKorzina.innerHTML += productCard(el);
  });
}

getting();

function add(i) {
  carts = carts.map((el) => {
    if (el.id == i) {
      el.quantity++;
    }
    return el;
  });
  localStorage.setItem("cartsKorzina", JSON.stringify(carts));
  getting();
}

function del(i) {
  let product = carts.find((el) => el.id === i);
  if(product.quantity === 1){
    carts = carts.filter((el) => el.id !== i);
  }else{
    carts = carts.map((el) => {
    if (el.id == i) {
      el.quantity --;
    }
    return el;
  });
  }
  localStorage.setItem("cartsKorzina", JSON.stringify(carts));
  getting();
  countProduct();
}