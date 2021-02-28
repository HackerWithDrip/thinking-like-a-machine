//npm install prompt-sync <-- run this line of code in your terminal first

const prompt = require(`prompt-sync`)();

let scorePredictor = (score = prompt(`Please enter a score: `)) => {

    return parseFloat(score)
}

// typeof(console.log(scorePredictor()));

module.exports = { scorePredictor }