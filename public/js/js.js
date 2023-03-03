let god = document.getElementById('god')
let message = document.getElementById('msg')

let j = 1

god.addEventListener('click', dothing)

function dothing() {
    if (j == 0) {
        message.innerHTML = "Daniel is cool"
        j = 1
    } else if (j == 1) {
        message.innerHTML = "Daniel is the best"
        j = 2
    } else {
        j = 0
        message.innerHTML = "Daniel is the very handsome"
    }
}