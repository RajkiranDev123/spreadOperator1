//With spread syntax we can clone, update, and merge objects in an immutable way.
//The immutability helps reduce any accidental or unintentional changes to the original (Source) object.

//The Object Destructuring and Spread syntaxes are not the same thing in JavaScript.

console.log(8);

a1 = { n: 1 };
b1 = { m: 1 };

let c = { ...a1, ...b1 }; //merging
console.log(c);

a2 = { n: 1 };
b2 = { n: 10 };

let c1 = { ...a2, ...b2 }; //updating
console.log(c1);

a3 = {
  name: "raj",
};
b3 = {//raj will take over
  lang: "js",
  name: "pol",
  ...a3,
};

console.log(b3);

a4 = {
  name: "raj",
};
b4 = { //pol will take over
  lang: "js",
  ...a3,

  name: "pol",
};

console.log(b4);


// Number.isNaN() does not attempt to convert the parameter to a number so 
//non nos always returns false

