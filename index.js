let img = document.querySelectorAll(".images");
let btn10 = document.querySelector("#btn1");
let btn20= document.querySelector("#btn2");
let count1=document.querySelector("#count1");
let count2=document.querySelector("#count2");
let hide=document.querySelector(".hide");
let userCount=0;
let compCount=0;

let choices=["rock","paper","scissor"];
function randomChoice(){
    return Math.floor(Math.random()*3);
}


function ImagesClick(){
    img.forEach((val)=>{
        userCount=0;
            compCount=0;
        val.addEventListener("click",()=>{
            hide.style.display="block";
            let arr = val.getAttribute("id");
            let comp = choices[randomChoice()];
            if(arr===comp){
                // console.log("Draw");
                hide.innerText="Game Draw!";
            }else if(arr==="rock"){
                if(comp==="paper"){
                    // console.log("Computer Wins");
                    hide.innerText="Computer "+comp+" beats Your "+arr;
                    compCount=compCount+1;
                    count2.innerText=compCount;

                }
                else{
                    // console.log("Player wins");
                    hide.innerText="Your "+arr+" beats Computer "+comp;
                    userCount=userCount+1;
                    count1.innerText=userCount;
                }
            }else if(arr=="paper"){
                if(comp==="rock"){
                    console.log("Player Wins");
                    hide.innerText="Your "+arr+" beats Computer "+comp;
                    userCount=userCount+1;
                    count1.innerText=userCount;
                }
                else{
                    console.log("Computer wins");
                    hide.innerText="Computer "+comp+" beats Your "+arr;
                    compCount=compCount+1;
                    count2.innerText=compCount;
                }
        }else if(arr==="scissor"){
            if(comp==="rock"){
                console.log("Computer wins");
                hide.innerText="Computer "+comp+" beats Your "+arr;
                compCount=compCount+1;
                count2.innerText=compCount;
            }
            else{
                console.log("Player win");
                hide.innerText="Your "+arr+" beats Computer "+comp;
                userCount=userCount+1;
                count1.innerText=userCount;
            }
        }
        
        
        
    })
})
};
function Reset(){
    userCount=0;
    compCount=0;
    count1.innerText=userCount;
    count2.innerText=compCount;
    hide.style.display="none";
}
function playGame(){
    btn10.addEventListener("click",()=>{
        // hide.style.display="block";
        btn10.style.display="none";
        ImagesClick();
        btn20.addEventListener("click",()=>{
            Reset();
        })
    });
};
playGame();