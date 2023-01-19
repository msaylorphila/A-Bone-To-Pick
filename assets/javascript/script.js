var pfApiKey = "uKG2SiK0W8aXLAwxchcJPB34yUOTNmhcTbFrnkScrYNAfgvmHU";
var pfSecret = "pkUPWjL7ux0HicwKDrP0aKXCV9GZv1emPlCXhGmg";
var dogApiKey = "7VT9G3psGTVpzFOhgUZsag==6qGoaeaUyBn1jA8n";
var inputEl = document.getElementById('zipInput');
var dogFormEl = document.getElementById('dogForm');
var breedInputEl = document.getElementById('breedSelect');
var nextBtn = document.getElementById('next');
var shareBtn = document.getElementById('share-button');
var receiveBtn = document.getElementById('receive-button');
var receivePackBtn = document.getElementById('receive-pack-button')
var receiveFormEl = document.getElementById('receive-form');
var receivePackEl = document.getElementById('receive-form-pack');
var receiveInput = document.getElementById('receive-input');
var receivePack = document.getElementById('receive-input-pack');
var modalBg = document.querySelector('.modal-background');
var modalBgtwo = document.getElementById('mbgtwo');
var sendModal = document.getElementById('send-modal');
var sendPack  = document.getElementById('send-pack');
var receiveModal = document.getElementById('receive-modal');
var receiveModalPack = document.getElementById('receive-modal-pack');
var modalUrl = document.getElementById('modal-url');
var packUrl = document.getElementById('pack-url');
var dogContainer = document.querySelector('.doggy-dash');
var collectionButton = document.getElementById('collectionButton');
var showInfo = document.querySelector('.card');
var homeButton = document.getElementById('homeButton');
var donationButton = document.getElementById('donationEl');
var shareCollection = document.getElementById('share-collection');
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
let dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
var doggyDash = document.querySelector('.doggy-dash');
let dogInfo = document.querySelector('.dog-info');
function grabCardsFromStorage() {
    doggyDash.replaceChildren();
    dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
    console.log(dogCollection);
    for (var i = 0; i < dogCollection.length; i++) {
        let currentDog = dogCollection[i];
        activateShareBtn(currentDog);
        makeDogCard(currentDog);
    }
}

function makeDogCard(currentDog) {
    console.log(currentDog);
    let dogCardBorder = document.createElement('div');
    let cardHeader = document.createElement('div');
    let cardHeader2 = document.createElement('div')
    let name = document.createElement('span');
    let age = document.createElement('span');
    let breed = document.createElement('span');
    let photo = document.createElement('img');
    let dogAttr = document.createElement('div');
    let size = document.createElement('span');
    let houseTrained = document.createElement('span');
    let dogStats = document.createElement('div');
    let dogCard = document.createElement('div');
    let description = document.createElement('div');
    let protectiveness = document.createElement('span');
    let playfulness = document.createElement('span');
    let trainability = document.createElement('span');
    let energy = document.createElement('span');
    let powerLevel = document.createElement('div');
    let bark = document.createElement('span');
    let gender = document.createElement('span');
    dogCard.setAttribute('data-id', currentDog.ID);
    bark.setAttribute('class', "item evil");
    powerLevel.setAttribute('class', 'power-level');
    dogCard.setAttribute('class', "card");
    dogCardBorder.setAttribute('class', 'card-border');
    cardHeader.setAttribute('class', 'card-header');
    cardHeader2.setAttribute('class', 'card-header2');
    name.setAttribute('class', 'name');
    gender.setAttribute('class', 'gender');
    age.setAttribute('class', 'age');
    breed.setAttribute('class', 'breed');
    photo.setAttribute('src', currentDog.photo);
    photo.onerror = function () {
        photo.setAttribute('src', "./assets/images/default-dog.png");
    }
    photo.setAttribute('alt', "photo of Doggo");
    dogAttr.setAttribute('class', 'dog-attributes');
    size.setAttribute('class', 'size');
    dogStats.setAttribute('class', 'dog-stats');
    houseTrained.setAttribute('class', 'house-trained');
    description.setAttribute('class', 'description');
    protectiveness.setAttribute('class', 'item');
    playfulness.setAttribute('class', 'item');
    trainability.setAttribute('class', 'item');
    energy.setAttribute('class', 'item');
    energy.textContent = "Energy:";
    protectiveness.textContent = "Protectiveness:";
    playfulness.textContent = "Playfulness:";
    trainability.textContent = "Trainability:";
    bark.textContent = "barking";
    name.textContent = currentDog.name;
    age.textContent = currentDog.age;
    breed.textContent = currentDog.breed;
    size.textContent = "size: " + currentDog.size;
    gender.textContent = currentDog.sex;
    if (currentDog.houseTrained === true) {
        let toiletIcon = document.createElement('i');
        toiletIcon.setAttribute('class', 'fa-solid fa-toilet');
        houseTrained.appendChild(toiletIcon);
    } else {
        let poopIcon = document.createElement('i');
        poopIcon.setAttribute('class', ' fa-solid fa-poop');
        houseTrained.appendChild(poopIcon);
    }
    dogCard.appendChild(dogCardBorder);
    dogCardBorder.appendChild(cardHeader);
    dogCardBorder.appendChild(cardHeader2)
    cardHeader.appendChild(name);
    cardHeader2.appendChild(age);
    cardHeader.appendChild(breed);
    cardHeader2.appendChild(gender);
    dogCardBorder.appendChild(photo);
    dogCardBorder.appendChild(dogAttr);
    dogAttr.appendChild(size);
    dogAttr.appendChild(houseTrained);
    dogCardBorder.appendChild(dogStats);
    dogStats.appendChild(description);
    description.appendChild(energy);
    description.appendChild(trainability);
    description.appendChild(playfulness);
    description.appendChild(protectiveness);
    description.appendChild(bark);
    dogStats.appendChild(powerLevel);
    energyIcon(currentDog.energy);
    trainIcon(currentDog.trainability);
    playIcon(currentDog.playfulness);
    protectIcon(currentDog.protectiveness);
    barkIcon(currentDog.barking);

    function energyIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', 'fa-solid fa-bolt-lightning');
            createSpan.appendChild(createIcon);
            powerLevel.appendChild(createSpan);
        }
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', 'fa-solid fa-bolt-lightning');
            createSpan.appendChild(createIcon);
            powerLevel.appendChild(createSpan);
        }
    }
    function trainIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-scale-balanced');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-scale-balanced');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function playIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-face-grin-tears');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-face-grin-tears');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function protectIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'item2');
            let createIcon = document.createElement('i')
            createIcon.setAttribute('class', 'fa-solid fa-shield');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i')
            createIcon.setAttribute('class', 'fa-solid fa-shield');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function barkIcon(num) {
        if (num == 0) {
            let createSpan = document.createElement('span');
            let createIcon = document.createElement('i');
            createSpan.setAttribute('class', 'item2');
            createIcon.setAttribute('class', 'fa- solid fa-volume-high');
            createSpan.appendChild(createIcon);
            powerLevel.appendChild(createSpan);
        }
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', 'fa-solid fa-volume-high');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function dogInfoDisplay() {
        dogInfo.replaceChildren();
        console.log(allDogsGoToVar)
        dogID = dogCard.getAttribute('data-id');
        console.log(dogID);
        console.log(allDogsGoToVar);
        console.log(currentDog);
         
        if (typeof allDogsGoToVar !== "undefined" && allDogsGoToVar.hasOwnProperty('animals')) {
            console.log("true")
            for (var i = 0; i < allDogsGoToVar.animals.length; i++) {
                let idCheck = allDogsGoToVar.animals[i].id;
                console.log(dogID);
                console.log(idCheck);
                if (dogID == idCheck) {
                    let ourDog = allDogsGoToVar.animals[i];
                    console.log(ourDog)
                    collectCurrentDog(currentDog);
                    activateShareBtn(currentDog);
                    let name = document.createElement('span');
                    let photo = document.createElement('img');
                    let sex = document.createElement('span');
                    let primaryBreed = document.createElement('span');
                    let heightRange = document.createElement('span');
                    let weightRange = document.createElement('span');
                    let description = document.createElement('span');
                    let status = document.createElement('span');
                    let contactEmail = document.createElement('a');
                    let phoneNumber = document.createElement('a');
                    let emailIcon = document.createElement('img');
                    let phoneIcon = document.createElement('img');
                    
                   
                    phoneNumber.setAttribute('href', 'tel: +1' + ourDog.contact.phone);
                    contactEmail.setAttribute('href', 'mailto:' + ourDog.contact.email);
                    phoneIcon.setAttribute('src', './assets/images/Phone-Icon-PNG.png');
                    emailIcon.setAttribute('src', './assets/images/mail.png');
                    
                    status.textContent = ourDog.status;
                    description.textContent = ourDog.description;
                    primaryBreed.textContent = ourDog.breeds.primary;
                    heightRange.textContent = currentDog.minHeightFemale + "inches - " + currentDog.maxHeightMale + "inches";
                    weightRange.textContent = currentDog.minWeightFemale + "lbs - " + currentDog.maxWeightMale + "lbs";
                    sex.textContent = ourDog.gender;
                    
                    photo.setAttribute('src', currentDog.photo);
                    photo.onerror = function () {
                      photo.setAttribute('src', "./assets/images/default-dog.png");
                  }
                    name.textContent = ourDog.name;
                    dogInfo.appendChild(name);
                    dogInfo.appendChild(photo);
                    dogInfo.appendChild(sex);
                    dogInfo.appendChild(primaryBreed);
                    dogInfo.appendChild(heightRange);
                    dogInfo.appendChild(weightRange);
                    dogInfo.appendChild(description);
                    dogInfo.appendChild(status);
                    dogInfo.appendChild(contactEmail);
                    contactEmail.appendChild(emailIcon);
                    dogInfo.appendChild(phoneNumber);
                    phoneNumber.appendChild(phoneIcon);
                    return;
                } 
            }
        } else for (var i = 0; i < dogCollection.length ; i++) {
            console.log(dogCollection[i].ID);
            
            if (dogID == dogCollection[i].ID) {
                let ourDog = dogCollection[i];
                console.log(ourDog);
                console.log(currentDog);
                let name = document.createElement('span');
                let photo = document.createElement('img');
                let sex = document.createElement('span');
                let primaryBreed = document.createElement('span');
                let heightRange = document.createElement('span');
                let weightRange = document.createElement('span');
                let description = document.createElement('span');
                let status = document.createElement('span');
                let contactEmail = document.createElement('a');
                let phoneNumber = document.createElement('a');
                let emailIcon = document.createElement('img');
                let phoneIcon = document.createElement('img'); 
                phoneNumber.setAttribute('href', 'tel: +1' + ourDog.contact.phone);
                contactEmail.setAttribute('href', 'mailto:' + ourDog.contact.email);
                phoneIcon.setAttribute('src', './assets/images/Phone-Icon-PNG.png');
                phoneIcon.setAttribute('class', 'phoneIcon');
                emailIcon.setAttribute('src', './assets/images/mail.png');
                emailIcon.setAttribute('class', 'emailIcon');
                status.textContent = ourDog.status;
                description.textContent = ourDog.description;
                primaryBreed.textContent = ourDog.breed;
                heightRange.textContent = currentDog.minHeightFemale + "lbs - " + currentDog.maxHeightMale + "lbs";
                weightRange.textContent = currentDog.minWeightFemale + "lbs - " + currentDog.maxWeightMale + "lbs";
                sex.textContent = ourDog.gender;
                photo.setAttribute('src', currentDog.photo);
                photo.onerror = function () {
                  photo.setAttribute('src', "./assets/images/default-dog.png");
              }
                name.textContent = ourDog.name;
                dogInfo.appendChild(name);
                dogInfo.appendChild(photo);
                dogInfo.appendChild(sex);
                dogInfo.appendChild(primaryBreed);
                dogInfo.appendChild(heightRange);
                dogInfo.appendChild(weightRange);
                dogInfo.appendChild(description);
                dogInfo.appendChild(status);
                dogInfo.appendChild(contactEmail);
                contactEmail.appendChild(emailIcon);
                dogInfo.appendChild(phoneNumber);
                phoneNumber.appendChild(phoneIcon);
                return;
            }
        }
    }
    doggyDash.appendChild(dogCard);

    dogCard.addEventListener('click', function () {
        dogInfoDisplay();
    })
}
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
  function dogSearch(arr, puppy){
    if (arr.find( dog => dog.ID === puppy.ID)){
      return true;
    } else {
      return false;
    }
  }
  if (!dogSearch(dogCollection, currentDog)) {
  dogCollection.push(currentDog);
  console.log("i'm here");
  };
  localStorage.setItem('dogCollectionArr', JSON.stringify(dogCollection));
}
collectionButton.addEventListener('click',function(){ 
    $("#share-button").show()
    grabCardsFromStorage()});

// *************SHARE BUTTON STUFF*******************
function activateShareBtn (currentDog) {
  shareBtn.addEventListener("click", function() {
    console.log(JSON.stringify(currentDog))
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

  makeDogCard(JSON.parse(atob(receiveInput.value)));
});
donationButton.addEventListener('click', function(){
  window.location.href = 'https://www.aspca.org/ways-to-give' 
});
shareCollection.addEventListener('click', function(){
  let test = localStorage.getItem('dogCollectionArr');
  console.log(test)
  let urlData = btoa(test);
    console.log(urlData);
    console.log(typeof urlData);
    sendPack.classList.add('is-active');
    packUrl.textContent = urlData;
});
receivePackBtn.addEventListener('click', function(){
  receiveModalPack.classList.add("is-active");
  console.log("hi")
});
receivePackEl.addEventListener('submit', function(event){
  event.preventDefault();
  $('#receive-modal').hide();
  let friendsPack = JSON.parse(atob(receivePack.value))
  console.log(friendsPack)
  for (var i=0; i<friendsPack.length; i++){
    makeDogCard(friendsPack[i])
  }

});

modalBgtwo.addEventListener("click", function(){
  sendPack.classList.remove('is-active');
});
nextBtn.addEventListener('click', function (event) {
  iterator += 6;
  iteratorMax += 6;
  dogContainer.replaceChildren();
  getDogInfo(allDogsGoToVar);
});
dogFormEl.addEventListener('submit', function (event) {
  getPetsByZip(event);
  $("#next").show();
  $("#share-button").show();
});