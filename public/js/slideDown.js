// function slideDown(element, elementInner) {
//     let startPos = Date.now();

//     let timer = setInterval(function() {
//         let passedTime = Date.now() - startPos;
//         if (passedTime >= 2000) {
//             clearInterval(timer);
//             elementInner.style.opacity = 1;
//             return;
//         }

//         slide(element, passedTime);
//     }, 5)
//     element.style.display = 'block';
//     if (elementInner.style.opacity === 1 && element.style.display === 'block') {
//         element.style.display = 'none'; 
//         elementInner.style.opacity = 0
//     }

// }

// function slide(element, passedTime) {
//     element.style.height = passedTime / 5 + 'px';
// }

let accItem = document.querySelectorAll('.accordionItem');
let accLink = document.querySelectorAll('.accordionItemLink');

let catalogLink = document.querySelector('.accordionItemLink');
let catalogBody = document.querySelector('header__nav');
let catalogContent = document.querySelector('header__nav-catalog');
for (let i = 0; i < accLink.length; i++) {
    accLink[i].addEventListener('click', toggleItem);
}
function toggleItem(e) {
    e.preventDefault();
    let classItem = this.parentNode;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].classList.remove('open');
        accItem[i].classList.add('close');
    }
    if (classItem.classList.contains('close') ) {
        this.parentNode.classList.remove('close');
        this.parentNode.classList.add('open');
    }
}

catalogLink.addEventListener('click', toggleItem);
function toggleCatalog(e) {
    e.preventDefault();
    let classItem = catalogBody;
    if (classItem.classList.contains('close')) {
        classItem.classList.remove('close');
        classItem.classList.add('open');
    }
}