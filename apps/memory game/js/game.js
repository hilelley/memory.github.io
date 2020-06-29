$(document).ready(function () {
  // Handler for .ready() called.

  // Those are global variables, they stay alive and reflect the state of the game
  var elPreviousCard = null;
  var flippedCouplesCount = 0;
  // This is a constant that we dont change during the game (we mark those with CAPITAL letters)
  var TOTAL_COUPLES_COUNT = 3;
  var divs = document.querySelectorAll("class");
  var i = 0;
  // Load an audio file
  var audioWin = new Audio("sound/win.mp3");
  var right = new Audio("sound/right.mp3");
  var wrong = new Audio("sound/wrong.mp3");

  localStorage.setItem("audioWin", "audioWin");

  // This function is called whenever the user click a card

  let game_start_time = Date.now();
  console.log(game_start_time);

  start_timer();

  $(".card").on("click", function () {
    let elCard = $(this);
    elCard.addClass("isProcessing");

    if ($(".isProcessing").length < 3) {
      console.log(elCard);
      if (elCard.hasClass("flipped")) {
        return;
      }

      // Flip it
      elCard.addClass("flipped");

      // This is a first card, only keep it in the global variable
      if (elPreviousCard === null) {
        elPreviousCard = elCard;
      } else {
        // get the data-card attribute's value from both cards
        var card1 = elPreviousCard.attr("data-card");
        var card2 = elCard.attr("data-card");

        // No match, schedule to flip them back in 1 second

        if (card1 !== card2) {
          setTimeout(function () {
            elCard.removeClass("flipped");
            elPreviousCard.removeClass("flipped");
            elPreviousCard = null;
            $(".card").removeClass("isProcessing");
            wrong.play();
          }, 1000);
        } else {
          // Yes! a match!
          flippedCouplesCount++;
          elPreviousCard = null;
          $(".card").removeClass("isProcessing");
          console.log(flippedCouplesCount);

          if (TOTAL_COUPLES_COUNT === flippedCouplesCount) {
            let game_end_time = Date.now();

            let game_time = game_end_time - game_start_time;
            console.log(game_time);
            var local_game_time =
              localStorage.getItem("game_time") !== null
                ? localStorage.getItem("game_time")
                : 50000000;
            if (local_game_time > game_time) {
              localStorage.setItem("game_time", game_time);
            }

            $(".play").show();

            alert("game over");
            // audioWin.play();
          }
        }
      }
    } else {
      $(".card").removeClass("isProcessing");
      retrun;
    }
  });

  $(".play").on("click", function () {
    $(".play").hide();
    flippedCouplesCount = 0;
    start_timer();
    $(".card").removeClass("flipped");
    $(".cards").randomize(".card");
  });

  $(".change_user").on("click", function () {
    var audio = localStorage.getItem("audioWin");
    alert(audio);
  });

  $(".best_time").on("click", function () {
    var game_time = localStorage.getItem("game_time");
    $(".best_time_show").text(game_time);
  });

  function start_timer() {
    $(".Timer").html("");
    var start = "";
    var start = new Date();
    setInterval(function () {
      $(".Timer").text(Math.floor((new Date() - start) / 1000));
    }, 1000);
  }

  $.fn.randomize = function (childElem) {
    return this.each(function () {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function () {
        return Math.round(Math.random()) - 0.5;
      });

      $this.remove(childElem);

      for (var i = 0; i < elems.length; i++) $this.append(elems[i]);
    });
  };
});
