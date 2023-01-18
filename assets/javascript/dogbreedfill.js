$(function () {
    var dogBreeds = [
        "Australian Shepherd",
        "Beagle",
        "Bernese Mountain Dog",
        "Boston Terrier",
        "Boxer",
        "Cane Corso",
        "Chihuahua",
        "Chinese Crested Dog",
        "Chow Chow",
        "Cocker Spaniel",
        "Corgi",
        "Dachshund",
        "Dalmatian",
        "English Bulldog",
        "French Bulldog",
        "Golden Retriever",
        "Great Dane",
        "Greyhound",
        "Husky",
        "Irish Wolfhound",
        "Italian Greyhound",
        "Jack Russell Terrier",
        "Labrador Retriever",
        "Pomeranian",
        "Pomsky",
        "Pug",
        "Rottweiler",
        "Saint Bernard",
        "Siberian Husky",
    ]
    $('#breedSelect').autocomplete({
        source: dogBreeds,
    });

//     for (var i = 0; i < dogBreeds.length; i++)
//     fetch('https://api.api-ninjas.com/v1/dogs?name=' + dogBreeds[i], {
//     method: "GET",
//     headers: { "X-Api-Key": "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n" },
//     contentType: "application/json"
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(dogBreeds[i])
//       console.log(data)
      
//     })
});


  //*****************simple fetch for dog api, better to have variables for 
  // apiKey in the headers and greyhound(breed name) in url*****************
