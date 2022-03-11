
export class Message {
  title: string;
  message: string;
  isSent: boolean;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  // get: is a property that does logic to return a value
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


message.messageStatus;
message.previewMessage();

