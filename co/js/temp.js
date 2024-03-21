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

//popular product carousel//

