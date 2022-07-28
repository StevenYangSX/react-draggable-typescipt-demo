export function basicNotes() {
  let name: string;
  let age: number | number;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string];
  let myObj: Object; // not recmmonded

  type Person = {
    name: string;
    age?: number; //age is optional
  };
  let persons: Person[] = [];

  let person: Person = { name: "steven", age: 22 };
  let person2: Person = { name: "tom" };
}
// Declaring a function with string para and no return
let printName: (name: string) => void;
// function body
printName = (name) => {
  console.log(name);
};
//  function call
printName("steven");

//  type inherentence ???
type X = {
  a: string;
  b: number;
};
type Y = X & {
  //  Y  has properties of X
  c: string;
  d: number;
};

let y: Y = {
  a: "aaaa",
  b: 9,
  c: "test11",
  d: 32,
};

//Interface
interface Student {
  name: string;
  id?: number;
}
interface GoodStudent extends Student {
  gpa: number;
}

let steven: GoodStudent = {
  gpa: 4.3,
  name: "Steven",
  id: 123123,
};
console.log("steven->", steven);
