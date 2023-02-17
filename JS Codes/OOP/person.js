class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    walk() {
        return `${this.name} is now walking.`;
    }

    stand() {
        return `${this.name} is now standing`;
    }
}

let person = new Person("Mark", 21);

console.log(person.walk());