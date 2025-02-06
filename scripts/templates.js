function getMainDishTemplate(index) {
  return `<div class="foodCard gap border" id="foodCard_${index}" onclick="addToCart(${index})">
            <div class="foodCardBody">
              <p class="boldTitle">${mainDishes[index].name}</p>
              <p class="dishDescription">${mainDishes[index].description}</p>
              <p class="coloredPrice">${mainDishes[index].price}€</p>
            </div>
            <div class="addToBasket">
              <img src="./assets/img/plus.png" />
            </div>
          </div>`;
}

function basketTemplate(index) {
  let basketRef = document.getElementById("addFood");
  basketRef.innerHTML += ` 
          <div class="menuList" id="foodField${index}">
            <span class="boldTitleBasket">${mainDishes[index].name}</span>

            <div class="priceList">
              <img onclick="addToCartMinus(${index})" class="minus" src="./assets/img/minus.png"/>
              <p id="counter${index}">${basket[index].amount}x</p>
              <img onclick="addToCart(${index})" class="plus" src="./assets/img/plus.png"/>
              <p id="finalPrice${index}">${basket[index].price}€</p>
              <img onclick="removeDishFromBasket(${index})" class="trash" src="./assets/img/trash.png"/>
            </div>
          </div>
    `;
}

function getInvoiceTemplate(sumOfDishes){

  for (let index = 0; index < basket.length; index++) {
    if(sumOfDishes == 0 && basket[index].amount == 0 && basket[index].newPrice == 0){  // if all dishes gone from basket, show default empty basket
      let invoiceRef = document.getElementById("invoice");
      invoiceRef.innerHTML="";
      document.getElementById("removeInfo").style = "";
      document.getElementById("removeInfo").innerHTML = "";
      document.getElementById("removeInfo").innerHTML =`
            <img src="./assets/img/empty-basket.png" alt="">
            <span>Warenkorb leer</span>`;
    } else {
      let invoiceRef = document.getElementById("invoice");
      invoiceRef.innerHTML = "";
      invoiceRef.innerHTML = `<div class="divide" id="divide">
                <div class="line"></div>
              </div>
              <table>
                <tr>
                  <td class="costs">Zwischensumme</td>
                  <td id="invoicePrice" class="costs">${sumOfDishes.toFixed(2)}€</td>
                </tr>
                <tr>
                  <td class="costs">Lieferkosten</td>
                  <td class="costs">5.00€</td>
                </tr>
                <tr>
                  <td class="boldTitleBasket">Gesamt</td>
                  <td id="invoiceAllCosts" class="boldTitleBasket">${sumOfDishes.toFixed(2)}€</td>
                </tr>
              </table>`;
    }
    
  }

  

  
}