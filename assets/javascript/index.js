var audio = new Audio("./assets/images/Video-[AudioTrimmer.com].mp3")
var dogpic = document.getElementById('dogpic')


    dogpic.addEventListener("click", () => {
      audio.play();
      function redirect () {
        setTimeout(myURL, 6000);
     }

     function myURL() {
        document.location.href = './landingpage.html';
     }
    redirect()
    })
