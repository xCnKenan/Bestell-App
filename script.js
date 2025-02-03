let finalResult;


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
  
  document.getElementById("removeInfo").style = "";
  document.getElementById("removeInfo").style = "display:none";

  if (basket[index].amount === 0) {  //cleaner code!!!
    addNewKindOfDish(index);
    calculateInvoice(index);
  }  
  else if (basket[index].amount >= 0) {
    additionAmmount(index);
    finalResult = additionPrice(index);
    calculateInvoice(index);
  }
}

// clean code here
function addNewKindOfDish(index){
  let infoRef = document.getElementById("removeInfo");
  finalResult = manageAdditionOrder(index);
  basket[index].price = finalResult;
  infoRef.innerHTML = "";
  infoRef.innerHTML = basketTemplate(index);
}

function manageAdditionOrder(index){
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
}
//clean code here

function additionAmmount(index) {
  let currentNumber = document.getElementById(`counter` + index);
    currentNumber.innerHTML = "";
    basket[index].amount++;
    currentNumber.innerHTML = `${basket[index].amount}x`;
}

function additionPrice(index){
  let finalPrice = document.getElementById(`finalPrice` + index);
  finalPrice.innerHTML = ``;
  let calculationOfPrice = basket[index].amount * basket[index].price;
  finalPrice.innerHTML = `${calculationOfPrice.toFixed(2)}€`;
}














function addToCartMinus(index) {
  if (mainDishes[index].amount > 1) {
    mainDishes[index].amount--;
    let currentNumber = document.getElementById(`counter` + index);
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `${mainDishes[index].amount}x`;
    finalResult = finalResult - mainDishes[index].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    let currentPrice = document.getElementById(`finalPrice` + index);
    currentPrice.innerHTML = ``;
    currentPrice.innerHTML = `${finalResult}€`;
  } else if ((mainDishes[index].amount = 1)) {
    let foodFieldRef = document.getElementById("foodField" + index);
    mainDishes[index].amount = 0;
    foodFieldRef.remove();
  }
}

function deleteDish(index) {
  let foodFieldRef = document.getElementById("foodField" + index);
  mainDishes[index].amount = 0;
  foodFieldRef.remove();
}