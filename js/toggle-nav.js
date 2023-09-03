const buttonToggler = document.getElementById('nav-toggler')
const btnOrigIcon = buttonToggler.innerHTML;

const navLinks = document.getElementById('nav-links-id')
const navLinksOrigStyle = navLinks.style.display;

const btnChangeIco = '<i class="fa-solid fa-xmark"></i>';
let isShow = false

const showToggle = () => {

    if(!isShow) {

        buttonToggler.innerHTML = btnChangeIco;
        navLinks.style.visibility = 'visible'
        navLinks.classList.add('animate__animated' , 'animate__backInRight');
    }
    else {

        buttonToggler.innerHTML = btnOrigIcon;
        navLinks.style.visibility = navLinksOrigStyle;
        navLinks.classList.remove('animate__animated', 'animate__backInRight');
    }
    isShow = !isShow


}
buttonToggler.addEventListener('click' , showToggle)
