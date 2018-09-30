module.exports = function getZerosCount(number) {
  let res2 = 0;
  let n = number;
  while (numder > 0){
    number = Math.floor(number / 2);
    res2 += number;

  }
  number = n;
  let res5 = 0;
  while (number > 0){
    number = Math.floor(number / 5);
    res5 += number;
  }
  return Math.min(res2, res5);
}
