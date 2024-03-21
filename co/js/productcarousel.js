let items = document.querySelectorAll(' .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
//let thumbnails = document.querySelectorAll('.thumbnail .items');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive +1;
    if(itemActive >= countItem){
        itemActive =0;
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive -1;
    if(itemActive < 0){
        itemActive = countItem = 1;
    }
    showSlider();
}

function showSlider(){
    let itemActiveOld = document.querySelector(' .list .item.active');
    itemActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');

    clearInterval(refreshinterval);
    refreshinterval = setInterval(() => {
        next.click();
    }, 5000)
}

items.forEach((items, index) => (
    items.addEventListener('click',() => {
        itemActive = index;
        showSlider();
    })
))

//popular product carousel//

let itemss = document.querySelectorAll('.popprdct .list .items');
let nexts = document.getElementById('nexts');
let prevs = document.getElementById('prevs');
//let thumbnails = document.querySelectorAll('.thumbnail .items');

let countItems = itemss.length;
let itemActives = 0;

nexts.onclick = function(){
    itemActives = itemActives +1;
    if(itemActives >= countItems){
        itemActives =0;
    }
    showSliders();
}
prevs.onclick = function(){
    itemActives = itemActives -1;
    if(itemActives < 0){
        itemActives = countItems = 1;
    }
    showSliders();
}

function showSliders(){
    let itemActivesOld = document.querySelector('.popprdct .list .items.active');
    itemActivesOld.classList.remove('active');

    itemss[itemActives].classList.add('active');
}

itemss.forEach((itemss, index) => (
    itemss.addEventListener('click',() => {
        itemActives = index;
        showSliders();
    })
))