var joke ="";

const jokeQuestion = [
    "You",
    "Radio",
    "Ice cream",
    "Weirdo",
    "Canoe"
]
const jokeAnswer = [
    "Yoo-hoo! Anybody home?",
    "Radio not, here I come!", 
    "ICE CREAM SO YOU CAN HEAR ME!",
    "Weirdo you think you’re going?",
    "Canoe come out now?"
]

function joking(jokeSize) {
    let randomJoke = Math.random()*jokeSize;
    return Math.round(randomJoke);
}

let jokeNumber = joking(jokeQuestion.length);
console.log("knock Knock");
console.log("Who's there?")
document.getElementById("generatedMessage").innerHTML = jokeQuestion[jokeNumber];
document.getElementById("csinput").innerHTML = jokeQuestion[jokeNumber]+" who?";
document.getElementById("generatedResponse").innerHTML = jokeAnswer[jokeNumber];

/*var joke ="";

const jokeQuestion = [
    "You",
     "Radio",
     "Ice cream",
     "Weirdo",
     "Canoe"
]
const jokeAnswer = [
    "Yoo-hoo! Anybody home?",
    "Radio not, here I come!", 
    "ICE CREAM SO YOU CAN HEAR ME!",
    "Weirdo you think you’re going?",
    "Canoe come out now?"
]

function joking(jokeSize) {
    let randomJoke = Math.random()*jokeSize;
    return Math.round(randomJoke);
}

let jokeNumber = joking(jokeQuestion.length);
console.log("knock Knock");
console.log("Who's there?")
console.log(jokeQuestion[jokeNumber]);
console.log(jokeQuestion[jokeNumber]+" who?");
console.log(jokeAnswer[jokeNumber]);
*/

