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
});

