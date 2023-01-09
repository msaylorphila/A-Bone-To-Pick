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
    fetch("https://api.petfinder.com/v2/types", {
    headers: {
      Authorization: "Bearer " + credentials.access_token
    }   
  }).then(function (response){
    return response.json()
  }).then(function (data){
    console.log(data.types[0])

  })
})