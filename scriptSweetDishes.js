function renderSweetDishes(){
    let foodRef = document.getElementById("allDishes");
    foodRef.innerHTML = "";
    for (let indexSweet = 0; indexSweet < sweetDishes.length; indexSweet++) {
      foodRef.innerHTML += getSweetDishTemplate(indexSweet);
    }
  }

  function addToCartSweets(indexSweet) {
    document.getElementById("removeInfo").style = "display:none";
    if (delivery == true && basketSweet[indexSweet].amount === 0){
      console.log("delivery is true");
      addNewKindOfDishOfSweets(indexSweet);
      calculateInvoiceOfSweets(indexSweet);
    } else if ( delivery == true && basketSweet[indexSweet].amount >= 0){
      console.log("delivery is true");
      additionAmmountOfSweets(indexSweet);
      additionPriceOfSweets(indexSweet);
      calculateInvoiceOfSweets(indexSweet);
    }
  
    if (delivery == false && basketSweet[indexSweet].amount === 0){
      console.log("delivery is false")
      addNewKindOfDishOfSweets(indexSweet);
      calculateInvoiceOfSweets(indexSweet);
    } else if(delivery == false && basketSweet[indexSweet].amount >= 0){
      console.log("delivery is false")
      additionAmmountOfSweets(indexSweet);
      additionPriceOfSweets(indexSweet);
      calculateInvoiceOfSweets(indexSweet);
    }

    if(sumOfPriceOfDishes < 35 && delivery == true && sumOfPriceOfDishes != 0){
      let purchaseBtnForDeliverRef = document.getElementById("purchaseBtnForDeliver");
      let btnDeliverRef = document.getElementById("btnDeliver");
          purchaseBtnForDeliverRef.classList.add("inactive");
          btnDeliverRef.classList.add("btnDeliver");
     }

    scrollbar();
}

function addNewKindOfDishOfSweets(indexSweet) {
    let infoRef = document.getElementById("removeInfo");
    finalResultOfSweets = manageAdditionOrderOfSweets(indexSweet);
    basketSweet[indexSweet].newPrice = finalResultOfSweets;
    infoRef.innerHTML = "";
    infoRef.innerHTML = basketTemplateOfSweets(indexSweet);
  }
  
  function manageAdditionOrderOfSweets(indexSweet) {
    basketSweet[indexSweet].amount++;
    let calculation = basketSweet[indexSweet].amount * basketSweet[indexSweet].price;
    return calculation.toFixed(2);
  }
  
  function calculateInvoiceOfSweets() {
    let sumOfDishes = 0;
    if (delivery == true){
      for (let index = 0; index < basketSweet.length; index++) {
        let result = basketSweet[index];
        sumOfDishes = sumOfDishes + result.amount * result.price;
        }
      priceOfAllDishesOfSweets = sumOfDishes;
      sumOfPriceOfDishes = priceOfAllDishes + priceOfAllDishesOfSweets;
      getInvoiceTemplateOfSweets(sumOfPriceOfDishes);
      getTemplateOfDeliverCostsOfSweets(sumOfPriceOfDishes);
    } 
  
    if (delivery == false){
      for (let index = 0; index < basketSweet.length; index++) {
        let result = basketSweet[index];
        sumOfDishes = sumOfDishes + result.amount * result.price;
      }
      priceOfAllDishesOfSweets = sumOfDishes;
      sumOfPriceOfDishes = priceOfAllDishes + priceOfAllDishesOfSweets;
      getInvoiceTemplateOfSweets(sumOfPriceOfDishes);
     } 
    }
  
  function additionAmmountOfSweets(indexSweet) {
    let currentNumber = document.getElementById(`counterSweet` + indexSweet);
    currentNumber.innerHTML = "";
    basketSweet[indexSweet].amount++;
    currentNumber.innerHTML = `${basketSweet[indexSweet].amount}x`;
  }
  
  function additionPriceOfSweets(indexSweet) {
    let finalPrice = document.getElementById(`finalPriceSweet` + indexSweet);
    finalPrice.innerHTML = ``;
    let calculationOfPrice = basketSweet[indexSweet].amount * basketSweet[indexSweet].price;
    basketSweet[indexSweet].newPrice = calculationOfPrice;
    finalResult = calculationOfPrice;
    finalPrice.innerHTML = `${calculationOfPrice.toFixed(2)}€`;
  }
  
  function addToCartMinusSweets(indexSweet) {
    if (basketSweet[indexSweet].amount > 1) {
      calculateSubtractOfDishOfSweets(indexSweet);
      subtractAmmountOfSweets(indexSweet);
      calculateInvoiceOfSweets(indexSweet);
    } else if (basketSweet[indexSweet].amount = 1) {
      removeDishFromBasketOfSweets(indexSweet);
    }
  }
  
  function calculateSubtractOfDishOfSweets(indexSweet) {
    let calculation = basketSweet[indexSweet].newPrice - basketSweet[indexSweet].price;
    basketSweet[indexSweet].newPrice = calculation;
    let currentPrice = document.getElementById(`finalPriceSweet` + indexSweet);
    currentPrice.innerHTML = ``;
    currentPrice.innerHTML = `${calculation.toFixed(2)}€`;
  }
  
  function subtractAmmountOfSweets(indexSweet) {
    let currentNumber = document.getElementById(`counterSweet` + indexSweet);
    currentNumber.innerHTML = "";
    basketSweet[indexSweet].amount--;
    currentNumber.innerHTML = `${basketSweet[indexSweet].amount}x`;
  }
  
  function removeDishFromBasketOfSweets(indexSweet) {
    let foodFieldRef = document.getElementById("foodFieldSweet" + indexSweet);
    basketSweet[indexSweet].amount = 0;
    basketSweet[indexSweet].newPrice = 0;
    foodFieldRef.remove();
    calculateInvoiceOfSweets(indexSweet);
    scrollbar(); 
  }
