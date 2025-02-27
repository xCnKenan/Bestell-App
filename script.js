let delivery = true;
let finalResult = 0;
let priceOfAllDishes = 0;
let costs = 5;
let sumOfDeliver = 0;
let sumOfPriceOfDishes = 0;
let finalResultOfSweets = 0;
let priceOfAllDishesOfSweets = 0;
let sumOfDeliverOfSweets = 0;

function init() {
  renderMainDishes();
}

function renderMainDishes() {
  let foodRef = document.getElementById("allDishes");
  foodRef.innerHTML = "";
  for (let index = 0; index < mainDishes.length; index++) {
    foodRef.innerHTML += getMainDishTemplate(index);
  }
}

function addToCart(index) {
  document.getElementById("removeInfo").style = "display:none";
  if (delivery == true && basket[index].amount === 0) {
    startToCalculate(index);
  } else if (delivery == true && basket[index].amount >= 0) {
    startMoreToCalculate(index);
  }
  if (delivery == false && basket[index].amount === 0) {
    startToCalculate(index);
  } else if (delivery == false && basket[index].amount >= 0) {
    startMoreToCalculate(index);
  }
  scrollbar();
}

function startToCalculate(index) {
  addNewKindOfDish(index);
  calculateInvoice(index);
}

function startMoreToCalculate(index) {
  additionAmmount(index);
  additionPrice(index);
  calculateInvoice(index);
}

function scrollbar() {
  let basketRef = document.getElementById("basketRefs");
  if (sumOfPriceOfDishes > 0) {
    basketRef.classList.add("basketRefs");
  } else if (sumOfPriceOfDishes == 0) {
    basketRef.classList.remove("basketRefs");
  }
  basketRef.scrollTop = basketRef.scrollHeight;
}

function addNewKindOfDish(index) {
  let infoRef = document.getElementById("removeInfo");
  finalResult = manageAdditionOrder(index);
  basket[index].newPrice = finalResult;
  infoRef.innerHTML = "";
  infoRef.innerHTML = basketTemplate(index);
}

function manageAdditionOrder(index) {
  basket[index].amount++;
  let calculation = basket[index].amount * basket[index].price;
  return calculation.toFixed(2);
}

function calculateInvoice() {
  let sumOfDishes = 0;
  if (delivery == true) {
    calculateDeliverCosts(sumOfDishes);
  }

  if (delivery == false) {
    calculatePickUpCosts(sumOfDishes);
  }

  if (sumOfPriceOfDishes < 35 && delivery == true && sumOfPriceOfDishes != 0) {
    emptyAll();
  }
}

function calculateDeliverCosts(sumOfDishes) {
  for (let index = 0; index < basket.length; index++) {
    let result = basket[index];
    sumOfDishes = sumOfDishes + result.amount * result.price;
  }
  priceOfAllDishes = sumOfDishes;
  sumOfPriceOfDishes = priceOfAllDishes + priceOfAllDishesOfSweets;
  getInvoiceTemplate(sumOfPriceOfDishes);
  getTemplateOfDeliverCosts(sumOfPriceOfDishes);
}

function calculatePickUpCosts(sumOfDishes) {
  for (let index = 0; index < basket.length; index++) {
    let result = basket[index];
    sumOfDishes = sumOfDishes + result.amount * result.price;
  }
  priceOfAllDishes = sumOfDishes;
  sumOfPriceOfDishes = priceOfAllDishes + priceOfAllDishesOfSweets;
  getInvoiceTemplate(sumOfPriceOfDishes);
}

function emptyAll() {
  let purchaseBtnForDeliverRef = document.getElementById(
    "purchaseBtnForDeliver"
  );
  let btnDeliverRef = document.getElementById("btnDeliver");
  purchaseBtnForDeliverRef.classList.add("inactive");
  btnDeliverRef.classList.add("btnDeliver");
}

function additionAmmount(index) {
  let currentNumber = document.getElementById(`counter` + index);
  currentNumber.innerHTML = "";
  basket[index].amount++;
  currentNumber.innerHTML = `${basket[index].amount}x`;
}

function additionPrice(index) {
  let finalPrice = document.getElementById(`finalPrice` + index);
  finalPrice.innerHTML = ``;
  let calculationOfPrice = basket[index].amount * basket[index].price;
  basket[index].newPrice = calculationOfPrice;
  finalResult = calculationOfPrice;
  finalPrice.innerHTML = `${calculationOfPrice.toFixed(2)}€`;
}

function addToCartMinus(index) {
  if (basket[index].amount > 1) {
    calculateSubtractOfDish(index);
    subtractAmmount(index);
    calculateInvoice(index);
  } else if ((basket[index].amount = 1)) {
    removeDishFromBasket(index);
  }
}

function calculateSubtractOfDish(index) {
  let calculation = basket[index].newPrice - basket[index].price;
  basket[index].newPrice = calculation;
  let currentPrice = document.getElementById(`finalPrice` + index);
  currentPrice.innerHTML = ``;
  currentPrice.innerHTML = `${calculation.toFixed(2)}€`;
}

function subtractAmmount(index) {
  let currentNumber = document.getElementById(`counter` + index);
  currentNumber.innerHTML = "";
  basket[index].amount--;
  currentNumber.innerHTML = `${basket[index].amount}x`;
}

function removeDishFromBasket(index) {
  let foodFieldRef = document.getElementById("foodField" + index);
  basket[index].amount = 0;
  basket[index].newPrice = 0;
  foodFieldRef.remove();
  calculateInvoice(index);
  scrollbar();
}

function deliverButton(sumOfPriceOfDishes) {
  delivery = true;
  if (sumOfPriceOfDishes == 0) {
    getAgainDefaultBasketTemplate();
  } else if (delivery == true) {
    showCosts(sumOfPriceOfDishes);
  }
}

function showCosts(sumOfPriceOfDishes){
  getTemplateOfDeliverCosts(sumOfPriceOfDishes);
  sumOfDeliver = costs + sumOfPriceOfDishes;
  getAllCostsTemplate(sumOfPriceOfDishes, sumOfDeliver);
  calculateInvoice();
}

function pickUpButton(sumOfPriceOfDishes) {
  delivery = false;
  let infoRef = document.getElementById("informationDeliver");
  if (sumOfPriceOfDishes == 0) {
    getAgainDefaultBasketTemplate();
  } else if (delivery == false) {
    infoRef.innerHTML = "";
    getAllCostsOfDeliverTemplate(sumOfPriceOfDishes);
  }
}

function getInvoiceTemplate(sumOfPriceOfDishes) {
  for (let index = 0; index < basket.length; index++) {
    if (
      sumOfPriceOfDishes == 0 &&
      basket[index].amount == 0 &&
      basket[index].newPrice == 0
    ) {
      getDefaultBasketTemplate();
    } else if (delivery == true) {
      let sumOfDeliver = costs + sumOfPriceOfDishes;
      getAllCostsTemplate(sumOfPriceOfDishes, sumOfDeliver);
    } else if (delivery == false) {
      getAllCostsOfDeliverTemplate(sumOfPriceOfDishes);
    }
  }
}

function getTemplateOfDeliverCosts(sumOfPriceOfDishes) {
  let deliverCostsRef = document.getElementById("informationDeliver");
  deliverCostsRef.innerHTML = "";

  if (sumOfPriceOfDishes <= 0) {
    deliverCostsRef.innerHTML = "";
  } else if (sumOfPriceOfDishes <= 35) {
    deliverCostsRef.innerHTML = showTemplate(sumOfPriceOfDishes);
  }
}
