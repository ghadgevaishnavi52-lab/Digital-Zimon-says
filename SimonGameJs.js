let userSeq=[];
let gameSeq=[];

let started = false;
let level=0

let colors = ["red", "yellow", "blue", "green"];

let levelBox=document.querySelector("#level");

   document.addEventListener("keydown", function(){

      if(started==false) {  
      console.log("Game Has Started.");
      started = true;

      levelUp();
      }
});

    function levelUp(){

        level++;
        levelBox.innerText = "Level " + level;
        userSeq=[];

        const randomIndex = Math.floor(Math.random()*3);
        const randomColor = colors[randomIndex];

        gameSeq.push(randomColor);
        console.log(gameSeq);
        flashButton(randomColor);

    }

function flashButton(color) { 

    let button = document.querySelector("#" + color);
    button.classList.add("flash"); 
    setTimeout(function () { 
    button.classList.remove("flash");
    }, 250);
    }

    


let boxes = document.querySelectorAll(".box");

for (let box of boxes) {

    box.addEventListener("click", function () {

        let color = this.getAttribute("id");

        userSeq.push(color);

        console.log("you", userSeq);

        let index = userSeq.length - 1;

        if (userSeq[index] !== gameSeq[index]) {

            alert("GAME OVER!!!");
            gameOver();
        }

        else if (userSeq.length === gameSeq.length) {
                   console.log("Correct!");

            setTimeout(function () {
                levelUp();
            }, 500);
        }

        } )

    }; 


function gameOver() {

    levelBox.innerText = "Game Over";

    started = false;

    level = 0;

    gameSeq = [];

    userSeq = [];

    console.log("Game Over!");
}