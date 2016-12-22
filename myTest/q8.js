var x1 = function () {
  // do something, PLEASE!
  return "Blah!";
};

var x2 = x1();

function x3(arg) {
  return arg; // Ha-ha! That's all I do!
}

var x4 = x3(x1);

var x5 = x3(x2);

var x6 = x3(x1())
