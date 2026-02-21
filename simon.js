// key press->game start
// btnflash + level1 (likha anna chiye)
// btn press krne se -> check hona chiye kya user ne shi press kara hai k ne 
// gameseq->array me store karte chlege
// check->shi hai tho levelup verna game over

let gameSeq=[];
let userSeq=[]; 
let maxAns=0;
let temp=0;
let btns=["yellow", "red", "purple", "green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

// game start k liye hum screen ya bole tho apni web k upr click krege
document.addEventListener('keydown' , function(){
    if(started==false){
        console.log("game is started!");
        started=true; 

        //abb btnflash krne k liye
        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}


function levelUp(){
    userSeq=[];
    level++; 
    h2.innerHTML=`Level ${level}<br> Highest Score: ${maxAns}`;
    
    let randIdx=Math.floor(Math.random() * 4);
    let randColor= btns[randIdx];  
    let randbtn= document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("same Value");
    }
    else{
        // h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Your highest score was <b>${maxAns}</b> <br>Press any key to start again.`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';    
        },150)
        reset();
        h2.innerHTML=`Game Over! Your score was <b>${temp}</b> <br> Your highest score was <b>${maxAns}</b> <br>Press any key to start again.`;

    }
}

function btnPress(){
    // console.log("btn was Pressed");
    let btn=this;
    userflash(btn); //hum khud se jo bhi click krege tbh bhi tho flash hona vhiye btn
    userColor=btn.getAttribute('id');
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click' , btnPress);
}

function reset(){
    if(level>=maxAns){
        maxAns=level;
    }
    temp=level;
    started=false;
    gameSeq=[];
    userSeq=[];
    level =0;
}