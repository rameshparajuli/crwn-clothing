// First example

function* gen() {
  console.log("a");
  console.log("b");
}

const g = gen();
g;

// First example next calling

g.next();
// return value and done

// Second
function* calc(x) {
  yield x;
  yield x + 20;
  return 77;
}

calc(4);
