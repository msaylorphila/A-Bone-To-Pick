var audio = new Audio("./assets/images/Video-[AudioTrimmer.com].mp3")
var dogpic = document.getElementById('dogpic')
var margButton = document.getElementById('margGit')
var fredButton = document.getElementById('fredGit')
var joshButton = document.getElementById('joshGit')

dogpic.addEventListener("click", () => {
   audio.play();
   function redirect() {
      setTimeout(myURL, 6000);
   }

   function myURL() {
      document.location.href = './landingpage.html';
   }
   redirect()
})

margButton.addEventListener('click', function () {
   window.location.href = 'https://github.com/msaylorphila'
})

fredButton.addEventListener('click', function () {
   window.location.href = 'https://github.com/LearnedDr'
})
joshButton.addEventListener('click', function () {
   window.location.href = 'https://github.com/JoshEflin'
})