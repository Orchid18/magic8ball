$(document).ready(function(){

    var magic8ball = {};

    magic8ball.listofAnswers = ["24 Hour Flu", "Amnesia", "Batman", "Car Trouble", "Chicken Gave You a Bad Coupon", "Full Moon", "Huh?", "You Were Mugged", "It's In The Mail", "It's Not Your Job", "You've Got a Headache", "Jury Duty", "Kryptonite", "Mexican Food", "Your Fish Died", "No Hablo Ingleses", "Oprah", "There's GOT to Be a Better Way!", "Traffic Was Bad"];
  $("#answer").hide();

    magic8ball.askQuestion = function(question){
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      $("#8ball").effect( "shake" );
      $("#answer").fadeIn(4000);
      var randomNumber = Math.random();
      var randomNumberArray = randomNumber * this.listofAnswers.length;
      var randomIndex = Math.floor(randomNumberArray);
      var answer = this.listofAnswers[randomIndex];

      $("#answer").text( answer );

	    console.log(question);
      console.log(answer);
};



		var onClick = function() {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
      setTimeout(
        function(){
          var question = prompt("For what do you need an excuse?");
          magic8ball.askQuestion(question);
        }, 500)

  };
  $("#questionButton").click( onClick );

});
