function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "pontuação : " + score;
}


function saveScore()
{
    localStorage.setItem("score" , score);
}


function nextPage(){
    window.location = "app2.html";
}

send()
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
actual_answer=parseInt(number1)*parseInt(number2);
question_number="<h4>"+number1+number2+"</h4>";
input_box="<br> Resposta : <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclic'check()'>checar</button>";
row=question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById("number1").value ="";
document.getElementById("number2").value ="";