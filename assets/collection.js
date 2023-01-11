// GET https://api.petfinder.com/v2/animals/{id}
var doggyDash= document.querySelector('.doggy-dash');
var dogCollection = JSON.parse(localStorage.getItem("dogCollectionArr"));
for (i=0; i<dogCollection.length; i++){
    let currentDog= dogCollection[i];
    console.log(currentDog)
    makeDogCard(currentDog);
}
console.log(doggyDash)

function makeDogCard(currentDog) {
    var dogCard= document.createElement('div');
    dogCard.setAttribute('class', "card");
    var dogCardBorder = document.createElement('div');
    dogCardBorder.setAttribute('class', 'card-border');
    dogCard.appendChild(dogCardBorder);
    var cardHeader= document.createElement('div');
    cardHeader.setAttribute('class', 'card-header');
    dogCardBorder.appendChild(cardHeader);
    var name = document.createElement('span');
    name.setAttribute('class', 'name');
    name.textContent = currentDog.name;
    cardHeader.appendChild(name)
    var age = document.createElement('span');
    age.textContent= currentDog.age;
    age.setAttribute('class', 'age');
    cardHeader.appendChild(age);
    var breed = document.createElement('span')
    breed.setAttribute('class', 'breed');
    breed.textContent= currentDog.breed;
    cardHeader.appendChild(breed);
    var photo= document.createElement('img');
    photo.setAttribute('src', currentDog.photo);
    photo.setAttribute('alt', "photo of Doggo")
    dogCardBorder.appendChild(photo)
    var dogAttr= document.createElement('div');
    dogAttr.setAttribute('class', 'dog-attributes');
    dogCardBorder.appendChild(dogAttr)
    var size= document.createElement('span');
    size.setAttribute('class', 'size');
    size.textContent= currentDog.size
    dogAttr.appendChild(size)
    var houseTrained = document.createElement('span');
    houseTrained.setAttribute('class', 'house-trained');
    if (currentDog.houseTrained === true){
         houseTrained.textContent= currentDog.trained;
    }   else{
         houseTrained.textContent ="peepee alert"
    }
    dogAttr.appendChild(houseTrained)
    var dogStats = document.createElement('div')
    dogStats.setAttribute('class', 'dog-stats')
    

  



    doggyDash.appendChild(dogCard)
  }
