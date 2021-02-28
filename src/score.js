//npm install prompt-sync <-- run this line of code in your terminal first

const prompt = require(`prompt-sync`)();

let scorePredictor = (score = prompt(`Please enter a score: `)) => {
    let x = parseFloat(score);
    let ans;

    if (x >= 0.0 && x <= 1.0) {
        if (x >= 0.9) {
            ans = `A`
        } else if (x >= 0.8) {
            ans = `B`
        } else if (x >= 0.7) {
            ans = `C`
        } else if (x >= 0.6) {
            ans = `D`
        } else {
            ans = `F`
        }
    };

    try {
        if (x !== null && typeof(x) == `number` && score.match(/^(0(\.\d+)?|1(\.0+)?)$/)) {
            console.log(x)

        } else if (x == null) {

            throw `input must not be null / must be a number`;
        } else if (score.match(/[1.1-9]/)) {
            throw `input must be in the range of 0.0 to 1.0`
        }
    } catch (error) {
        console.log(error)
    };

    return ans;

}

// console.log(scorePredictor());

module.exports = { scorePredictor }