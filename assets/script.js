var pfApiKey = "uKG2SiK0W8aXLAwxchcJPB34yUOTNmhcTbFrnkScrYNAfgvmHU";
var pfSecret = "pkUPWjL7ux0HicwKDrP0aKXCV9GZv1emPlCXhGmg";
var dogApiKey = "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n";
var inputEl = document.getElementById('zipInput');
var dogFormEl = document.getElementById('dogForm')



// Age- card
// Contact - dog info page
// description- dog info page
// gender- both
// name-both
// photos
// status
// breeds.mixed - both
// breeds.primary- card

function getPetsByZip(event){
  event.preventDefault();
 
  fetch("https://api.petfinder.com/v2/oauth2/token", {
  body: "grant_type=client_credentials&client_id=" + pfApiKey + "&client_secret=" + pfSecret,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
}).then(function (response) {
    return response.json();
})
.then(function (credentials) {
    console.log(credentials) 
    var zipcode = inputEl.value;
    var bla = "https://api.petfinder.com/v2/animals?type=dog&location=" + zipcode + "&sort=distance"
    fetch(bla
    , {
    headers: {
      Authorization: "Bearer " + credentials.access_token
    }   
  }).then(function (response){
    return response.json()
  }).then(function (data){
    console.log(data)

  })
})
//api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
}


// searchFormEl.addEventListener('submit', function (event) { getWeather(event, searchInput.value) });
dogForm.addEventListener('submit', function (event) { getPetsByZip(event)})