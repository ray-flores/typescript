// instead of:
const message1 = { title:undefined, message: undefined, id: undefined };
const message2 = { title:undefined, message: undefined, id: undefined };

// do this:
export class Message {
  title;
  message;
  id;
}

// can simply modify the class to create new properties in instances of that class
const message4 = new Message();
const message5 = new Message();


