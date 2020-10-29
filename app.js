const car = {
    make: 'VW Bug',
    year: '1995',
    color: 'yellow',
    start: function() { return 'Outta here...' },
    stop: function() { return 'Hit the brakes !!' }
}

//pre2015
function Car(make, model, color, year) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
    this.test = function() {
        return 'testing';
    }
}
Car.prototype.go = () => 'gogogogogoooooo !!';
const car2 = new Car('VW', 'passat', 'green', '1995');

console.log(car2.go());
car2.works = 'sorta';
console.log(car2.works);
console.log(car2.test());

//now possible to:
class Human {
    constructor(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    test2() {
        return 'this is a different test';
    }
}


Human.prototype.test = function() {
    return 'this is a test';
};
const simone = new Human('simone', 'schneeberg');
simone.dob = '1997';
console.log(simone.dob);
console.log(simone.test2());