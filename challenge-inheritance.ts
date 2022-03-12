


// Challenge 2: Inheritance

// 1. Use the User class below
// 2. Create an Admin class that extends User (child)
// 3. Create a Guest class that implements User (shape; cookie-cutter mold)
// 4. Have both classes below firstName, lastName and email in their constructors


export class User {
  firstName: string;
  lastName: string;
  email: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

// needs super
// because there's no constructor in our user class there's no values that need to be passed into this constructor
export class Admin extends User {

  constructor(firstName: string, lastName: string, email: string) {
    super(); // has to come before the data below
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

export class Guest implements User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastNAme: string, email: string) {
    this.firstName;
    this.lastName;
    this.email;
  }

  get fullName(): string {
    return `${this.lastName}, ${this.firstName}`; // can override the user get and switch firstName with lastName
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
  

}
