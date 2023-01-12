// GET https://api.petfinder.com/v2/animals/{id}
var doggyDash = document.querySelector('.doggy-dash');
var dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
for (i = 0; i < dogCollection.length; i++) {
    let currentDog = dogCollection[i];
    console.log(currentDog)
    makeDogCard(currentDog);
}
console.log(doggyDash)

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
    name.textContent = currentDog.name;
    age.textContent = currentDog.age;
    breed.textContent = currentDog.breed;
    size.textContent = currentDog.size
    dogCard.appendChild(dogCardBorder);
    dogCardBorder.appendChild(cardHeader);
    cardHeader.appendChild(name)
    cardHeader.appendChild(age);
    cardHeader.appendChild(breed);
    dogCardBorder.appendChild(photo)
    dogCardBorder.appendChild(dogAttr)
    dogAttr.appendChild(size)
    houseTrained.setAttribute('class', 'house-trained');
    if (currentDog.houseTrained === true) {
        houseTrained.textContent = currentDog.trained;
    } else {
        houseTrained.textContent = "peepee alert"
    }
    dogAttr.appendChild(houseTrained)

    dogStats.setAttribute('class', 'dog-stats')






    doggyDash.appendChild(dogCard)
}
