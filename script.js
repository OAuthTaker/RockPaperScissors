let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const rand = Math.floor(Math.random()*3);
    return choices[rand];
}

function getWord(a){
    if (a=="r") return "Rock";
    else if (a=="p") return "Paper";
    else return "Scissors";
}

function win(u, c){
    userScore++;
    userScore_span.innerHTML = userScore;
    const a = "user".fontsize(3).sub();
    const b = "comp".fontsize(3).sub();
    result_p.innerHTML = getWord(u) + a + " beats " + getWord(c) + b + ". You Win🔥";
    document.getElementById(u).classList.add("green-glow");
    setTimeout(function(){document.getElementById(u).classList.remove("green-glow");}, 300)
}

function lose(u, c){
    compScore++;
    compScore_span.innerHTML = compScore;
    const a = "user".fontsize(3).sub();
    const b = "comp".fontsize(3).sub();
    result_p.innerHTML = getWord(u) + a + " loses to " + getWord(c) + b + ". You Lose💩";
    document.getElementById(u).classList.add("red-glow");
    setTimeout(function(){document.getElementById(u).classList.remove("red-glow");}, 300)
}

function draw(u, c){
    const a = "user".fontsize(3).sub();
    const b = "comp".fontsize(3).sub();
    result_p.innerHTML = getWord(u) + a + " equals " + getWord(c) + b + ". It's a draw😄";
    document.getElementById(u).classList.add("grey-glow");
    setTimeout(function(){document.getElementById(u).classList.remove("grey-glow");}, 300)
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, compChoice);
            break;
        default:
            draw(userChoice, compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    });
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}


main();