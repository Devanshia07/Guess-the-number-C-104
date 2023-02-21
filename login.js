
function login(){
    player_name= document.getElementById("playername").value;
    localStorage.setItem("playername" , player_name);
    window.location= "gamepage.html";
}

