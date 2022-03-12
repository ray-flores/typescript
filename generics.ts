
// generics are a tool to give static type to a dynamic type
// should avoid 'any' at all cost
// generics might be used to solve the use of 'any'
// can be used when merging data sets that we have not been able to do data migration on
// 'T'  is default, can have multiple like <T, U, V>

export class User<T> {
  name: string;
  age: number;
  email: string;
  isMale: boolean;
  public classicUserData: T; // instead of 'any'
  
  public mergeClassicUser(params: T): void {
    const { name, isMale, age, email } = this;

    this.classicUserData = { name, isMale, age, email, ...params };
  }

}

interface ClassicUser {
  name: { first: string, last: string };
}

interface ClassicUser2 {
  name: { first: string, middle: string, last: string };
}

const user1 = new User<ClassicUser>();
user1.mergeClassicUser({ name: { first: 'John', last: 'Doe' } });
user1.classicUserData.name.first;

const user2 = new User<ClassicUser2>();
user2.mergeClassicUser({ name: { first: 'Bob', last: 'Dylan', middle: 'Popstar' } });
user2.classicUserData.name.middle;

// don't go to far into using generics; gets too antipattern
