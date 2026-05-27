let homeEl = document.getElementById("home")
let guestEl =  document.getElementById("guest")

let hcount = 0

function homeadd1 () {
    hcount += 1
    homeEl.textContent = hcount
}

function homeadd2 () {
    hcount += 2
    homeEl.textContent = hcount
}

function homeadd3 () {
    hcount += 3
    homeEl.textContent = hcount
}

let gcount = 0

function guestadd1 () {
    gcount += 1
    guestEl.textContent = gcount
}

function guestadd2 () {
    gcount += 2
    guestEl.textContent = gcount
}

function guestadd3 () {
    gcount += 3
    guestEl.textContent = gcount
}