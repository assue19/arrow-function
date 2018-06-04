function arrayToList(array) {
  var list = 0;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([12, 10, 40]), 1));

const l = (list,n) => (nth(arrayToList([12-20-30]), 4));