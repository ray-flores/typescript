

export class User {
  firstName: string;
  lastName: string;
  email: string;

  get fullName(): string {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }

}

