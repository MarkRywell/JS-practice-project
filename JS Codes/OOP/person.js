class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    getNameAddress() {
        return `Name: ${this.name} : Address ${this.address}`;
    }
}

class Student extends Person {
    constructor(name, address, id, course) {
        super(name, address);
        this.id = id;
        this.course = course;
    }

    getId() {
        return `Student ID: ${this.id}`;
    }

    getCourse() {
        return `Course: ${this.course}`;
    }
}

class StudentLeader extends Student {
    constructor(name, address, id, course, org, position) {
        super(name, address, id, course);
        this.org = org;
        this.position = position;

        this.getOrg = function() {return `Organization: ${this.org}`};
    }
}


let studentLeader = new StudentLeader("Mark Gaje", "CDO", 2020302619, "BSIT", "ProgVar", "BackEnd Developer");
console.log(studentLeader);

class Car {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
    
    setName(newName) {
        this.#name = newName;
    }
}
