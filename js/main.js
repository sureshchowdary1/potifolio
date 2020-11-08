
function navbar(){
    let header = document.querySelector('header')
    let nav = document.querySelector('nav')
    let  menu = document.querySelector('.menu')
    
    let toggleMenu = document.querySelector('.toggle__menu')
    let barsOpen = document.querySelector('.bars__open')
    let barsClose = document.querySelector('.bars__close')
    let bgCover = document.querySelector('.forBgCover')

    let subMenuView = document.querySelector('.fa-caret-down ')

    toggleMenu.addEventListener('click' , () => {
        menu.classList.toggle('active')
        toggleMenu.classList.toggle('active')
        bgCover.classList.toggle('active')
    })

    subMenuView.addEventListener('click' , () => {
        menu.classList.toggle('showSub')
    })
}

navbar()

