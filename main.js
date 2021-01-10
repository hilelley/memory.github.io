window.addEventListener("load", function () {
  // localStorage.removeItem("LowestTime");
  let start = null;
  let firstCard = null;
  let numClick = 0;
  let seconundCard = null;
  let intervalStoper = null;
  let numWin = 0;
  let LowestTime = null;
  let Second = document.querySelector("#Seconds");
  let minute = document.querySelector("#minutes");
  let cards = document.getElementById("cards");
  cards.addEventListener("click", flip);
  cards.addEventListener("click", stratTimer);
  function stratTimer() {
    numClick++;
    if (numClick === 1) {
      start = new Date();
      intervalStoper = setInterval(stoper, 1000);
    } else {
      numClick = numClick;
    }
  }


  
  function flip() {
    let card = event.target.closest(".card");
    if (!firstCard) {
      card.classList.add("flipped");
      firstCard = card;
      music("flipCard");
      return;
    }
    if (!seconundCard) {
      card.classList.add("flipped");
      seconundCard = card;
      music("flipCard");

      if (firstCard.childNodes[1].src == seconundCard.childNodes[1].src) {
        setTimeout(() => {
          music("appiause");
        }, 600);
        setTimeout(() => {
          firstCard.classList.add("disnone");
          seconundCard.classList.add("disnone");
        }, 2100);
        numWin++;
        return;
      }
      if (firstCard.childNodes[1].src !== seconundCard.childNodes[1].src) {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          seconundCard.classList.remove("flipped");
          firstCard = null;
          seconundCard = null;
        }, 2000);
        setTimeout(() => {
          music("wrong");
        }, 500);
        return;
      }

      return;
    }
    if (seconundCard) {
      firstCard.classList.remove("flipped");
      seconundCard.classList.remove("flipped");
      firstCard = null;
      seconundCard = null;
    }
  }
  cards.addEventListener("mouseover", () => {
    if (numWin === 3) {
      let LowestTimeInlocal;
      clearInterval(intervalStoper);
      LowestTime = parseInt(minute.innerHTML / 60 + Second.innerHTML);
      if (!LowestTimeInlocal) {
        localStorage.setItem("LowestTime", LowestTime);
        LowestTimeInlocal = localStorage.getItem("LowestTime");
      } else if (LowestTime < LowestTimeInlocal) {
        localStorage.setItem("LowestTime", LowestTime);
        LowestTimeInlocal = localStorage.getItem("LowestTime");
      } else if (LowestTime > LowestTimeInlocal) {
        localStorage.setItem("LowestTime", LowestTimeInlocal);
      }

      spanbestTime = document.getElementById("spanbestTime");

      spanbestTime.innerHTML = "in minets " + LowestTimeInlocal;
    }
  });
  function stoper() {
    let Seconds = Math.floor((new Date() - start) / 1000);
    if (Seconds < 60) {
      if (Seconds < 10) {
        Second.innerHTML = "0" + Seconds;
      } else if (Seconds > 9) {
        Second.innerHTML = Seconds;
      }
    } else if (Seconds === 60) {
      Second.innerHTML = "00";
      minute.innerHTML = "01";
    } else if (Seconds > 60) {
      let newvalInSec = Seconds / 60;
      let MinRound = Math.floor(newvalInSec);
      let new1valInSec = Math.floor(newvalInSec) * 1000;
      let new2valInSec = newvalInSec * 1000;
      let new3valInSec = new2valInSec - new1valInSec;
      let new4valInSec = Math.round(new3valInSec);
      let new5valInSec = (new4valInSec * 0.6) / 10;
      let SecRound = Math.round(new5valInSec);
      Second.innerHTML = 00;
      if (SecRound < 10) {
        Second.innerHTML = "0" + SecRound;
      } else if (SecRound > 9) {
        Second.innerHTML = SecRound;
      }
      if (MinRound < 10) {
        minute.innerHTML = "0" + MinRound;
      } else if (MinRound > 9) {
        minute.innerHTML = MinRound;
      }
    }
  }

  function music(type) {
    let appiause = new Audio("./Audio/Appiause.wav");
    let wrong = new Audio("./Audio/Wrong.mp3");
    let victory = new Audio("./Audio/Victory.mp3");
    let flipCard = new Audio("./Audio/flipcard.mp3");
    switch (type) {
      case "appiause":
        appiause.play();
        break;

      case "wrong":
        wrong.play();
        break;

      case "victory":
        victory.play();
        break;

      case "flipCard":
        flipCard.play();
        break;
    }
  }
  btnbestTime = document.getElementById("btnbestTime");
  btnbestTime.addEventListener("click", show);
  function show() {
    let spanbestTime = document.getElementById("spanbestTime");
    LowestTimeInlocal = localStorage.getItem("LowestTime");
    if (!LowestTimeInlocal) {
      spanbestTime.innerHTML = "No result has been recorded yet";
      spanbestTime.style.visibility = "visible";
    } else {
      spanbestTime.innerHTML = LowestTimeInlocal + " minets ";
      spanbestTime.style.visibility = "visible";
    }

    setTimeout(() => {
      spanbestTime.style.visibility = "hidden";
    }, 10000);
  }
});
