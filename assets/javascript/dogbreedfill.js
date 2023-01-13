$(function () {
    var dogBreeds = [
        "Akita",
        "Alaskan Malamute",
        "American Bulldog",
        "Australian Shepherd",
        "Basset Hound",
        "Beagle",
        "Bernese Mountain Dog",
        "Border Collie",
        "Boston Terrier",
        "Boxer",
        "Bull Terrier",
        "Cane Corso",
        "Chihuahua",
        "Chinese Crested Dog",
        "Chow Chow",
        "Cocker Spaniel",
        "Collie",
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
});


  //*****************simple fetch for dog api, better to have variables for 
  // apiKey in the headers and greyhound(breed name) in url*****************
