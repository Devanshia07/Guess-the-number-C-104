
var y= Math.floor(Math.random()*10+1);
console.log(y);
var guess= 1;
var playername=localStorage.getItem("playername");

function submit(){
    var user_input= document.getElementById("guessField").value;
    localStorage.setItem("user_input" , user_input);
    if(y==user_input){
        alert("CONGRATULATIONS!!!"+playername+"YOU GUESSED IT RIGHT IN"+guess+"GUESS");
        guess=1;
    }
    else if(y<user_input){
        guess++;
        alert("OOPS SORRY! YOU NEED TO TRY A SMALLER NUMBER");
    }
    else{
        guess++;
        alert("OOPS SORRY! YOU NEED TO TRY A GREATER NUMBER");
    }
    
}

function playAgain(){
    y= Math.floor(Math.random()*10+1);
    console.log(y);
}

