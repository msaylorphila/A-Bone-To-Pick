var pfApiKey = "uKG2SiK0W8aXLAwxchcJPB34yUOTNmhcTbFrnkScrYNAfgvmHU";
var pfSecret = "pkUPWjL7ux0HicwKDrP0aKXCV9GZv1emPlCXhGmg";
var dogApiKey = "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n";
var inputEl = document.getElementById('zipInput');
var dogFormEl = document.getElementById('dogForm')


function getPetsByZip(event) {
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
      console.log(credentials);
      var zipcode = inputEl.value;
      var bla = "https://api.petfinder.com/v2/animals?type=dog&location=" + zipcode + "&sort=distance"
      fetch(bla
        , {
          headers: {
            Authorization: "Bearer " + credentials.access_token
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data);
          getDogInfo(data);
        })
    })
  //api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
}
function dogApiByBreed(currentDog, breedsPrimary, genderFromPF) {
  fetch('https://api.api-ninjas.com/v1/dogs?name=' + breedsPrimary, {
    method: "GET",
    headers: { "X-Api-Key": "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n" },
    contentType: "application/json"
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      getDogStats(data, genderFromPF, currentDog);
    })
}

function getDogInfo(data) {
  for (var i = 0; i < 3; i++) {
    console.log(data);
    var dogSelect = data.animals[i];
    var dogID = dogSelect.id;
    var orgID = dogSelect.organization_id;
    var name = dogSelect.name;
    var age = dogSelect.age;
    var contact = dogSelect.contact.email;
    var descriptionFromPF = dogSelect.description;
    var genderFromPF = dogSelect.gender;
    var photo = dogSelect.primary_photo_cropped.full;// we'll have to convert this to a png
    var status = dogSelect.status; //displays as "adoptable"
    var breedsMixed = dogSelect.breeds.mixed; //displays as true/false
    var breedsPrimary = dogSelect.breeds.primary;
    var currentDog = {
      ID: dogID,
      name: name,
      age: age,
      sex: genderFromPF,
      photo: photo,
      breed: breedsPrimary
    };
    console.log(currentDog);
    var dogCardArr = [name, age, contact, descriptionFromPF, genderFromPF, photo, status, breedsMixed, breedsPrimary]
    // collectCurrentDog(currentDog)// console.log(dogCardArr)
    dogApiByBreed(currentDog, breedsPrimary, genderFromPF); //added genderFromPF to pass it to dogApi for height/weight

  }
}
function getDogStats(data, genderFromPF, currentDog) {
  console.log(data)
  var breed = data[0];
  var barking = breed.barking;
  var energy = breed.energy;
  var goodWithChildren = breed.good_with_children;
  var playfulness = breed.playfulness;
  var protectiveness = breed.protectiveness;
  var trainability = breed.trainability;
  currentDog.energy = energy;
  currentDog.playfulness = playfulness;
  currentDog.protectiveness = protectiveness;
  currentDog.trainability = trainability;
  currentDog.barking = barking;
  console.log(currentDog);
  var minHeightFemale = breed.min_height_female;
  var maxHeightFemale = breed.max_height_female;
  var minWeightFemale = breed.min_weight_female;
  var maxWeightFemale = breed.max_weight_female;
  var minHeightMale = breed.min_height_male;
  var maxHeightMale = breed.max_height_male;
  var minWeightMale = breed.min_weight_male;
  var maxWeightMale = breed.max_weight_male;
  var femaleStatsArr = [barking, energy, goodWithChildren, playfulness, protectiveness, trainability, minHeightFemale, maxHeightFemale, minWeightFemale, maxWeightFemale];
  var maleStatsArr = [barking, energy, goodWithChildren, playfulness, protectiveness, trainability, minHeightMale, maxHeightMale, minWeightMale, maxWeightMale];
  if (genderFromPF == "Female") {
    console.log(femaleStatsArr);
    console.log("I am a girl");
  } else {
    console.log(maleStatsArr);
    console.log("bro");
  };
  // collectCurrentDog(currentDog)
  makeDogCard(currentDog);
}

function makeDogCard(currentDog) {

}
function collectCurrentDog(currentDog) {
  console.log(currentDog);
  var dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));

  if (dogCollection == null) {
    dogCollection = [];
  };
  dogCollection.push(currentDog);
  console.log(dogCollection);
  localStorage.setItem('dogCollectionArr', JSON.stringify(dogCollection));
}
// *****************simple fetch for dog api, better to have variables for 
// apiKey in the headers and greyhound(breed name) in url*****************
dogFormEl.addEventListener('submit', function (event) { getPetsByZip(event) });