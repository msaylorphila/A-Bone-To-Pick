var pfApiKey = "uKG2SiK0W8aXLAwxchcJPB34yUOTNmhcTbFrnkScrYNAfgvmHU";
var pfSecret = "pkUPWjL7ux0HicwKDrP0aKXCV9GZv1emPlCXhGmg";
var dogApiKey = "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n";
var inputEl = document.getElementById('zipInput');
var dogFormEl = document.getElementById('dogForm');
var breedInputEl = document.getElementById('breedSelect');
var nextBtn = document.getElementById('next');
var shareBtn = document.getElementById('share-button');
var receiveBtn = document.getElementById('receive-button');
var receiveFormEl = document.getElementById('receive-form');
var receiveInput = document.getElementById('receive-input');
var modalBg = document.querySelector('.modal-background');
var sendModal = document.getElementById('send-modal');
var receiveModal = document.getElementById('receive-modal');
var modalUrl = document.getElementById('modal-url');
var dogContainer = document.querySelector('.doggy-dash');
var collectionButton = document.getElementById('collectionButton');
var showInfo = document.querySelector('.card');
var homeButton = document.getElementById('homeButton');
var donationButton = document.getElementById('donationEl');

var iterator = 0;
var iteratorMax = 5;
var allDogsGoToVar;
var currentDog;

$("#next").hide();
$("#share-button").hide();
function getPetsByZip(event) {
  event.preventDefault();
  iterator = 0;
  iteratorMax = 5;
  dogContainer.replaceChildren();

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
      var breedInputVal = breedInputEl.value;
      var zipcode = inputEl.value;
      var pfApiUrl = "https://api.petfinder.com/v2/animals?breed=" + breedInputVal + "&location=" + zipcode + "&sort=distance";
      console.log(breedInputVal)
      fetch(pfApiUrl
        , {
          headers: {
            Authorization: "Bearer " + credentials.access_token
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          allDogsGoToVar = data;
          getDogInfo(allDogsGoToVar);
        })
    })
}
function getPetsByID(dogID) {
  console.log(dogID);
  iterator = 0;
  iteratorMax = 5;

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
      var pfApiUrl = "https://api.petfinder.com/v2/animals/" + dogID;

      fetch(pfApiUrl
        , {
          headers: {
            Authorization: "Bearer " + credentials.access_token
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          allDogsGoToVar = data;
          getDogInfo(allDogsGoToVar);
        })
    })
}
function dogApiByBreed(currentDog, breedsPrimary) {
  fetch('https://api.api-ninjas.com/v1/dogs?name=' + breedsPrimary, {
    method: "GET",
    headers: { "X-Api-Key": "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n" },
    contentType: "application/json"
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getDogStats(data, currentDog);
    })
}
// if you want to add more data to the card,/ dog Object start here
function getDogInfo(allDogsGoToVar) {
  console.log(allDogsGoToVar);
  if (allDogsGoToVar.hasOwnProperty('animals')) {
    for (var i = iterator; i <= iteratorMax && i < allDogsGoToVar.animals.length; i++) {
      var dogSelect = allDogsGoToVar.animals[i];
      var houseTrained = dogSelect.attributes.house_trained;
      var dogID = dogSelect.id;
      var name = dogSelect.name;
      var age = dogSelect.age;
      var genderFromPF = dogSelect.gender;
      var photo = dogSelect.primary_photo_cropped.full;
      var breedsPrimary = dogSelect.breeds.primary;
      var size = dogSelect.size;
      var contact = dogSelect.contact;
      var description = dogSelect.description;
      var status = dogSelect.status;
      if (photo === null) {
        var currentDog = {
          ID: dogID,
          name: name,
          age: age,
          sex: genderFromPF,
          photo: "assets/images/default-dog.png",
          breed: breedsPrimary,
          size: size,
          trained: houseTrained,
          contact: contact,
          description:description,
          status: status,
        };

      }
      currentDog = {
        ID: dogID,
        name: name,
        age: age,
        sex: genderFromPF,
        photo: photo,
        breed: breedsPrimary,
        size: size,
        trained: houseTrained,
        contact: contact,
        description:description,
        status: status,
      }
      dogApiByBreed(currentDog, breedsPrimary, genderFromPF);

    }
  } else if (allDogsGoToVar.hasOwnProperty('animal')) {
    var dogSelect = allDogsGoToVar.animal;
    var houseTrained = dogSelect.attributes.house_trained;
    var dogID = dogSelect.id;
    var name = dogSelect.name;
    var age = dogSelect.age;
    var genderFromPF = dogSelect.gender;
    var photo = dogSelect.primary_photo_cropped.full;
    var breedsPrimary = dogSelect.breeds.primary;
    var size = dogSelect.size;
    var contact = dogSelect.contact;
    var description = dogSelect.description;
    var status = dogSelect.status;

    if (photo === null) {
      var currentDog = {
        ID: dogID,
        name: name,
        age: age,
        sex: genderFromPF,
        photo: "assets/images/default-dog.png",
        breed: breedsPrimary,
        size: size,
        trained: houseTrained,
        contact: contact,
        description:description,
        status: status,
      };

    }
    currentDog = {
      ID: dogID,
      name: name,
      age: age,
      sex: genderFromPF,
      photo: photo,
      breed: breedsPrimary,
      size: size,
      trained: houseTrained,
      contact: contact,
      description:description,
      status: status,
    }
    dogApiByBreed(currentDog, breedsPrimary, genderFromPF);
  }
}
function getDogStats(data, currentDog) {
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
  currentDog.minHeightFemale = breed.min_height_female;
  currentDog.maxHeightFemale = breed.max_height_female;
  currentDog.minWeightFemale = breed.min_weight_female;
  currentDog.maxWeightFemale = breed.max_weight_female;
  currentDog.minHeightMale = breed.min_height_male;
  currentDog.maxHeightMale = breed.max_height_male;
  currentDog.minWeightMale = breed.min_weight_male;
  currentDog.maxWeightMale = breed.max_weight_male;
  makeDogCard(currentDog);
}

// small bug in this function
function collectCurrentDog(currentDog) {
  console.log("collect dog called");
  var dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
  console.log(currentDog)
  if (currentDog.hasOwnProperty('animal')){
    currentDog= currentDog.animal
  }
  console.log(dogCollection)
  if (dogCollection == null) {
    dogCollection = [];
  } else 
  for (var i = 0; i < dogCollection.length; i++) {
    if (dogCollection[i] === currentDog) {
      console.log('true')
      localStorage.setItem('dogCollectionArr', JSON.stringify(dogCollection));
      return false;
    }
  }
  // arr and puppy are just any named parameters
  // function(dog){dog.ID === puppy.ID} || DogCollection[0] = dog 
  function dogSearch(arr, puppy){
    if (arr.find( dog => dog.ID === puppy.ID)){
      return true;
    } else {
      return false;
    }
  }

  // let dogSearch = (arr,puppy) => { }
  // let dogSearch = arr => console.log(arr)

  if (!dogSearch(dogCollection, currentDog)) {
  dogCollection.push(currentDog);
  console.log("i'm here");
  };
  localStorage.setItem('dogCollectionArr', JSON.stringify(dogCollection));
  
}


// *************SHARE BUTTON STUFF*******************
function activateShareBtn (currentDog) {
  shareBtn.addEventListener("click", function() {
    let urlData = btoa(JSON.stringify(currentDog));
    console.log(urlData);
    console.log(typeof urlData);
    sendModal.classList.add('is-active');
    modalUrl.textContent = urlData;
  });
};
modalBg.addEventListener("click", function(){
    sendModal.classList.remove('is-active');
});

receiveBtn.addEventListener('click', function(){
  receiveModal.classList.add("is-active");
});

receiveFormEl.addEventListener('submit', function(event){
  event.preventDefault();
  $('#receive-modal').hide();

  makeDogCard(JSON.parse(atob(receiveInput.value)))
});

// this function got our array and is now complete and null
// function breedQuery(credentials) {
//   fetch('https://api.petfinder.com/v2/types/dog/breeds',
//   {
//     headers: {
//       Authorization: "Bearer " + credentials.access_token
//     }
//   }).then(function (response) {
//     return response.json();
//   }).then(function (data) {
//     console.log(data);
//     for (var i = 0; i < data.breeds.length; i++){
//       console.log(data.breeds[i].name)
//       var breedNames = data.breeds[i].name;
//       dogBreedsArr.push(breedNames);
//       // console.log(dogBreedsArr);
//     }
//     console.log(dogBreedsArr);
//   })

donationButton.addEventListener('click', function(){
  window.location.href = 'https://www.aspca.org/ways-to-give' });



nextBtn.addEventListener('click', function (event) {
  iterator += 6;
  iteratorMax += 6;
  dogContainer.replaceChildren();
  getDogInfo(allDogsGoToVar);
})

dogFormEl.addEventListener('submit', function (event) {
  getPetsByZip(event);
  $("#next").show();
  $("#share-button").show();
});