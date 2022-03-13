
// protected is a private modifier that allows you to use a value in a parent / sibling class
// causes issues with implements

export class Animal {
  protected age: number;
  legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}

// extends is a child
export class Cat extends Animal {
  constructor(data: { age: number, legs: number, name: string }) {
    super(data.age, data.legs, data.name);
  }

  get birthday(): number {
    return this.age + 1;
  }
}

// can't access age in an instance
const cat = new Cat({age: 19, legs: 4, name: 'Baby'});
// is not available but is available in subclass 
// cat.age; 

// implements matches shape 
// if something is protected we cannot implement 
// export class Dog implements Animal {
//   age: number;
//   legs: number;
//   name: string;
// }
