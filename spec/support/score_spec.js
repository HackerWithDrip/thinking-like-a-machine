const { scorePredictor } = require(`../../src/score.js`)

describe('scorePredictor', () => {
    it(`should be a number`, () => {
        expect(typeof(scorePredictor())).toBe('number')
    });

    it(`should be in a range of 0.0 to 1.0`, () => {
        expect(scorePredictor()).toBeLessThanOrEqual(1.0)
    });

    it(`should be in a range of 0.0 to 1.0`, () => {
        expect(scorePredictor()).not.toBeLessThan(0)
    });
})