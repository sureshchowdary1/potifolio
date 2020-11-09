

var typed = new Typed(".typing", {
    strings: [ '' ,'Fresher' , 'Designer' , 'Web Developer'],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
})



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



function bloodDrop(){
    let homeText = document.querySelector('.Home__text')
    let homeButton = document.querySelector('.Home__button')

    homeButton.addEventListener('mouseenter' , () => {
        homeText.classList.add('active')
    })
    homeButton.addEventListener('mouseleave' , () => {
        homeText.classList.remove('active')
    })
    
}

bloodDrop()