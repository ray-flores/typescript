

// static access modifier
// we can only access a property or method of a class NOT having it instantiated

// static properties / methods think of as utility function for context
// use them but don't instantiate

export class Message {
  title: string;
  message: string;
  isSent: boolean;
}

// return an array of messages
// create a static method with keyword static to return all valid messages defined as a vlaue with a length greater than 0 
// static methods cannot reference 'this' keyword unless property or method is also static
// because you can't reference something outside of the instantiation in a static method   
// both must be static  

// export class Messages {
//   static getValidMessages(messages: Message[]): Message[] {
//     return messages.filter((value) => value.message.trim().length > 0);
//   } 
// }

// static method is public by default because it wouldn't make sense if it can't be invoked from outside the class
// if you 'private' or 'protect' the method above, you get an error in the instance below
// pass an empty array as a placeholder

// Messages.getValidMessages([]);

// create an instantiated version from above

// possible to extend this prototype 
export class Messages extends Array<Message> {
  // these two are not invoked the same way
  // static method will be invoked w/o Messages class instantiated
  // non-static public method will need instantiation to be invoked:
  // by extending array prototype we can simply return this.filer logic 
  // in real world would never have a static method and non-static that does the same thing
  // this ex is closest thing to overloading methods:
  // one is for the static way and the other non-static way
  
  public getValidMessages(messages: Messages[]): Message[] {
    return this.filter((value) => value.message.trim().length > 0);
  }

  // STATIC:  NO INSTANTIATION - everything else is gonna instantiate our class
  public static getValidMessages(messages: Message[]): Message[] {
    return messages.filter((value) => value.message.trim().length > 0);
  } 
}

Messages.getValidMessages([]);