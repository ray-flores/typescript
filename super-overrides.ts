
// Base / Parent class
export class Animal {
  age: number;
  legs: number;
  name: string;
  lives = 1;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
  // this meow method is overriden by cat meow method
  meow(): string {
    return 'Rawr!';
  }

}

// child extends parent class
// without a constructor values passed to the cat class are passed to the animal parent class
// constructors for derived / child classes must use a 'super' call:
// is used to pass the data from our child to our parent
// don't have to have same number of params in constructor as parent or any at all, could also pass in direct value
export class Cat extends Animal {
  lives = 9;

  constructor(data: {age: number, legs: number, name: string}) {
    super(data.age, data.legs, data.name);
  }

  // super keyword allows us to access methods in parent class and overriding provides us a reference to the method overriden in the parent class
  // this is not true for properties like 'lives' above; they are overriden permanently, no reference to parent base class
  //keep in mind when deciding between 'extends' and 'implements'

  meow(): string {
    super.meow();
    super.lives;

    return 'Meow!';
  }
}

// super.lives will return what is in Cat class. Overriding properties will rid us of any reference from the parent class values 

const cat = new Cat({age:8,legs: 4,name: 'Eve'});
cat.meow();