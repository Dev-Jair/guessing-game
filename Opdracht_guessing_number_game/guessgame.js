// Variables
let lowerLimit = 0;
let upperLimit = 25;
let number = null;
let userName;
let guess;
let maxGuesses = 5;

// While loop gebruiken
while (userName === undefined || userName === null || userName.length === 0) {
    userName = prompt('Welkom! Wat is je naam?');
}

alert(`Hey ${userName}`);

let minimumGuess = parseInt(
    prompt("Vanaf welk nummer wil jij beginnen met raden? (standaard: 0)")
);
if (!isNaN(minimumGuess) && minimumGuess >= 0) {
    lowerLimit = minimumGuess;
}

let maximumGuess = parseInt(
    prompt(`Tot welk nummer wil jij raden? (standaard: 25, hoger dan ${lowerLimit}).`)
);

if (!isNaN(maximumGuess)) {
    upperLimit = maximumGuess;
}

while (upperLimit <= lowerLimit) {
    let maximumGuess = parseInt(
        prompt(`Tot welk nummer mag er geraden worden? (Hoger dan ${lowerLimit})`)
    );
    if(!isNaN(maximumGuess)) {
        upperLimit = maximumGuess;
    }
}

alert(`Je hebt 5 pogingen om het getal te raden. Het getal ligt tussen ${lowerLimit} en ${upperLimit}`);

number = Math.floor(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
console.log(`Het nummer is: ${number}`);

while (guess !== number) {
    if (guess < 1) {
        alert(`Helaas, je pogingen zijn op. We beginnen weer opnieuw met een ander getal. Het nummer ligt tussen de ${lowerLimit} en ${upperLimit}`);
        maxGuesses = 5;
        number = Math.floor(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
    }
    guess = parseInt(prompt('Voer een nummer in...'));

    while (isNaN(guess)) {
        guess = parseInt(
            prompt('Je kunt alleen nummers invoeren, probeer het nogmaals')
        )
    };

    alert(`Je gok is: ${guess}`);

    if (guess > number) {
        maxGuesses--;
        if (maxGuesses < 1) {
            alert('Dit was de laatste poging.');
        } else {
            alert(`Helaas, jouw getal was te hoog. Je hebt nog: ${maxGuesses} pogingen over. Probeer het opnieuw:`);
        }
    } else if (guess < number) {
        maxGuesses--;
        if (maxGuesses < 1) {
            alert('Dit was de laatste poging.');
        } else {
            alert(`Helaas, jouw getal was te laag. Je hebt nog: ${maxGuesses} pogingen over. Probeer het opnieuw:`);
        }
    } else {
        alert(`Gefeliciteerd je hebt gewonnen. Het spel is nu af.`);
        alert(`Dag ${userName} tot de volgende keer!`);
    }
}