let card = document.querySelector(".yangilar .card");

function productCard({image, rating, price, description}) {
    let box = `<div class="box">
    <div class="img">
        <img src=${image} alt="">
        <div class="heard">
            <i class="fa-regular fa-heart"></i>
        </div>
    </div>
    <div class="text">
        <h4>${price} ₽</h4>
    </div>
    <p class="info">${description}</p>
    <div class="stars">
        ${getRating(rating)}
    </div>
    <button class="btn">В корзину</button>
</div>`

return box;
}

let element = products.slice(-5,-1).filter((el) => el.discount > 0);
let cardValue = "";
for(box of element){
    cardValue += productCard(box);
}

console.log(cardValue);

card.innerHTML = cardValue;
