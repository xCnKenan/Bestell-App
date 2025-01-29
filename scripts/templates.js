function getMainDishTemplate(index) {
  return `<div class="foodCard gap border" id="foodCard_${index}" onclick="addToCart(${index})">
            <div class="foodCardBody">
              <p class="boldTitle">${myMainDishes[index].name}</p>
              <p class="dishDescription">${myMainDishes[index].description}</p>
              <p class="coloredPrice">${myMainDishes[index].price}€</p>
            </div>
            <div class="addToBasket">
              <img src="./assets/img/plus.png" />
            </div>
          </div>`;
}

function getSweetDishTemplate(indexSweet) {
  return `<div class="foodCard gap border">
            <div class="foodCardBody">
              <p class="boldTitle">${mySweetDishes[indexSweet].name}</p>
              <p class="dishDescription">${mySweetDishes[indexSweet].description}</p>
              <p class="coloredPrice">${mySweetDishes[indexSweet].price}€</p>
            </div>
            <div class="addToBasket">
              <img src="./assets/img/plus.png" />
            </div>
          </div>`;
}

function basketTemplate(index) {
  let basketRef = document.getElementById("shoppingCart");
    basketRef.innerHTML += ` <div class="menuList" id="foodField_${index}">
            <span class="boldTitleBasket">${myMainDishes[index].name}</span>

            <div class="priceList">
              <img onclick="addToCartMinus(${index})" class="minus" src="./assets/img/minus.png"/>
              <p id="counter${index}">${myMainDishes[index].amount}x</p>
              <img onclick="addToCart(${index})" class="plus" src="./assets/img/plus.png"/>
              <p id="finalPrice${index}">${myMainDishes[index].price}€</p>
              <img class="trash" src="./assets/img/trash.png"/>
            </div>
          </div>
        `;
  getInvoiceTemplate(index);
}

function getInvoiceTemplate(index) {
  let invoiceRef = document.getElementById("invoice");

  invoiceRef.innerHTML = "";

  invoiceRef.innerHTML = `<div class="divide">
              <div class="line"></div>
            </div>
            <table>
              <tr>
                <td class="costs">Zwischensumme</td>
                <td id="invoicePrice" class="costs">${myMainDishes[index].price}€</td>
              </tr>
              <tr>
                <td class="costs">Lieferkosten</td>
                <td class="costs">2.50€</td>
              </tr>
              <tr>
                <td class="boldTitleBasket">Gesamt</td>
                <td id="invoiceAllCosts" class="boldTitleBasket">${myMainDishes[index].price}€</td>
              </tr>
            </table>`;
}