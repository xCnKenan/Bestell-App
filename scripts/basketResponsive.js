let basketIsOpen = false;

function openBasket(){
    toggle();
}

function toggle(){
    let contentRef = document.getElementById("content");
    contentRef.classList.add("d-none");

    let shoppingCartRef = document.getElementById("shoppingCart");
    shoppingCartRef.classList.add("showBasket");

    let navbarRef = document.getElementById("navbar");
    navbarRef.classList.add("d-none");

    let footerRef = document.getElementById("footer");
    footerRef.classList.add("d-none");

    basketResponsiveRef = document.getElementById("basketResponsive");
    basketResponsiveRef.classList.add("d-none");

    let closePositionRef = document.getElementById("closePosition");
    closePositionRef.classList.add("closePosition");

    let closeRef = document.getElementById("close");
    closeRef.classList.toggle("d-none");
}

function closeBasket(){
    let contentRef = document.getElementById("content");
    contentRef.classList.toggle("d-none");

    let shoppingCartRef = document.getElementById("shoppingCart");
    shoppingCartRef.classList.toggle("showBasket");

    let navbarRef = document.getElementById("navbar");
    navbarRef.classList.toggle("d-none");

    let footerRef = document.getElementById("footer");
    footerRef.classList.toggle("d-none");

    basketResponsiveRef = document.getElementById("basketResponsive");
    basketResponsiveRef.classList.toggle("d-none");

    let closePositionRef = document.getElementById("closePosition");
    closePositionRef.classList.toggle("closePosition");

    let closeRef = document.getElementById("close");
    closeRef.classList.toggle("d-none");
}

function purchaseBtnForDeliver(){
    if (sumOfPriceOfDishes <= 35){
        
    }
}

function purchaseBtnForPickUp(){
    
}