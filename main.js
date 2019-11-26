

//Quiz questions
var questions = [
    {
    prompt: "Inside which HTML element do we put the JavaScript?\n(1) <js>\n(2) <scripting>\n(3) <javascript>\n(4) <script>",
    answer: "4"
    },
    {
      prompt: "Where is the correct place to insert a JavaScript?\n(1) The <head> section\n(2) The <body> section\n(3) The <header> section\n(4) In a <div>",
      answer: "2"   
    },
    {
      prompt: "What does CSS stand for?\n(1) Create Style Sheets\n(2) Computer Style Sheets\n(3) Colorful Style Sheets\n(4) Cascading Style Sheets",
      answer: "4"
    },
    {
        prompt: "Which HTML attribute is used to define inline styles?\n(1) Style\n(2) Font\n(3) Styles\n(4) Class",
        answer: "1"
      },

      {
        prompt: "Which CSS property is used to change the text color of an element?\n(1) fgcolor\n(2) text-color\n(3) color\n(4) font-color",
        answer: "3"
      },
     
]

var score = 0;

 for(var i=0; i < questions.length; i ==) {
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
         score++;
         alert("Correct!");
     }  else {
         alert("Wrong");
     }
 }
 alert("you got" + score + "/" + questions.length);


// 1. Need function to start game 
// 2. start timer when start quiz is clicked
// 3. store high score in innerstorage




// hints 
//var questions = [
 //   {
//      title: "Commonly used data types DO NOT include:",
//      choices: ["strings", "booleans", "alerts", "numbers"],
//      answer: "alerts"
//    },
//    {
 //     title: "The condition in an if / else statement is enclosed within ____.",
//      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//      answer: "parentheses"
 //   },

 // ];
  