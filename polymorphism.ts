

/*
3 main tenets of polymorphism:

1. method / param overriding -> child overrides parent method
2. method overloading -> same name methods (Javascript doesn't support this)
3. interfaces / abstract classes implements

*/

export class User {
  firstName: string;
  age: number;
  email: string;

  constructor(firstName: string, email: string, age: number) { }

}

class BaseUser extends User {
  protected role: string;

  public hasAllAccess(): boolean {
    return this.role === 'Admin'; // true
  }
}

export class SuperAdmin extends BaseUser {
  role = 'Admin';
  password: string;

  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age)
  }

  //override!!
  // public hasAllAccess(): boolean {
  //   return true;
  // }



  // method overloading is method overriding with more params or less
  // JS & TS don't support overloading

  // overloading failure!!
  // if uncommented the override below will state it is a duplicate and errors out

  // public hasAllAccess(user: User) {
  // return user.age > 18 && this.role
  // }

  // solve by making user optional:

  // public hasAllAccess(user?: User): boolean {
  //   return true;
  // }

  // or instantiate obj

  // public hasAllAccess(user = {}): boolean {
  //   return true;
  // }

  // or do full on create a new User
  // you would have to check your logic in your method accounts for this being optional or not

  public hasAllAccess(user = new User('Bob', 'Dylan', 30)): boolean {
    return true;
  }

}


// taken our User parent class and use impement to match the shape and methods

export class Guest implements User {
  name: string;
  age: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;

  get fullName(): string {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

}