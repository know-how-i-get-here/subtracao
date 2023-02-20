const num1 = Math.floor(Math.random() *30)
const num2 = Math.floor(Math.random() *30)
const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")
const formEl = document.getElementById("form")
const correctAnswer = num1 - num2
let scoreel = document.getElementById("sco")
questionEl.innerHTML = `${num1} - ${num2} = ?`
let score = JSON.parse(localStorage.getItem("score"))
if(!score){
    score = 0
}
scoreel.innerHTML = `score: ${score}`
formEl.addEventListener("submit", ()=>{
    const userAnswer = +inputEl.value
    if(userAnswer === correctAnswer){
        score++
        update()
    }else{
        score --
        update()
    }
    function update(){
        localStorage.setItem("score", JSON.stringify(score))
    }
})