let btn = document.getElementById("btn")
let btn_text = document.getElementById("btn-text")
let User_image = document.getElementById("User_image")
let my_image = document.getElementById("my_image")
btn_text.style.display = 'none'
let total_score = document.getElementById("total_score")
let score = 0;

let img = {
    "0": "./img/snake.png",
    "1": "./img/water.png",
    "2": "./img/gun.png"
}

function clickbtn() {
    if (btn.innerHTML == "Play Game") {
        btn.innerHTML = "try Again"
    }
    user_inpute = prompt("Enter S:Sanke G:gun w:water")
    if (user_inpute == "s") {

        User_image.src = "./img/snake.png"
    } else if (user_inpute == "w") {

        User_image.src = "./img/water.png"
    } else if (user_inpute == "g") {

        User_image.src = "./img/gun.png"
    }
    let random = Math.floor(Math.random() * 3)
    my_image.src = img[random]
    if (user_inpute == 's') {
        if (user_inpute == "s" && random == "0") {
            btn_text.style.display = "block"
            btn_text.innerHTML = "Match Tied"
        } else if (user_inpute == "s" && random == "2") {
            btn_text.style.display = "block"
            btn_text.innerHTML = "you Lose"
        } else {
            btn_text.style.display = "block"
            btn_text.innerHTML = "Match won"
            score += 100;
        }
    } else if (user_inpute == 'w') {
        if (user_inpute == "w" && random == "1") {
            btn_text.style.display = "block"
            btn_text.innerHTML = "Match Tied"
        } else if (user_inpute == "w" && random == "0") {
            btn_text.style.display = "block"
            btn_text.innerHTML = "you Lose"
        } else {
            btn_text.style.display = "block"
            btn_text.innerHTML = "Match won"
            score += 100
        }
    } else if (user_inpute == 'g') {
        if (user_inpute == "g" && random == "2") {
            btn_text.style.display = "block"
            btn_text.innerHTML = "Match Tied"
        } else if (user_inpute == "g" && random == "1") {
            btn_text.style.display = "block"
            btn_text.innerHTML = "you Lose"
        } else {
            btn_text.style.display = "block"
            btn_text.innerHTML = "Match won"
            score += 100
        }
    }
    total_score.innerHTML = score
}