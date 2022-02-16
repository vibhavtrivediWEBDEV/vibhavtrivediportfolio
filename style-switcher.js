const styleswitchertoggler = document.querySelector(".style-switcher-toggler");

styleswitchertoggler.addEventListener("click" , () =>{
    document.querySelector(".style-switcher").classList.toggle("open")
})