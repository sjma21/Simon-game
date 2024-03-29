let gameseq = [];
let userseq = [];
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started==false){
    console.log("Game is started!");
    started = true;
    levelup();
   }

});
// btn.classList.

// btn flash + level 1
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // random button choose;

    let randomindx = Math.floor(Math.random()*3);
    let randcolor = btns[randomindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randomindx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);

    // userColor = btns("id");
    // console.log(userColor);
//    let usercolor =  btn.getAttribute("id");
// //    console.log("s");

}
function check(indx){
    // console.log("curr level:",level);a
    // let indx = level -1;
    if(userseq[indx]== gameseq[indx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelup,1000);
        }
        // console.log("same value");
    }else{
        h2.innerHTML = `Game Over!Your score was <b>${level}</b> <br> Press any Key to Start.`;
        reset();
    }

}
function btnPress(){
//   console.log(this);
  let btn = this;
  userflash(btn);
  let usercolor =  btn.getAttribute("id");
//   console.log(usercolor);
 userseq.push(usercolor);
 check(userseq.length-1);

  
}
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);

}

// game seq ["yellow","blue" ,"green"]

// user seq ["yellow"]
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}