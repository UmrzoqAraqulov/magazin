let card = document.querySelector(".card");
let search = document.querySelector(".search .tex");

let paginition = document.querySelector(".paginition");

let limit = 10,active = 0, search_value = "";


function productCard({ image, rating, price, description }) {
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

function page_boxes() {
    let searchProducts = products.filter((el) =>
        el.description.toLowerCase().includes(search_value)
    );
    let start = active * limit;
    
    card.innerHTML = "";
    
    searchProducts.slice(start, start + limit).forEach((el) => {
        card.innerHTML += productCard(el);
    });
    
    
    let  pages_count = Math.ceil(searchProducts.length / limit);
    let item = "";
    if(searchProducts.length > limit){
        if(active != 0){
            item = `<li onclick="getPage(${--active})"  class="page-item">
            <span class="page-link">Previous</span>
          </li>`;
        }
        else{
            item = `<li onclick="getPage(${--active})" class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>`
        }
    }
    active++;
    for (let i = 0; i < pages_count; i++) {
        item += `<li onclick="getPage(${i})" class="page-item ${
            i == active ? "active" : ""
          }"><span class="page-link">${i + 1}</span></li>`
    }

    if(searchProducts.length > limit){
        if(active == pages_count - 1){
            item += `<li onclick="getPage(${++active})" class="page-item">
    <span class="page-link disabled">Next</span>
    </li>`
        }
        else{
            item += `<li onclick="getPage(${++active})" class="page-item">
    <span class="page-link">Next</span>
    </li>`
        }
    }
    active--;
    paginition.innerHTML = item;

}

page_boxes();

search.addEventListener("keyup", function () {
    search_value = this.value.trim().toLowerCase();
    page_boxes();
  });
  
  function getPage(page) {
    active = page;
    page_boxes();
  }