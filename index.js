const charsSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b",
    "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "\\", ",", "^",
    "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ".",
    "<", ">", "?"]
let firstPasswordEl = document.getElementById("firstPassword")
let secondPasswordEl = document.getElementById("secondPassword")
let generateEl = document.getElementById("generate")

let password1 = ""
let password2 = ""

function generatePasswords() {

    if (firstPasswordEl.textContent === "" && secondPasswordEl.textContent === "") {
        for (let i = 0; i < 15; i++) {
            password1 = charsSet[Math.floor(Math.random() * charsSet.length)]
            firstPasswordEl.textContent += password1

            password2 = charsSet[Math.floor(Math.random() * charsSet.length)]
            secondPasswordEl.textContent += password2
        }
    }
}
firstPasswordEl.textContent = ""
secondPasswordEl.textContent = ""


