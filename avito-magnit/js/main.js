
function OpenModalCta() {
    document.getElementById("modal-cta").classList.add("open")
}

function OpenModalGift() {
    document.getElementById("modal-gift").classList.add("open")
}

function close() {
    document.querySelector(".open").classList.remove("open")
}


document.querySelector(".header__button").addEventListener("click" , OpenModalCta )
document.querySelector(".intro__button").addEventListener("click" , OpenModalCta )
document.querySelector(".gift__button").addEventListener("click" , OpenModalGift )

document.querySelector(".close").addEventListener("click" , close )



