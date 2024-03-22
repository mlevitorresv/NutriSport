const icon = document.getElementById("menuIcon");
let opened = false;

const handleMenu = () => {
    const menu = document.getElementById("menu");

    if(!opened){
        icon.src = "resources/assets/crossMenu.svg"
        menu.style.display = 'flex';
        opened = true;
    } else {
        icon.src = "resources/assets/burgerMenu.svg"
        menu.style.display = 'none';
        opened = false;
    }
}


icon.addEventListener("click", handleMenu)