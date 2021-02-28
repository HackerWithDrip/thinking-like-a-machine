//npm install prompt-sync <-- run this line of code in your terminal first

const prompt = require(`prompt-sync`)();

let scorePredictor = (score = prompt(`Please enter a score: `)) => {

    return `Your score is ${score}`
}

console.log(scorePredictor());