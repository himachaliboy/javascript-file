let buttons=document.querySelectorAll(".btn")


inputfield=document.getElementById("screen")

for(let k=0;k<buttons.length;k++){
    buttons[k].onclick=function(){
        console.log("button clicked")
        let value=buttons[k].innerHTML
        if((value==='0' || value==='00'||value==='/' || value==='-' || value==='=' ||value==='+' ||value==='.')&& inputfield.value===''){
            return
            
        }else{
            inputfield.value+=value;
        }

    
        // document.querySelector("#screen").value;
        
    }
}
// solve query 
let solvebtn=document.querySelector(".solve")
    solvebtn.onclick=function(){
    let equa=document.querySelector("#screen").value;
    let sol=eval(equa)
    document.querySelector("#screen").value=sol
    
}
// delete last input 
let clearbtn=document.querySelector(".clear")

clearbtn.onclick=function(){

    let solution=document.querySelector("#screen").value;
    clearbtn= solution.slice(0, -1);
    document.querySelector("#screen").value=clearbtn

}
// all clear btn 
let  allclear=document.querySelector(".ac")
allclear.onclick=function(){
    document.querySelector("#screen").value="";

}
 

   


   
    


