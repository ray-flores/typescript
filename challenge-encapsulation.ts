

/**
 * 
 * 1. Use the classes below
 * 2. Add an appropriate readonly property to the User class
 * 3. Be explicit with your public properties in our User class
 * 4. Add an appropriate protected property in User and access it with a private method in Admin
 * 
 * 
 */

// being explicit w/ 'public' makes you think about the access modifier; a good use of repetitive coding

export class User {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  protected dob: Date;

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

// child of parent User class

export class Admin extends User {
  public readonly yearBorn: number;
  constructor(firstName: string, lastName: string, email: string) {
    super(); // has to come before the data below
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.yearBorn = this.getYear();
  }

  private getYear(): number {
    return this.dob.getFullYear();
  }

}