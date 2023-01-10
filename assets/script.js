var apiKey = "uKG2SiK0W8aXLAwxchcJPB34yUOTNmhcTbFrnkScrYNAfgvmHU";
var pfSecret = "pkUPWjL7ux0HicwKDrP0aKXCV9GZv1emPlCXhGmg";



fetch("https://api.petfinder.com/v2/oauth2/token", {
  body: "grant_type=client_credentials&client_id=" + apiKey + "&client_secret=" + pfSecret,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
}).then(function (response) {
    return response.json();
})
.then(function (credentials) {
    console.log(credentials) 
    fetch("https://api.petfinder.com/v2/animals?type=dog&location=19145"
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

var dogKey = "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n"
