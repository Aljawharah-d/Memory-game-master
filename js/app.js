var allcards = ['fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa-leaf','fa-bicycle','fa-bomb','fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa-leaf','fa-bicycle','fa-bomb'];
var flippedCards =  [];
var cardsArray  =  [];
var matchedCards =  [];

var icons = document.getElementsByClassName('icons');
var shuffleCards = shuffle (allcards);
for (i=0; i < icons.length; i++ ) {
 icons[i].className = shuffleCards[i] + ' fa icons';
}

function shuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;

   while (currentIndex !== 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
   }

   return array;
}


function openCards() {
var openCards = document.getElementsByClassName ('card');
console.log (openCards);
for (i=0; i < openCards.length; i++) {
 openCards[i].addEventListener('click', function clickCards () {
 cardsArray[0] = this;
 cardsArray[0].classList.add('open', 'show','disabled');
 console.log ('cardsArray:',cardsArray);



   if (cardsArray[1]) {
movesCount ();
    if (cardsArray[0].innerHTML === cardsArray[1].innerHTML) {
     cardsArray[0].classList.add('match');
     cardsArray[1].classList.add('match');
     matchedCards.push(cardsArray[0],cardsArray[1]);
     console.log ('matchedCards:',matchedCards);
     cardsArray[1] = null ;

    }
    //second if
   else {
     setTimeout (function(){
     cardsArray[0].classList.remove ('open', 'show','disabled');
     cardsArray[1].classList.remove ('open', 'show','disabled');
     cardsArray[0].addEventListener ('click', clickCards);
      cardsArray[1] = null ;
    }, 500);
    }
   }
// first if
  else {
     cardsArray[1] = cardsArray[0] ;
     flippedCards.push(this);
     console.log ('flipped card:',flippedCards);
   }

    if (allcards.length === matchedCards.length) {
     endGame ();
     winning ();

    }

 });
}

}

window.onload = openCards();

restart = document.getElementsByClassName ('restart');
restart[0].addEventListener ('click', function (){
 location.reload();
})


var timer = document.getElementById ('timer');
 var time= 0;
 var minutes= 0;
 var seconds= 0;

function startGame () {
 startime = setInterval ( function (){
  seconds++;
  if(seconds == 60){
      minutes++;
      seconds=0;
    }
  timer.innerHTML = minutes + 'm ' + seconds + 's ';
 }, 1000);
}

function endGame () {
 clearInterval (startime);
}


var moves = 0;
var moveCounter = document.getElementById('moves');
var stars = document.querySelectorAll(".fa-star");
var starsList = document.querySelectorAll(".stars");


function movesCount () {
moves++ ;
  moveCounter.innerHTML= moves;
  console.log(moveCounter);


  if ( moves === 10) {
    for( i= 0; i < 3; i++){
           if(i > 1){
 stars[i].style.display = 'none';

           }
       }
} else if (moves === 20) {
   for( i= 0; i < 3; i++){
           if(i > 0){
 stars[i].style.display = 'none';
           }
       }
   }

  if ( moves === 1) {
   startGame ();
  }
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var play = document.getElementById("playAgain");

function winning() {
       modal.style.display = "block";
       document.getElementById('p1').innerHTML = 'Congratulations';
       document.getElementById('p2').innerHTML = 'You did it in '+moves+' moves '+' and '+minutes+' mins '+seconds+' secs.';
var starRating = document.querySelector('.stars').innerHTML;
document.getElementById('starRating').innerHTML = 'Rating '+starRating;
}

span.onclick = function() {
 modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}
