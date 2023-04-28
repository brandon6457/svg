const {Circle, Triangle, Square} = require('./shapes');

describe('Circle', () => {
    test('Circle test with a blue color background', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='blue'/>`);
    });
});
describe('Triangle', () => {
    test('Triangle test with a purple color background', () => {
        const shape = new Triangle();
        shape.setColor('green');
        expect(shape.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill='green'/>`);
    });
});
describe('Square', () => {
    test('Square test with a red color background', () => {
        const shape = new Square();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<rect x='90' y='40' width='120' height='120' fill='yellow'/>`);
    });
});