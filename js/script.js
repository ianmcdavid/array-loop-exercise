var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];
//stuff.forEach(function (thing, index) {
//if (index % 2 === 0) {
//console.log(thing);
//}
//});
/*var removeItem = function (array, item) {
  var index = array.indexOf(item);
  if (index !== -1) {
    console.log(`Bye ${item}`);
    array.splice(index, 1);
  } else {
    console.log("That item does not exist in the array");
  }
};
removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "bo");
console.log(stuff);
*/
/*var things = [];
for (var item of stuff) {
  if (item.includes("s")) {
    things.push(item);
  }
}
console.log(things);
*/
var filterStuff = stuff.filter(function (item) {
  return item.includes("s");
});
console.log(filterStuff);
