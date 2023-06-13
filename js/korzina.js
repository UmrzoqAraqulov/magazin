let countInKorzinaProduct = document.querySelector(".countInKorzinaProduct");
let countProductTitle = document.querySelector(".countProductTitle");

let cartsJson = localStorage.getItem("cartsKorzina");
let carts = JSON.parse(cartsJson) || [];

function countProduct(){
countInKorzinaProduct.textContent = carts.length;
countProductTitle.textContent = carts.length;
}
countProduct();
function addKorzina(i){
    let product = products.find((el) => el.id === i);
    
    let check = carts.find((el) => el.id === i)

    if(check){
        product.quantity++;
        carts.map((el) => {
           return el.id === i ? product:el;
        });
    }else{
        product.quantity = 1;
        carts.push(product);
    }
    localStorage.setItem("cartsKorzina",JSON.stringify(carts));
    countProduct();
    console.log(carts.length);
}