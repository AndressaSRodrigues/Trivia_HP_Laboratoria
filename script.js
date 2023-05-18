document.getElementById("btn-name").addEventListener("submit", function(e){
    e.preventDefault();
    const userName = document.getElementById("user-name").value;
    document.querySelector('h2').innerHTML = 'Hola, ' + userName + '! <br>Comencémos a jugar!';
    document.getElementById("user-name").value = " ";

    document.getElementById("btn-start").style.display = "block";

    document.getElementById("personal-info").style.display = "none";
});


document.getElementById("btn-start").addEventListener("click", function(){
    const showQuestions = document.getElementById("questions");
        if (showQuestions.style.display === "none") {
            showQuestions.style.display = "block";
        } else {
            showQuestions.style.display = "none";
        }
});


let score = 0;

const checkAnswers = document.getElementById("btn-resultado");

checkAnswers.addEventListener("click", function (){
    
    if (document.getElementById("question1c").checked) {
        score++;
    }
    if (document.getElementById("question2a").checked) {
       score++;
    }
    if (document.getElementById("question3b").checked) {
        score++;
    }
  
    document.getElementById("resultado").innerHTML = 'Tu resultado es ' + score + ' de 3.';

    document.getElementById("btn-resultado").disabled = true;

    document.getElementById("btn-clear").style.display = "block";
});

const btnClear = document.getElementById("btn-clear");

btnClear.addEventListener("click", function(e) {
    e.preventDefault();
    const radioButtons = document.querySelectorAll('.input-quiz');
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
 
    document.getElementById("btn-clear").style.display = "none";

    document.getElementById("resultado").innerHTML = ' ';
    score = 0;
    document.getElementById("btn-resultado").disabled = false;
});