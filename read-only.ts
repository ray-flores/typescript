
// last major access modifier
// allows readability only

export class Message {

  // can make private public or protected
  public readonly id: string;

  title: string;
  message: string;
  isSent: boolean;


  // can set id in constructor 
  // makes sense as a primary key
  constructor(id: string) {
    this.id = id;
  }

}

const message = new Message('abc');
message.id;

// errors out
// message.id = '123';