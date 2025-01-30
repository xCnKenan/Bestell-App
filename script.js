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

function addToCartSweets(index) {
  let infoRef = document.getElementById("removeInfo");
  document.getElementById("removeInfo").style = "";
  document.getElementById("removeInfo").style = "display:none";

  if (mySweetDishes[index].amount === 0) {
    mySweetDishes[index].amount++;
    finalResult = mySweetDishes[index].amount * mySweetDishes[index].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    infoRef.innerHTML = "";
    infoRef.innerHTML = basketSweetsTemplate(index);
  } else if (mySweetDishes[index].amount >= 0) {
    mySweetDishes[index].amount++;
    let currentNumber = document.getElementById(`counter` + index);
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `${mySweetDishes[index].amount}x`;
    finalResult = mySweetDishes[index].amount * mySweetDishes[index].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    let currentPrice = document.getElementById(`finalPrice` + index);
    currentPrice.innerHTML = ``;
    currentPrice.innerHTML = `${finalResult}€`;
  }
}

function addToCartMinus(index) {
  if (myMainDishes[index].amount > 1) {
    myMainDishes[index].amount--;
    let currentNumber = document.getElementById(`counter` + index);
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `${myMainDishes[index].amount}x`;
    finalResult = finalResult - myMainDishes[index].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    let currentPrice = document.getElementById(`finalPrice` + index);
    currentPrice.innerHTML = ``;
    currentPrice.innerHTML = `${finalResult}€`;
  } else if (myMainDishes[index].amount = 1) {
    let foodFieldRef = document.getElementById("foodField" + index);
    myMainDishes[index].amount = 0;
    foodFieldRef.remove();
  } 
}

function deleteDish(index) {
  let foodFieldRef = document.getElementById("foodField" + index);
    myMainDishes[index].amount = 0;
    foodFieldRef.remove();
}
