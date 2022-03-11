

// base class is the parent
// derived class is the child

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

// Derived / Child Class(s)
export class Dog extends Animal {
  woof(): string {
    return 'Woof!';
  }
}

const dog = new Dog(2, 4, 'Spot');
dog.name;
dog.woof();

export class Cat extends Animal {
  meow(): string {
    return 'Meow!';
  }
}

const cat = new Cat(8, 4, 'Eve');
cat.age;
cat.meow();