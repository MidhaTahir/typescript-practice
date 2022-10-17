//Type Aliases
type UserContactInfo = {
  name: string
  email: string
}

// Interface
// you can have multiple declarations of interfaces in the same block

interface AnimalLike {
  isAlive(): boolean;
}
function feed(animal: AnimalLike) {
  animal.eat;
  animal.isAlive;
}

// SECOND DECLARATION OF THE SAME NAME
interface AnimalLike {
  eat(food): void;
}

// These declarations are merged together to create a result identical to what you would see if both the isAlive and eat methods were on a single interface declaration.

//Use-Case of Augmenting an interface (bcz interfaces are open you can always add to them)
//Imagine a situation where you want to add a global property to the window object

window.document; // an existing property

window.exampleProperty = 42;

// tells TS that `exampleProperty` exists
interface Window {
  exampleProperty: number;
}

/*
Choosing which to use: Type Aliases or Interfaces
In many situations, either a type alias or an interface would be perfectly fine, however…

- If you need to define something other than an object type (e.g., use of the | union type operator), you must use a type alias
- If you need to define a type to use with the 'implements' heritage term, it’s best to use an interface (OOP)
- If you need to allow consumers of your types to augment them, you must use an interface.
*/
