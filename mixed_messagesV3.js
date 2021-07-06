const StarWarsNames = {
    //create arrays
    planetName: ['Tatooine','Corusant','Hoth','Naboo','Mustafar','Yavin','Alderan','Bespin','Corrella'],
    forceOrDark: ['May the Force be with you.','The dark side of the force is strong in this one.']
};

// random letter arrays
const letters = {
singleConsonants : ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'],
doubleConsonants : ['bb','tt','kk','ll','rr','gg'],
nameVowels: ['a','e','i','o','u'],
}
//generate random text from each array
const getName = (names) =>
    names[Math.floor(Math.random() * names.length)];

let randomLetter1 = getName(letters.singleConsonants);
let randomVowel1 = getName(letters.nameVowels);
let randomDouble1 = getName(letters.doubleConsonants);
let randomLetter2 = getName(letters.singleConsonants);
let randomVowel2 = getName(letters.nameVowels);
let randomLetter3 = getName(letters.singleConsonants);
let randomPlanetName = getName(StarWarsNames.planetName);
let goodOrBad = getName(StarWarsNames.forceOrDark);

 //function to print message
const printMessage = () => {
    firstName = randomLetter1.toUpperCase() + randomVowel1 + randomDouble1 + randomVowel1;
    secondName = randomLetter2.toUpperCase() + randomVowel2 + randomLetter3;

    console.log(`You are ${firstName} the ${secondName} from ${randomPlanetName}. ${goodOrBad}`) 
};

printMessage()
