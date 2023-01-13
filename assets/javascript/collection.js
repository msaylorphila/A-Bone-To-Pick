// GET https://api.petfinder.com/v2/animals/{id}

let doggyDash = document.querySelector('.doggy-dash');
function grabCardsFromStorage(){
let dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
console.log(dogCollection)
for (var i = 0; i < dogCollection.length; i++) {
    let currentDog = dogCollection[i];
    console.log(currentDog)
    makeDogCard(currentDog);
}
    // makeDogCard(dogCollection[1])
    // makeDogCard(dogCollection[2])
    
}

function makeDogCard(currentDog) {
    let dogCardBorder = document.createElement('div');
    let cardHeader = document.createElement('div');
    let name = document.createElement('span');
    let age = document.createElement('span');
    let breed = document.createElement('span')
    let photo = document.createElement('img');
    let dogAttr = document.createElement('div');
    let size = document.createElement('span');
    let houseTrained = document.createElement('span');
    let dogStats = document.createElement('div')
    let dogCard = document.createElement('div');
    let description = document.createElement('div');
    let protectiveness = document.createElement('span');
    let playfulness = document.createElement('span');
    let trainability = document.createElement('span');
    let energy = document.createElement('span')
    let powerLevel = document.createElement('div')
    let bark = document.createElement('span')
    bark.setAttribute('class', "item evil")
    powerLevel.setAttribute('class', 'power-level')
    dogCard.setAttribute('class', "card");
    dogCardBorder.setAttribute('class', 'card-border');
    cardHeader.setAttribute('class', 'card-header');
    name.setAttribute('class', 'name');
    age.setAttribute('class', 'age');
    breed.setAttribute('class', 'breed');
    photo.setAttribute('src', currentDog.photo);
    photo.onerror= function(){
        console.log("hello")
    }
    photo.setAttribute('alt', "photo of Doggo")
    dogAttr.setAttribute('class', 'dog-attributes');
    size.setAttribute('class', 'size');
    dogStats.setAttribute('class', 'dog-stats');
    houseTrained.setAttribute('class', 'house-trained');
    description.setAttribute('class', 'description');
    protectiveness.setAttribute('class', 'item');
    playfulness.setAttribute('class', 'item');
    trainability.setAttribute('class', 'item');
    energy.setAttribute('class', 'item')
    energy.textContent = "Energy:";
    protectiveness.textContent = "Protectiveness:";
    playfulness.textContent = "Playfulness:";
    trainability.textContent = "Trainability:";
    bark.textContent= "barking"
    name.textContent = currentDog.name;
    age.textContent = currentDog.age;
    breed.textContent = currentDog.breed;
    size.textContent = currentDog.size
if (currentDog.houseTrained === true) {
    let toiletIcon = document.createElement('i')
    toiletIcon.setAttribute('class','fa-solid fa-toilet');
    houseTrained.appendChild(toiletIcon);
} else {
    let poopIcon= document.createElement('i')
    poopIcon.setAttribute('class', ' fa-solid fa-poop')
    houseTrained.appendChild(poopIcon)
}
    dogCard.appendChild(dogCardBorder);
    dogCardBorder.appendChild(cardHeader);
    cardHeader.appendChild(name);
    cardHeader.appendChild(age);
    cardHeader.appendChild(breed);
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
    description.appendChild(bark)
    dogStats.appendChild(powerLevel);
    console.log(currentDog.energy)
    energyIcon(currentDog.energy);
    trainIcon(currentDog.trainability);
    playIcon(currentDog.playfulness);
    protectIcon(currentDog.protectiveness);
    barkIcon(currentDog.barking);

    function energyIcon(num) {
        console.log('energyIcon called')
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
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-poop');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function playIcon(num) {
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
        let createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (var i = 0; i < num; i++) {
            let createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-poop');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    doggyDash.appendChild(dogCard);
}
