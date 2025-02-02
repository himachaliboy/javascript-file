function dicee(){
    
    var player1= Math.floor(Math.random() * 6) + 1;
    var player2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").src="/image"+player1+".png"
    document.querySelector(".img2").src="/image"+player2+".png"
   
    if (player1 === player2) {
        document.querySelector("h1").innerHTML = "Draw!";
      
    }    
    else if(player1 < player2){
        document.querySelector("h1").innerHTML= ("Player 2 WINS!");    

    }
    else {
        document.querySelector("h1").innerHTML= (" Player 1 WINS!");
        
    }
}
let date=new Date()
document.querySelector("p").innerHTML=(date)
