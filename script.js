let user_score=0;
let comp_score=0;
const msg=document.querySelector(".msg");
const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp_score");
const choices=document.querySelectorAll(".choice");


// actual funct
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const user_choice=choice.getAttribute("id");
      playgame(user_choice)
    });
});

//play game funct
const  playgame=(user_choice)=>{
    console.log("User choice = ",user_choice);


    // comp choice funct

    const comcho = compchoice();
    console.log("Computer choice = ",comcho);
    if(user_choice == comcho){
        drawgame();
    }
    else{
        let user_win=true;
        if(user_choice=="rock"){
            user_win= comcho == "paper" ? false:true;
        }
        else  if(user_choice=="paper"){
            user_win= comcho == "scissor" ? false:true;
        }
        else  if(user_choice=="scissor"){
            user_win= comcho == "rock" ? false:true;
        }
        showWinner(user_win,user_choice,comcho,userscorepara,compscorepara,);
    }
};


  // compchoice()

const compchoice=()=>{
   const option = ["paper","scissor","rock"];
   const optInd=Math.floor(Math.random()*3);
   return  option[optInd];
};

//draw game
const drawgame=()=>{
     console.log("The game is draw.");
     msg.innerText="The game is draw";
     msg.style.backgroundColor="#081b31"
};

// show winner funct

const showWinner=(user_win,user_choice,comcho,userscorepara,compscorepara,)=>{
    if(user_win){
        user_score++;
        userscorepara.innerText=user_score;
        msg.innerText=`You win! , Your ${user_choice} beats ${comcho}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
         compscorepara.innerText=comp_score;
        msg.innerText=`You lost! ,  ${comcho } beats  your ${user_choice}`;
        msg.style.backgroundColor="red";
    }

};

    
