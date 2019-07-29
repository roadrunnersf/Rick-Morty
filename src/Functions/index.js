import React from "react";

const randList = (numMax, outputLength) => {
  let array = Array.from({ length: numMax }, (v, k) => k + 1);
  array = shuffle(array);
  return array.slice(0, outputLength);
};

const shuffle = oldArray => {
  let array = [...oldArray];
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export { randList, shuffle };
