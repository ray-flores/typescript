// private protected public
// access modifiers
// private only class knows it; no one else, just inner workings of class
// protected children can access like a secret in family
// public everyone knows

// limits scope of availability 

//public vs private
// public by default; C# private by default

export class Animal {
  public age: number;
  private legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }

  get ourLegs() {
    return this.legs;
  }


}

export class Cat extends Animal {
  constructor(data: { age:number, legs:number, name: string }) {
    super(data.age, data.legs, data.name);
  }

  // legs is not accessible with private present in parent class
  // private does not make it accessible even in a child class or instance
  // only accessible in class itself

  // public get ourLegs() {
  //   return this.legs;
  // }
  
}

const cat = new Cat({ age: 19, legs: 4, name: 'Baby' });
cat.age;
// cat.legs; inaccessible here too
