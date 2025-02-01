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

function basketTemplate(index) {
  let basketRef = document.getElementById("addFood");
  basketRef.innerHTML += ` 
   
          <div class="menuList" id="foodField${index}">
            <span class="boldTitleBasket">${myMainDishes[index].name}</span>

            <div class="priceList">
              <img onclick="addToCartMinus(${index})" class="minus" src="./assets/img/minus.png"/>
              <p id="counter${index}">${myMainDishes[index].amount}x</p>
              <img onclick="addToCart(${index})" class="plus" src="./assets/img/plus.png"/>
              <p id="finalPrice${index}">${myMainDishes[index].price}€</p>
              <img onclick="deleteDish(${index})" class="trash" src="./assets/img/trash.png"/>
            </div>
          </div>
    `;
  getInvoiceTemplate(index);
}

function getInvoiceTemplate() {
  let sum = 0;

  for (let indexMain = 0; indexMain < myMainDishes.length; indexMain++) {
    let result = myMainDishes[indexMain];
    sum = sum + result.amount * result.price;
  }

  let invoiceRef = document.getElementById("invoice");
  invoiceRef.innerHTML = "";
  invoiceRef.innerHTML = `<div class="divide">
                  <div class="line"></div>
                </div>
                <table>
                  <tr>
                    <td class="costs">Zwischensumme</td>
                    <td id="invoicePrice" class="costs">${sum.toFixed(2)}€</td>
                  </tr>
                  <tr>
                    <td class="costs">Lieferkosten</td>
                    <td class="costs">2.50€</td>
                  </tr>
                  <tr>
                    <td class="boldTitleBasket">Gesamt</td>
                    <td id="invoiceAllCosts" class="boldTitleBasket">${(sum + 2.5).toFixed(2)}€</td>
                  </tr>
                </table>`;

    if (sum == 0){
      
    document.getElementById("removeInfo").style = "";
    document.getElementById("removeInfo").innerHTML = 
                                                      `<img src="./assets/img/empty-basket.png" alt="">
                                                      <span>Warenkorb leer</span>`;
                                                      
                                                      
    let invoiceRef = document.getElementById("invoice");
    invoiceRef.style = "display:none";
    }
}















function getSweetDishTemplate(indexSweet) {
  return `<div class="foodCard gap border" id="foodCard_${indexSweet}" onclick="addToCartSweets(${indexSweet})">
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

function basketSweetsTemplate(indexSweet) {
  let basketRef = document.getElementById("addFood");
  basketRef.innerHTML += ` 
   
          <div class="menuList" id="foodSweetField${indexSweet}">
            <span class="boldTitleBasket">${mySweetDishes[indexSweet].name}</span>

            <div class="priceList">
              <img onclick="addToCartSweetsMinus(${indexSweet})" class="minus" src="./assets/img/minus.png"/>
              <p id="counterSweets${indexSweet}">${mySweetDishes[indexSweet].amount}x</p>
              <img onclick="addToCartSweets(${indexSweet})" class="plus" src="./assets/img/plus.png"/>
              <p id="finalPriceSweets${indexSweet}">${mySweetDishes[indexSweet].price}€</p>
              <img onclick="deleteSweetDish(${indexSweet})" class="trash" src="./assets/img/trash.png"/>
            </div>
          </div>
    `;
  getInvoiceTemplate(indexSweet);
}
