
export class Message {
  title: string;
  message: string;
  //underscore often used to identify getter or setter and is set to a private variable
  // setters don't return values but take in a value
  // let's set a date for when a message is sent
  private _isSent: boolean;
  set isSent(value: boolean) {
    if (value === true) {
      this.deliveryDate = new Date();
    }
    this._isSent = value;
  }

  get isSent(): boolean {
    return this._isSent;
  }
  deliveryDate: Date;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  // set updates data


  // gets data: is a property that does logic to return a value
  // uses get keyword
  get messageStatus(): string {
    const sentMessage = this.isSent ? 'Has been sent.' : 'Has not been sent.';
  
    return `${this.message} | ${sentMessage}`
  }

  //method: create a function that makes a preview (select first 10 characters in message to show users)
  previewMessage(): string {
    return this.message.slice(1, 10).concat('...');
  }

}

const message = new Message(
  'New Course!',
  'Check out our latest course on OOP with TypeScript'
);

// the setter does its thing in the background and the deliveryDate is now an accessible property in the Message class
message.isSent = true;
message.messageStatus;
message.previewMessage();

