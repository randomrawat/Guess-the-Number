let random = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;
let newhighscore = 0;

function handleSubmit() {
    const inputValue = document.getElementById('input').value;

    let lowhigh = 0;
    function myElement(){
        if(inputValue < random) {
            lowhigh =" Too low!";
            score--;
        }
        else if(inputValue > random ){
            lowhigh=" Too high!";
            score--;
        }
        else{
            lowhigh="Correct number!";
            if(highScore<score){
                highScore = score;
            }
            if(newhighscore<highScore){
                highScore = highScore;
            }
            else{
                highScore = newhighscore;
            }
        }
    } 
    myElement();
   
    document.getElementById('mark').textContent = inputValue; 
    
    document.getElementById('gss').textContent = lowhigh;

    document.getElementById('score').textContent = score;

    document.getElementById('highscore').textContent = highScore;

    if(inputValue == random){
        document.getElementById('back').style.backgroundColor="#60b347"
    }
  }

  function againn(){

  score = 20;
  random = Math.trunc(Math.random()*20+1);

  document.getElementById('score').textContent = 20;

  document.getElementById('mark').textContent = "?"; 

   document.getElementById('back').style.backgroundColor="#282828"

   document.getElementById('gss').textContent = "Start guessing. . .";

   document.getElementById('input').value = "";

  }


  newhighscore = highScore;
