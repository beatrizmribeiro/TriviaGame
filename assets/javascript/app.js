// You'll want to get in the habit of wrapping your code in some kind of
// function block - this prevents variables from being leaked onto the global
// scope which can prevent bugs from naming collisions with other code.

var panel = $("#quiz-area");

// Question set
var questions = [{

    // You shouldn't need to use the escaped character 
    // code for an apostrophe with any modern browser.
    question: "What is Snoopy's breed?",
    answers: ["Beagle", "Golden Retriever", "Shitzu"],
    correctAnswer: "Beagle",
  }, {

    question: "What is the name of Snoopy's best bud?",
    answers: ["Lucy", "Woodstock ", "Rerun"],
    correctAnswer: "Woodstock",

  }, {
    question: "What is Snoopy's favorite drink",
    answers: ["Coke ", "Lemonade", "Rootbeer"],
    correctAnswer: "Rootbeer",

  }, {
    question: "What was Snoopy's costume in the episode:It's the Great Pumpkin Charlie Brown?",
    answers: ["World War One Flying Ace", "Witch", "Pumpkin"],

    correctAnswer:"Pumpkin",

  }, {
    question: "Where was Snoopy born?",
    answers: ["The local Pet Shop", "Charlie Brown's Yard", "The Daisy Hill Puppy Farm"],
    correctAnswer: "The Daisy Hill Puppy Farm",
  }, {
    question:"How many sibling(s) does Snoopy have? And What are the names?",
    answers: ["5 siblings: Spike, Belle, Marbles, Olaf and Andy", "3 siblings: Spike, John and Linus", "1 sibling: Belle"],
    correctAnswer: "5 siblings: Spike, Belle, Marbles, Olaf and Andy",
  
  }, {
    question: "What was the name of Snoopy's first owner",
    answers: ["Charlie Brown", "Lila", "Pig Pen"],
    correctAnswer: "Pig Pen",

  }, {
    question: "We all know Snoopy lives with Charlie Brown, but he has a special place just for him. Where is that?",
    answers: ["&In the dining room, under the table", "In Charlie Brown closet", "In Charlie Brown's yard. A red doghouse"],
    correctAnswer: "In Charlie Brown's yard. A red doghouse",


  }, {

    question: "Where does Snoopy's brother, Spike live?",
    answers: ["In a forest" , " In a desert", "On an island"],
    correctAnswer: "In a forest",

  }, {
    question: "What is Snoopy's only regret in life",
    answers: ["He was born as a beagle when wanting to be a Golden Retriever ", " His extremely unpopular owner, Charlie Brown ", 
    " His childhood "],
    correctAnswer: "His childhood",
  }];

// The variable `question` isn't defined anywhere, so this just empties the html for #question
$("#question").html(question);
// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      // console.log is great for development, but try to keep them out of your production code.
      // console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {
    // This logic is fairly repetitive and I'd encourage you to look out for 
    // places where you find yourself writing the same code over and over again
    // so that you can try to refactor it to be more DRY and dynamic.
    // For instance, you could loop through all of the questions in your
    // above array and then grab the checked value for each iteration like so:

    questions.forEach(function(question, index) {

      var answer = $("input[name='question-" + index + "']:checked")

      if (answer.val() === question.correctAnswer) {
        game.correct ++
      }
      else {
        game.incorrect ++
      }

    })

    // Also, this use of `$.each` is kind of misleading because it suggests that there are 
    // multiple checked question elements that you're running this function for. In 
    // actuality, you're only checking one checked element per call to `$.each`.
  //   $.each($("input[name='question-0']:checked"), function() {
  //     if ($(this).val() === questions[0].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  //   $.each($("input[name='question-1']:checked"), function() {
  //     if ($(this).val() === questions[1].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  //   $.each($("input[name='question-2']:checked"), function() {
  //     if ($(this).val() === questions[2].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  //   $.each($("input[name='question-3']:checked"), function() {
  //     if ($(this).val() === questions[3].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  //   $.each($("input[name='question-4']:checked"), function() {
  //     if ($(this).val() === questions[4].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  //   $.each($("input[name='question-5']:checked"), function() {
  //     if ($(this).val() === questions[5].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  //   $.each($("input[name='question-6']:checked"), function() {
  //     if ($(this).val() === questions[6].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  //   $.each($("input[name='question-7']:checked"), function() {
  //     if ($(this).val() === questions[7].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  // $.each($("input[name='question-8']:checked"), function() {
  //     if ($(this).val() === questions[8].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });

  //   $.each($("input[name='question-9']:checked"), function() {
  //     if ($(this).val() === questions[9].correctAnswer) {
  //       game.correct++;
  //     }
  //     else {
  //       game.incorrect++;
  //     }
  //   });





    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});