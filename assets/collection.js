// GET https://api.petfinder.com/v2/animals/{id}
var doggyDash = document.querySelector('.doggy-dash');
var dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
for (i = 0; i < dogCollection.length; i++) {
    let currentDog = dogCollection[i];
    console.log(currentDog)
    makeDogCard(currentDog);
}

function makeDogCard(currentDog) {
    var dogCardBorder = document.createElement('div');
    var cardHeader = document.createElement('div');
    var name = document.createElement('span');
    var age = document.createElement('span');
    var breed = document.createElement('span')
    var photo = document.createElement('img');
    var dogAttr = document.createElement('div');
    var size = document.createElement('span');
    var houseTrained = document.createElement('span');
    var dogStats = document.createElement('div')
    var dogCard = document.createElement('div');
    var description = document.createElement('div');
    var protectiveness = document.createElement('span');
    var playfulness = document.createElement('span');
    var trainability = document.createElement('span');
    var energy = document.createElement('span')
    var powerLevel = document.createElement('div')
    powerLevel.setAttribute('class', 'power-level')
    dogCard.setAttribute('class', "card");
    dogCardBorder.setAttribute('class', 'card-border');
    cardHeader.setAttribute('class', 'card-header');
    name.setAttribute('class', 'name');
    age.setAttribute('class', 'age');
    breed.setAttribute('class', 'breed');
    photo.setAttribute('src', currentDog.photo);
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
    name.textContent = currentDog.name;
    age.textContent = currentDog.age;
    breed.textContent = currentDog.breed;
    size.textContent = currentDog.size
    if (currentDog.houseTrained === true) {
        houseTrained.textContent = currentDog.trained;
    } else {
        houseTrained.textContent = "peepee alert"
    }
    dogCard.appendChild(dogCardBorder);
    dogCardBorder.appendChild(cardHeader);
    cardHeader.appendChild(name)
    cardHeader.appendChild(age);
    cardHeader.appendChild(breed);
    dogCardBorder.appendChild(photo)
    dogCardBorder.appendChild(dogAttr)
    dogAttr.appendChild(size)
    dogAttr.appendChild(houseTrained)
    dogCardBorder.appendChild(dogStats)
    dogStats.appendChild(description)
    description.appendChild(energy)
    description.appendChild(trainability)
    description.appendChild(playfulness)
    description.appendChild(protectiveness)
    dogStats.appendChild(powerLevel)
    // energyIcon(currentDog.energy)
    // trainIcon(currentDog.trainability)
    // playIcon(currentDog.playfulness)
    // protectIcon(currentDog.protectiveness)

    function energyIcon(num) {
        var createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (i = 0; i < num; i++) {
            var createIcon = document.createElement('i');
            createIcon.setAttribute('class', 'fa-solid fa-bolt-lightning');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function trainIcon(num) {
        var createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (i = 0; i < num; i++) {
            var createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-poop');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function playIcon(num) {
        var createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (i = 0; i < num; i++) {
            var createIcon = document.createElement('i');
            createIcon.setAttribute('class', ' fa-solid fa-face-grin-tears');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    function protectIcon(num) {
        var createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'item2');
        for (i = 0; i < num; i++) {
            var createIcon = document.createElement('i')
            createIcon.setAttribute('class', 'fa-solid fa-shield');
            powerLevel.appendChild(createSpan);
            createSpan.appendChild(createIcon);
        }
    }
    doggyDash.appendChild(dogCard)
}
