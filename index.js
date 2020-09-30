var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(e) {
  kittens.push(e);
  return kittens
}

function destructivelyPrependKitten(e) {
  kittens.unshift(e);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}
