//event listener to detect button click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var textInside = this.innerHTML;
    playSound(textInside);
    addAnimation(textInside);

  });

}
//event listener to detect key press
document.addEventListener("keydown", function(event) {
  var textInside = event.key;

  playSound(textInside);
  addAnimation(textInside);

});

//function to play sounds
function playSound(textInside) {
  switch (textInside) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log('textInside');

  }
}

//function to add animation to the active button
function addAnimation(textInside) {
  var activeButton = document.querySelector("." + textInside);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 10);
}