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

function addToCart(index) {
  let infoRef = document.getElementById("removeInfo");
  document.getElementById("removeInfo").style = "";
  document.getElementById("removeInfo").style = "display:none";

  if (myMainDishes[index].amount === 0) {

    myMainDishes[index].amount++;
    finalResult = myMainDishes[index].amount * myMainDishes[index].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    let newPrice = finalResult;
    myMainDishes[index].newPrice.push(newPrice);
    infoRef.innerHTML = "";
    infoRef.innerHTML = basketTemplate(index);
  } else if (myMainDishes[index].amount >= 0) {
    myMainDishes[index].amount++;
    let currentNumber = document.getElementById(`counter` + index);
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `${myMainDishes[index].amount}x`;
    finalResult = myMainDishes[index].amount * myMainDishes[index].price;
    finalResult = Number.parseFloat(finalResult).toFixed(2);
    myMainDishes[index].newPrice = finalResult;
    let finalPrice = document.getElementById(`finalPrice` + index);
    finalPrice.innerHTML = ``;
    finalPrice.innerHTML = `${myMainDishes[index].newPrice}€`;
    getInvoiceTemplate(index);
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
  } else if ((myMainDishes[index].amount = 1)) {
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




function renderSweetDishes() {
  let foodRef = document.getElementById("allDishes");
  foodRef.innerHTML = "";
  for (let indexSweet = 0; indexSweet < mySweetDishes.length; indexSweet++) {
    foodRef.innerHTML += getSweetDishTemplate(indexSweet);
  }
}

function addToCartSweets(indexSweet) {
  let infoSweetsRef = document.getElementById("removeInfo");
  document.getElementById("removeInfo").style = "";
  document.getElementById("removeInfo").style = "display:none";

  if (mySweetDishes[indexSweet].amount === 0) {
    mySweetDishes[indexSweet].amount++;
    finalSweetsResult =
      mySweetDishes[indexSweet].amount * mySweetDishes[indexSweet].price;
    finalResultSweets = Number.parseFloat(finalSweetsResult).toFixed(2);
    infoSweetsRef.innerHTML = "";
    infoSweetsRef.innerHTML = basketSweetsTemplate(indexSweet);
  } else if (mySweetDishes[indexSweet].amount >= 0) {
    mySweetDishes[indexSweet].amount++;
    let currentSweetsNumber = document.getElementById(
      `counterSweets` + indexSweet
    );
    currentSweetsNumber.innerHTML = "";
    currentSweetsNumber.innerHTML = `${mySweetDishes[indexSweet].amount}x`;
    finalSweetsResult =
      mySweetDishes[indexSweet].amount * mySweetDishes[indexSweet].price;
    finalSweetsResult = Number.parseFloat(finalSweetsResult).toFixed(2);
    let currentSweetsPrice = document.getElementById(
      `finalPriceSweets` + indexSweet
    );
    currentSweetsPrice.innerHTML = ``;
    currentSweetsPrice.innerHTML = `${finalSweetsResult}€`;
  }
}

function deleteSweetDish(indexSweet) {
  let foodFieldSweetsRef = document.getElementById("foodFieldSweets" + index);
  mySweetDishes[indexSweet].amount = 0;
  foodFieldSweetsRef.remove();
}