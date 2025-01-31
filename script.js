function init() {
  renderMainDishes();
}

function renderMainDishes() {
  let foodRef = document.getElementById("allDishes");
  foodRef.innerHTML = "";
  for (let index = 0; index < myMainDishes.length; index++) {
    foodRef.innerHTML += getMainDishTemplate(index);
  }
}

function renderSweetDishes() {
  let foodRef = document.getElementById("allDishes");
  foodRef.innerHTML = "";
  for (let indexSweet = 0; indexSweet < mySweetDishes.length; indexSweet++) {
    foodRef.innerHTML += getSweetDishTemplate(indexSweet);
  }
}

function addToCart(index) {
  let infoRef = document.getElementById("removeInfo");
  document.getElementById("removeInfo").style = "";
  document.getElementById("removeInfo").style = "display:none";

  if (myMainDishes[index].amount === 0) {
    myMainDishes[index].amount++;
    finalResult = myMainDishes[index].amount * myMainDishes[index].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    infoRef.innerHTML = "";
    infoRef.innerHTML = basketTemplate(index);
  } else if (myMainDishes[index].amount >= 0) {
    myMainDishes[index].amount++;
    let currentNumber = document.getElementById(`counter` + index);
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `${myMainDishes[index].amount}x`;
    finalResult = myMainDishes[index].amount * myMainDishes[index].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    let currentPrice = document.getElementById(`finalPrice` + index);
    currentPrice.innerHTML = ``;
    currentPrice.innerHTML = `${finalResult}€`;
  }
}

function addToCartSweets(indexSweet) {
  let infoRef = document.getElementById("removeInfo");
  document.getElementById("removeInfo").style = "";
  document.getElementById("removeInfo").style = "display:none";

  if (mySweetDishes[indexSweet].amount === 0) {
    mySweetDishes[indexSweet].amount++;
    finalResult = mySweetDishes[indexSweet].amount * mySweetDishes[indexSweet].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    infoRef.innerHTML = "";
    infoRef.innerHTML = basketSweetsTemplate(indexSweet);
  } else if (mySweetDishes[indexSweet].amount >= 0) {
    mySweetDishes[indexSweet].amount++;
    let currentNumber = document.getElementById(`counterSweets` + indexSweet);
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `${mySweetDishes[indexSweet].amount}x`;
    finalResult = mySweetDishes[indexSweet].amount * mySweetDishes[indexSweet].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    let currentPrice = document.getElementById(`finalPriceSweets` + indexSweet);
    currentPrice.innerHTML = ``;
    currentPrice.innerHTML = `${finalResult}€`;
  }
}

function addToCartMinus(indexSweet) {
  if (myMainDishes[indexSweet].amount > 1) {
    myMainDishes[indexSweet].amount--;
    let currentNumber = document.getElementById(`counter` + indexSweet);
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `${myMainDishes[indexSweet].amount}x`;
    finalResult = finalResult - myMainDishes[indexSweet].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    let currentPrice = document.getElementById(`finalPrice` + indexSweet);
    currentPrice.innerHTML = ``;
    currentPrice.innerHTML = `${finalResult}€`;
  } else if (myMainDishes[indexSweet].amount = 1) {
    let foodFieldRef = document.getElementById("foodField" + indexSweet);
    myMainDishes[indexSweet].amount = 0;
    foodFieldRef.remove();
  } 
}

function addToCartSweetsMinus(indexSweet) {
  if (mySweetDishes[indexSweet].amount > 1) {
    mySweetDishes[indexSweet].amount--;
    let currentNumber = document.getElementById(`counterSweets` + indexSweet);
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `${mySweetDishes[indexSweet].amount}x`;
    finalResult = finalResult - mySweetDishes[indexSweet].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    let currentPrice = document.getElementById(`finalPriceSweets` + indexSweet);
    currentPrice.innerHTML = ``;
    currentPrice.innerHTML = `${finalResult}€`;
  } else if (mySweetDishes[indexSweet].amount = 1) {
    let foodFieldRef = document.getElementById("foodField" + indexSweet);
    mySweetDishes[indexSweet].amount = 0;
    foodFieldRef.remove();
  } 
}

function deleteDish(index) {
  let foodFieldRef = document.getElementById("foodField" + index);
    myMainDishes[index].amount = 0;
    foodFieldRef.remove();
}

function deleteSweetDish(indexSweet) {
  let foodFieldRef = document.getElementById("foodFieldSweets" + index);
    mySweetDishes[indexSweet].amount = 0;
    foodFieldRef.remove();
}
