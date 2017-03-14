$(document).ready(function() {
//Start Button

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Generate html and timer

$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	generateHTML();

	timerWrapper();

}); //Start button click

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
});

$("body").on("click", ".reset-button", function(event){
	resetGame();
});

});

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + 
	"</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + 
	correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + 
	"</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + 
	"</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + 
	"</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + 
	"</p>" + "<img class='center-block img-wrong' src='assets/img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + 
	questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + 
	"</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+
	"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

// Variables

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What was the first video game?", "Which princess serves as one of the Seven Sages overlooking Hyrule?", "Which villan holds Princess Peach captive?", "On Nintendo64, who is the fastest Mario Kart Racer?", "The classic NES system came to America in what year?", "Who was clearly the best character on Super Smash for N64?", "What timeless hero has been wielding sword and shield to save the princess for decades?", "Who is the original video game hero?"];
var answerArray = [["Zelda", "Counter-Strike", "Pong", "Space Invaders"], ["Zelda","Peach","Sara","Navi"], ["Wario", "Bowser", "Ganon", "Luigi"], ["Bowser","Toad","Luigi","Mario"], ["2017", "1995", "1985", "1988"], ["Captain Falcon","Pikachu","Yoshi","Kirby"], ["Mario", "Link", "Samus", "Luigi"], ["Megaman","Ness","Link","Mario"]];
var imageArray = ["<img class='center-block img-right' src='assets/img/pong.png'>", "<img class='center-block img-right' src='assets/img/zelda.png'>", "<img class='center-block img-right' src='assets/img/bowser.png'>", "<img class='center-block img-right' src='assets/img/toad.png'>", "<img class='center-block img-right' src='assets/img/nes.jpg'>", "<img class='center-block img-right' src='assets/img/kirby.png'>", "<img class='center-block img-right' src='assets/img/link.jpg'>", "<img class='center-block img-right' src='assets/img/mario.jpg'>"];
var correctAnswers = ["C. Pong", "A. Zelda", "B. Bowser", "B. Toad", "C. 1985", "D. Kirby", "B. Link", "D. Mario"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
