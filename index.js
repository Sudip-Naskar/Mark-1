var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name ? ');
console.log("Hello "+ userName + ". Let's answer some questions about me.");
console.log("----------------------");
var score = 0;

var questionAnswers = [
    {
        question: 'Where do I live ? ',
        answer: 'Kolkata'
    },
    {
        question: 'Where do I study ? ',
        answer: 'Sammilani Mahavidyalaya'
    },
    {
        question: 'What do I study ? ',
        answer: 'Computer Science'
    },
    {   
        question: 'What is my hobby ? ',
        answer: 'Photography'
    },
    {
        question: 'Where is my home ? ',
        answer: 'Canning'
    }
]

function play(question, answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
        console.log('You are right !');
        score++;
    }else{
        console.log('You are wrong!');
    }
    console.log('Your current score: '+ score);
    console.log('----------------------');
}

function game(){
    for (var i=0; i<questionAnswers.length; i++){
        play(questionAnswers[i].question, questionAnswers[i].answer);
    }
    console.log('Your final score is : '+score);
}

game();