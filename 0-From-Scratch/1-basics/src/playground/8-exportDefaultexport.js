console.log("Utils.js is running");

// export const square = (x) => x * x;
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const area = (r) => Math.PI * r * r;

const square = (x) => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const area = (r) => Math.PI * r * r;

// export default area;
// export default (r) => Math.PI *r*r;
export { square, add, subtract, area as default };

// can only have one default in a file
// exports:
// default export
/*
  it does not have to be between {} and the naming is not import since I am grabbing the defualt export.
    */

// named exports
/*
    export {
      square
    }
    */
