let card1 = document.querySelector(".aksiya .card");

function productCard({image, rating, skidka, price, description}) {
    let box = `<div class="box">
<div class="img">
    <img src=${image} alt="">
    <p class="skidka">-${skidka}%</p>
    <div class="heard">
        <i class="fa-regular fa-heart"></i>
    </div>
</div>
<div class="text">
    <div class="left">
        <h4>${price - price*(skidka/100)} ₽</h4>
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
<button class="btn">В корзину</button>
</div>`

return box;
}

let element1 = products.slice(-5,-1).filter((el) => el.discount > 0);
let cardValue1 = "";
for(box of element1){
    cardValue1 += productCard(box);
}

card1.innerHTML = cardValue1;
