function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipCoin() === "heads") {
    return ["success", { name: "Mike North", email: "mike@example.com" }];
  } else {
    return ["error", new Error("The coin landed on TAILS :(")];
  }
}

const outcome = maybeGetUserInfo();
const [first, second] = outcome;
console.log(second.name); // because both success and error have a name property (Error interface has name inside)
// console.log(second.email); // can't do this because error doesn't have email property

//Narrowing with type guards
/* Type guards are expressions, which when used with control flow statement, allow us to have a more specific type for a particular value. */

if (second instanceof Error) {
  // In this branch of your code, second is an Error
  console.log(second.message);
} else {
  // In this branch of your code, second is the user info
  console.log(second.email);
}

//tagged union types (discriminated union) // you catch the certain if / else branch and then you can go onwards)