var pfApiKey = "uKG2SiK0W8aXLAwxchcJPB34yUOTNmhcTbFrnkScrYNAfgvmHU";
var pfSecret = "pkUPWjL7ux0HicwKDrP0aKXCV9GZv1emPlCXhGmg";
var dogApiKey = "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n";
var inputEl = document.getElementById('zipInput');
var zipcode = inputEl.value;





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
    fetch("https://api.petfinder.com/v2/animals?type=dog&location=" + zipcode
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

// *****************simple fetch for dog api, better to have variables for 
// apiKey in the headers and greyhound(breed name) in url*****************
fetch('https://api.api-ninjas.com/v1/dogs?name=greyhound', {
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
