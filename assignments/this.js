/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Implicit Binding - 'this' key work referencing object left of the dot when it is being called.
 * 2. Explicit Binding - explicitly stating what "this" key word means by passing argument (.call())
 * 3. New Binding - when the new function is invoked (using 'new' key word) the JS will create the new object and save it as 'this'
 * 4. Window Binding - if you invoke the function that uses 'this' key word but does not have anything left to the dot it default to window object.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

const findLocation = function() {
  console.log(this.location);
};

const myLocation = {
  location: "Kyrgyzstan"
};

findLocation();

// Principle 2

// code example for Implicit Binding

const myCountry = {
  country: "Kyrgyzstan",
  capital: "Bishkek",
  findCountry: function() {
    console.log(this.country);
  }
};

myCountry.findCountry();

// Principle 3

// code example for New Binding

const Bird = function(color, species, name) {
  this.color = color;
  this.name = name;
  this.species = species;
};

const parakeet = new Bird("Aqua ", "Peety ", "Parakeet");

console.log(parakeet);

// Principle 4

// code example for Explicit Binding

const myCuisine = function() {
  console.log("My Countries national dish is " + this.dish);
};

const cuisine = {
  dish: "Beshbarmak",
  ingredient: "noodle"
};

myCuisine.call(cuisine);
