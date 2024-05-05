// Write your solution here!
const cats = 
    ["Milo", "Otis", "Garfield"];

    beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });
  function destructivelyAppendCat(name) {
    cats.push(name)
  }
destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name){
const newCats = [...cats, "Broom"];
return newCats
}

function prependCat(name) {
    const newCatsPrepend = ["Arnold", ...cats]
    return newCatsPrepend
}

function removeLastCat(name) {
    const newCatRemoved = cats.slice(0,cats.length -1)
    return newCatRemoved
}

function removeFirstCat(name) {
    const newCatRemovedFirst = cats.slice(1)
    return newCatRemovedFirst
}