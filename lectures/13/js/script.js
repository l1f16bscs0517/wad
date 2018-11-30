var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "How do you use checks in a programming language",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},
    {
        question: "what is your name:",
        choices: ["select",
            "name",
            "saja",
            "none of the above"],
        correctAnswer: 1
    }];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    /*Write your code here */
    if(currentQuestion<=4)
    {
        var x=document.querySelector("input[type=radio ]:checked");
        if(x==null)
        {
            var mess=document.getElementById("quiz-message");
            mess.style.display="inline";
            mess.innerText='please select an answer';
            var ChoiceListid=document.getElementById("choice-list");
            ChoiceListid.innerHTML='';
        }
        else if (currentQuestion<5){
            if(x.id==questions[currentQuestion].correctAnswer)
            {
                correctAnswers++;
            }
            var ChoiceListid=document.getElementById("choice-list");
            ChoiceListid.innerHTML='';
            currentQuestion++;
        }
        if(currentQuestion!=4) {
            displayCurrentQuestion();
            //Next.innerText='Next Question';
        }
        else
        {
            displayScore();
            var mess=document.getElementById("quiz-message");
            mess.style.display="none";
            currentQuestion++;
            var Next = document.getElementById("next-btn");
            Next.innerText='Reset';
            resetQuiz();
        }

    }
}

function displayCurrentQuestion() {
    /*Write your code here */
    var questionid=document.getElementById("question").innerText=questions[currentQuestion].question;
    var ch=document.getElementById("choice-list");

    for(var x=0; x<questions.length; x++){

       ch.innerHTML+= '<li> <input type="radio" name="ch"> </li>' + questions[currentQuestion].choices;
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}
