  function getSweetDishTemplate(indexSweet) {
    return `<div class="foodCard gap border" id="foodCardSweet_${indexSweet}" onclick="addToCartSweets(${indexSweet})">
              <div class="foodCardBody">
                <p class="boldTitle">${sweetDishes[indexSweet].name}</p>
                <p class="dishDescription">${sweetDishes[indexSweet].description}</p>
                <p class="coloredPrice">${sweetDishes[indexSweet].price}€</p>
              </div>
              <div class="addToBasket">
                <img src="./assets/img/plus.png" />
              </div>
            </div>`;
  }
  
  function basketTemplateOfSweets(indexSweet) {
    let basketRef = document.getElementById("addFood");
    basketRef.innerHTML += `<div class="menuList" id="foodFieldSweet${indexSweet}">
              <span class="boldTitleBasket">${sweetDishes[indexSweet].name}</span>
  
              <div class="priceList">
                <img onclick="addToCartMinusSweets(${indexSweet})" class="minus" src="./assets/img/minus.png"/>
                <p id="counterSweet${indexSweet}">${basketSweet[indexSweet].amount}x</p>
                <img onclick="addToCartSweets(${indexSweet})" class="plus" src="./assets/img/plus.png"/>
                <p id="finalPriceSweet${indexSweet}">${basketSweet[indexSweet].newPrice}€</p>
                <img onclick="removeDishFromBasketOfSweets(${indexSweet})" class="trash" src="./assets/img/trash.png"/>
              </div>
            </div>
      `;
  }
  
  function getInvoiceTemplateOfSweets(sumOfPriceOfDishes) {
    for (let index = 0; index < basketSweet.length; index++) {
      if (sumOfPriceOfDishes == 0 && basketSweet[index].amount == 0 && basketSweet[index].newPrice == 0) {
        getDefaultBasketTemplate();
      }
      else if(delivery == true) {
        let sumOfDeliver = costs + sumOfPriceOfDishes;
        getAllCostsTemplate(sumOfPriceOfDishes, sumOfDeliver);
      } else if(delivery == false) {
        getAllCostsOfDeliverTemplateOfSweets(sumOfPriceOfDishes);
      }
    }
  }
  
  function getDefaultBasketTemplate() {
    let invoiceRef = document.getElementById("invoice");
    invoiceRef.innerHTML = "";
    document.getElementById("removeInfo").style = "";
    document.getElementById("removeInfo").innerHTML = "";
    document.getElementById("removeInfo").innerHTML =
     `<img src="./assets/img/empty-basket.png" alt="">
        <span>Warenkorb leer</span>`;
  }
  
  function getAgainDefaultBasketTemplate() {
    document.getElementById("basketRefs").innerHTML =
     `<div id="informationDeliver"></div>
    
            <div id="shoppingCart">
              <!--hier kommen neue elemente rein--> 
              <div id="removeInfo" id="" class="emptyBasket">
              <img src="./assets/img/empty-basket.png" alt="">
              <span>Warenkorb leer</span>
              </div>
            </div>
  
            <div id="addFood"></div>
  
            <div id="invoice"></div>`;
  }
   
  function getAllCostsOfDeliverTemplateOfSweets(sumOfPriceOfDishes) {
    let invoiceRef = document.getElementById("invoice");
    invoiceRef.innerHTML = "";
    invoiceRef.innerHTML = `<div class="divide" id="divide">
              <div class="line"></div>
            </div>
            <table>
              <tr>
                <td class="costs">Zwischensumme</td>
                <td id="invoicePrice" class="costs">${sumOfPriceOfDishes.toFixed(2)}€</td>
              </tr>
              
              <tr>
                <td class="boldTitleBasket">Gesamt</td>
                <td id="invoiceAllCosts" class="boldTitleBasket">${sumOfPriceOfDishes.toFixed(2)}€</td>
              </tr>
            </table>`;
  }
  
  function getTemplateOfDeliverCostsOfSweets(sumOfPriceOfDishes) {
    let deliverCostsRef = document.getElementById("informationDeliver");
    deliverCostsRef.innerHTML = '';
  
    if(sumOfPriceOfDishes <= 0){
      deliverCostsRef.innerHTML = '';
    } else if (sumOfPriceOfDishes <= 35) {
      deliverCostsRef.innerHTML = `<div class="informationDeliver">
      <div class="bgInformationDeliver">Noch <b>${(35 - sumOfPriceOfDishes).toFixed(2)}€</b> bis der Mindestbestellwert erreicht ist
      </div>
      </div>`;
    }
  }