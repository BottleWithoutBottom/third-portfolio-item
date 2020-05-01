window.onload = function() {
    /* появление рекламного блока */
    document.addEventListener('scroll', function(e) {
        let buyBar = document.querySelector('.buy-bar');
        if (pageYOffset > 500) {
            buyBar.classList.add('buy-bar-active');
        } else if(pageYOffset < 500) {
            buyBar.classList.remove('buy-bar-active');
        }
    });
    /* Таблица-описание котла */
    let links = document.querySelectorAll('.inDepth-cats-item a');
    let tables = document.querySelectorAll('.inDepth-item');
    for (let i = 0; i < links.length; i++) {
        console.log(links)
        links[i].addEventListener('click', function (e) {
            e.preventDefault();
            for (let j = 0; j < tables.length; j ++) {
                tables[j].classList.remove('active-table');
                links[j].classList.remove('active-inDepth-link');
            }
            tables[i].classList.add('active-table');
            links[i].classList.add('active-inDepth-link');
        })
    }

    /* разворачивание блока */
    // let cataloglink = document.querySelector('.header__nav-link-catalog');
    // let catalogblock = document.querySelector('.header__nav-catalog');
    // let catalogblockInner = document.querySelector('.header__nav-catalog__inner');
    // cataloglink.addEventListener('click', function(e) {
    //     e.preventDefault;
    //     slideDown(catalogblock, catalogblockInner);
        
    // })



    /* открытие модального окна */
    let buyButton = document.querySelector('.product-buyButton');
    buyButton.addEventListener('click', function(e) {
        e.preventDefault();
        showModal();
    })

    let modalBack = document.querySelector('.modal-window-back');
    modalBack.addEventListener('click', function(e) {
        hideModal();
    })





}




