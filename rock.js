let userScore_span = document.querySelector("#userScore");
let compScore_span = document.querySelector("#compScore");
let p_id = document.querySelector("#para");
let result_id = document.querySelector("#result"); 
let paper = document.querySelector("#p");
let scissor = document.querySelector("#s");
let rock = document.querySelector("#r");
let endPara = document.querySelector("#end_result");
let Us=0,Cs=0;
let final_score=5,flag=-1;
let reset="NO";
let flag_try=1;
function computerPlay()
{
    const choices = ['r','s','p'];
    const randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
function gameResult(u)
{
    if(Us === 5 || Cs === 5)
    {
        return;
    }
    let c = computerPlay();
    switch(u + c)
    {
        case "rs":
        case "sp":
        case "pr":
                    console.log("You Win");
                    let game1 = "Win";
                    changeScore(game1,u,c);
                    break;
        case "rr":
        case "ss":
        case "pp":
                    console.log("Game Draw");
                    let game2 = "Draw";
                    changeScore(game2,u,c);
                    break;
        case "rp":
        case "sr": 
        case "ps":
                    console.log("You Lost");
                    let game3 = "Lost";
                    changeScore(game3,u,c);
                    break;                          
    } 
}
// gameResult();
function changeScore(game,u,c)
{
    if(game==="Win" )
    {
        Us+=1;
        userScore_span.textContent = Us;
        if(Us===final_score)
        {
            userScore_span.style.color="green";
            changeParagraph();
            return;
        }
        // console.log(Us);
        switch(u + c)
        {
            case "rs":
                        result_id.textContent="rock killed scissor";
                        break;
            case "pr":  
                        result_id.textContent="paper wrapped rock";                        
                        break;
            case "sp":
                        result_id.textContent="scissor cut paper";
                        break;                        
        }
    }
    if(game==="Lost" )
    {
        Cs+=1;
        compScore_span.textContent=Cs;
        if(Cs === final_score)
        {
            compScore_span.style.color="red";
            changeParagraph();
            return;
        }
        // console.log(Cs);
        switch(u + c)
        {
            case "rp":
                        result_id.textContent="paper wrapped rock";
                        break;
            case "ps":  
                        result_id.textContent="scissor cut paper";                        
                        break;
            case "sr":
                        result_id.textContent = "rock killed scissor";
                        break;                        
        }

    }
    if(game === "Draw")
    {
        switch(u + c)
        {
            case "rr":
                        result_id.textContent = "rock say hi to rock";
                        break;
            case "pp":  
                        result_id.textContent = "paper say hi to paper";                        
                        break;
            case "ss":
                        result_id.textContent = "scissor say hi to scissor";
                        break;                        
        }
    }
   
}

//PARAGRAPH CHANGE AND RESET
function changeParagraph()
{
    p_id.textContent="TRY AGAIN";
    endResult();
    flag_try=0;
    if(flag_try===0)
    {
        p_id.addEventListener("click",function()
        {
            resetPage();
        })
    }

}
//AFTER RESET
function resetPage()
{
    p_id.textContent="MAKE YOUR MOVE";
    Us=0,Cs=0;
    userScore_span.textContent=Us;
    compScore_span.textContent=Cs;
    userScore_span.style.color="white";
    compScore_span.style.color="white";    
    result_id.textContent = "YOU V/S COMPUTER";
}
//main
function main()
{
    paper.addEventListener("click",function()
    {
        gameResult('p');
    })
    scissor.addEventListener("click",function()
    {
        gameResult('s');

    })
    rock.addEventListener("click",function()
    {
        gameResult('r');
    })
}
//END RESULT
function endResult()
{
    if(Us === final_score)
    {
        endPara.textContent = "YOU WIN BOUY";
    }
    else if(Cs === final_score)
    {
        endPara.textContent = "YOU LOST MY BOUY";
    }
}
main();
gameResult();