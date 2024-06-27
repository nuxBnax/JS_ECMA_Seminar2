class Person {
    name = 'John';
    age = 25;
    gender = 'male';

    introduce() {
        console.log(`My name is ${this.name}.I'm ${this.age} years old and I identify as ${this.gender}.`);
    }
    changeName = (newName) => {
        this.name = newName;
    }
}

const johnPerson = new Person;
console.log(johnPerson);
johnPerson.introduce();
johnPerson.changeName('Ivan');
johnPerson.introduce();