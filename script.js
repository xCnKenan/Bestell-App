let finalResult;
let sumOfDishes;

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
  // document.getElementById("removeInfo").style = "";
  document.getElementById("removeInfo").style = "display:none";

  if (basket[index].amount === 0) {
    //cleaner code!!!
    addNewKindOfDish(index);
    calculateInvoice(index);
  } else if (basket[index].amount >= 0) {
    additionAmmount(index);
    finalResult = additionPrice(index);
    calculateInvoice(index);
  }
}

// clean code here
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
  return Number.parseFloat(calculation).toFixed(2);
}

function calculateInvoice() {
  let sumOfDishes = 0;
    for (let index = 0; index < basket.length; index++) {
      let result = basket[index];
      sumOfDishes = sumOfDishes + result.amount * result.price;
    }
    getInvoiceTemplate(sumOfDishes);
    calculateDeliverCosts(sumOfDishes);
 
  }
//clean code here

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
  finalPrice.innerHTML = `${calculationOfPrice.toFixed(2)}€`;
}
//subtract here
function addToCartMinus(index) {
  if (basket[index].amount > 1) {
    calculateSubtractOfDish(index);
    subtractAmmount(index);
    calculateInvoice(index);
  } else if (basket[index].amount = 1) {
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
}

//infoDeliver here
function calculateDeliverCosts(sumOfDishes) {
  if(sumOfDishes <= 35){
    getTemplateOfDeliverCosts(sumOfDishes);
  } else{
    removeTemplateofDeliverCosts();
  }
}

function pickUpFood(){
  deliverCostsRef = document.getElementById("deliverCosts");
  priceDeliverCostsRef = document.getElementById("priceDeliverCosts");
  informationDeliverRef = document.getElementById("informationDeliver");

  deliverCostsRef.innerHTML='';
  priceDeliverCostsRef.innerHTML='';
  informationDeliverRef.innerHTML='';
}


