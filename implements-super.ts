



// Base / Parent class
export class Animal {
  age: number;
  legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }

}

// child extends parent class
// without a constructor values passed to the cat class are passed to the animal parent class
// constructors for derived / child classes must use a 'super' call
// don't have to have same number of params in constructor as parent or any at all, could also pass in direct value
export class Cat extends Animal {
  constructor(data: {age: number, legs: number, name: string}) {
    super(data.age, data.legs, data.name);
  }

  meow(): string {
    return 'Meow!';
  }
}

// implements matches the shape of the parent class
// Derived / Child Class / Same shape
export class Dog implements Animal {
  age: number;
  legs: number;
  name: string;

  woof(): string {
    return 'Woof!';
  }
}


const cat = new Cat({ age:19, legs: 4, name: 'Baby'});
const dog = new Dog();


console.log(cat instanceof Animal); // true

console.log(dog instanceof Animal); // false
