let innerArrayOne = [1,"red","fed"];
let innerArrayTwo = [2,"blue","you"];
let innerArrayThree = [3,"green","bean"];
let innerArrayFour = [4,"yellow","fellow"];
let arrayS = [innerArrayOne,innerArrayTwo,innerArrayThree, innerArrayFour];

// fisher-yates shuffle, thanks to https://stackoverflow.com/a/2450976/294949
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// invoke fn on a set interval until elapsed ms have elapsed
function repeat(fn, interval, elapsed) {
  fn() // up to author if we start right away
  const start = (new Date()).getTime(); // ms since epoch
  const id = setInterval(() => {
    const now = (new Date()).getTime();
    if (now - start > elapsed) {
      clearInterval(id);
    } else {
      fn()
    }
  }, interval);
}

let shuffledArray = shuffle(arrayS.slice());
let index = 0;

repeat(() => {
  console.log(shuffledArray[index])
  if (index < shuffledArray.length-1) index++;
  else {
    shuffledArray = shuffle(arrayS.slice());
    index = 0;
  }
}, 800, 4800)