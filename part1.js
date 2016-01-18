var animal = {};
animal.species = "horse";
animal["name"] = "George";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "neigh";
noises.push("heehaw");
noises.unshift("yawn");
noises.push("brrrr");
noises[noises.length] = "hi";
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);

animal.noises = noises;
console.log(animal);

var animals = [];
animals.push(animal);

var duck = {};
duck.species = "duck";
duck["name"] = "Jerome";
duck.noises = [];
duck.noises.push("quack", "honk", "sneeze", "woosh");
animals.push(duck);

var lion = {
    species: "cat",
    name: "Simba",
    noises: ["roar", "prrr", "growl"]
};
animals.push(lion);

var wolf = {
    species: "dog",
    name: "Fang",
    noises: ["woof", "bark", "snarl", "wimper"] 
};
animals.push(wolf);

// ZERO INDEX LISTS
var friends = [];
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom() {
    return animals[getRandomIntInclusive(0, 3)];
}

friends.push(getRandom());
wolf.friends = [];
wolf.friends.push(animal.name, duck.name);
animal.friends = [];
animal.friends.push(wolf.name, lion.name);
lion.friends = [];
lion.friends.push(duck.name, animal.name);
duck.friends = [];
duck.friends.push(lion.name, wolf.name);

function search(name) {
  for(var i = 0; i <= animals.length -1; i++) {
    if(animals[i].name === name) {
      return animals[i];
    } 
  }
  return null;
}

function edit(name, animal) {
  for(var i = 0; i <= animals.length -1; i++) {
      if(animals[i].name === name) {
        animals[i] = animal;
      }
  }  
}

function remove(name) {
    for(var i = 0; i <= animals.length -1; i++) {
        if(animals[i].name === name) {
           animals.splice(i, i++); 
        }
    }
}

function create(animal) {
    if(animal.name.length >= 1 && animal.species.length >= 1) {
        if(search(animal.name) === null) {
            animals.push(animal);
        }
    }
    // if(animal.name.length > 0 && animal.species.length > 0) {
    //     for(var i = 0; i <= animals.length -1; i++) {
    //         if(animal.name !== animal.name) {
    //             animals.push(animal);
    //         }
    //     }
    // }
}