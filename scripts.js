function ToggleMenu() {
    var navMenu = document.querySelector('.nav');
    var navicon = document.getElementById('nav-icon');
    var menu = document.querySelector('.menu-items');
    navMenu.classList.toggle('open');
    menu.classList.toggle('new');
    navicon.classList.toggle('fa-x')
}

function toggle(){
    if (window.innerWidth <= 768) { 
        ToggleMenu(); 
    }
}

