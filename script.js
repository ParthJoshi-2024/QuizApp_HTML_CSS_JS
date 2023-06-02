const questions=[
    {
        question:"Who invented C Language ?",
        answers:[
            {text:"Brendan Eich",correct:false},
            {text:"Dennis Ritchie",correct:true},
            {text:"Tim Berners Lee",correct:false},
            {text:"James Gosling",correct:false}
        ]
        },
        {
            question:"Which one is the markup language ?",
        answers:[
            {text:"Java",correct:false},
            {text:"C",correct:false},
            {text:"Python",correct:false},
            {text:"HTML",correct:true}
        ]

        },
        {
            question:"Which are the Front End Skills ?",
        answers:[
            {text:"C++",correct:false},
            {text:"Core Java",correct:false},
            {text:"HTML CSS JS",correct:true},
            {text:"Python",correct:false}
        ]
        },
        {
            question:"Which one is the Database ?",
        answers:[
            {text:"JDK",correct:false},
            {text:"Mongo",correct:true},
            {text:"Turbo",correct:false},
            {text:"DevC",correct:false}
        ]
        },
    ];
    const questionElement=document.getElementById("question");
    const answerButtons=document.getElementById("answer-buttons");
    const nextButton=document.getElementById("next-btn");
     
    let currentQuestionIndex=0;
    let score=0;

    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML="Next";
        showQuestion();
    }
    function showQuestion(){
        resetState();
        let currentQuestion=questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex+1;
        questionElement.innerHTML=questionNo+"."+ currentQuestion.question;
        currentQuestion.answers.forEach(answer=>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",selectAnswer);

        });
    }
    function resetState(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }


    }
    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct==="true";
        
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;

        }else{
            selectedBtn.classList.add("Incorrect");
        }
        Array.from(answerButtons.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled="true";
        });
        nextButton.style.display="block";

    }

    function showScore(){
        resetState();
        questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML="Play Again";
        nextButton.style.display="block";
    }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }


    nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex<questions.length){
            handleNextButton();

        }
        else{
            startQuiz();
        
        }


    });
    startQuiz();




            
        
   