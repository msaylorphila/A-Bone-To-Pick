var pfApiKey = "uKG2SiK0W8aXLAwxchcJPB34yUOTNmhcTbFrnkScrYNAfgvmHU";
var pfSecret = "pkUPWjL7ux0HicwKDrP0aKXCV9GZv1emPlCXhGmg";
var dogApiKey = "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n";
var inputEl = document.getElementById('zipInput');
var dogFormEl = document.getElementById('dogForm')


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
    getDogInfo(data)
  })
})
//api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
}

function getDogInfo(data) {
    for (var i = 0; i <6; i++) {
        var dogSelect = data.animals[i];
        var name = dogSelect.name;
        var age = dogSelect.age;
        var contact = dogSelect.contact.email;
        var descriptionFromPF = dogSelect.description;
        var genderFromPF = dogSelect.gender;
        var photo = dogSelect.primary_photo_cropped.full;// we'll have to convert this to a png
        var status = dogSelect.status; //displays as "adoptable"
        var breedsMixed = dogSelect.breeds.mixed; //displays as true/false
        var breedsPrimary = dogSelect.breeds.primary;
        var dogCardArr = [name, age, contact, descriptionFromPF, genderFromPF, photo, status, breedsMixed, breedsPrimary]
        console.log(dogCardArr)
        dogApiByBreed(breedsPrimary)
       
}
}






dogFormEl.addEventListener('submit', function (event) { getPetsByZip(event)})



// *****************simple fetch for dog api, better to have variables for 
// apiKey in the headers and greyhound(breed name) in url*****************

function dogApiByBreed(breedsPrimary){
fetch('https://api.api-ninjas.com/v1/dogs?name=' + breedsPrimary, {
  method: "GET",
  headers: {"X-Api-Key" : "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n"},
  contentType: "application/json"
})
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
}
