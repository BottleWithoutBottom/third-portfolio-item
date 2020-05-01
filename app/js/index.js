window.onload = function() {
    let catalog = document.querySelector('.header__nav-catalog');
    let catalogLink = document.querySelector('.header__nav-link-catalog').addEventListener('click', function() {
        catalog.classList.toggle('.opened');
    })

}