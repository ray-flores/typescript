



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

// uses extends

export class Cat extends Animal {
  meow(): string {
    return 'Meow!';
  }
}

const cat = new Cat(8, 4, 'Eve');
cat.age;
cat.meow();


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

const dog = new Dog(2, 4,'Spot');
dog.name;
dog.woof();

