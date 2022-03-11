

export class User {
  firstName: string;
  lastName: string;
  email: string;

  get fullName(): string {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName
  }

  checkEmail(email): boolean {
    if (email === this.email) {
      return true
    } else {
      return false
    }
  }



}