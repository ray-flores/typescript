
// converting

// pre-ES6 before class syntax

function UserLegacy(firstName, lastName, email) {
  this.firstName = firstName; // or to leave undefined, delete everything after and including the equal operator
  this.lastName = lastName;
  this.email = email;

  this.doesEmailMatch = function(email) {
    return this.email === email;
  }
}

const user = new UserLegacy('Bob', 'Dylan', 'abc@gmail.com');
user.firstName;

// ES6 OOP (TS):

export class User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) { }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }

}



