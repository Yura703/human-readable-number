module.exports = function toReadable (number) {
  let units = {
      0 : "",
      1 : "one ",
      2 : "two ",
      3 : "three ",
      4 : "four ",
      5 : "five ",
      6 : "six ",
      7 : "seven ",
      8 : "eight ",
      9 : "nine ",
      10 : "ten ",
      11 : "eleven ",
      12 : "twelve ",
      13 : "thirteen ",
      14 : "fourteen ",
      15 : "fifteen ",
      16 : "sixteen ",
      17 : "seventeen ",
      18 : "eighteen ",
      19 : "nineteen ",
  }

  let dozens = {
      0 : "",
      2 : "twenty ",
      3 : "thirty ",
      4 : "forty ",
      5 : "fifty ",
      6 : "sixty ",
      7 : "seventy ",
      8 : "eighty ",
      9 : "ninety ",
  }
  
  if(number === 0) return "zero";

  if(number < 20) return units[number].slice(0, -1);;

  if(number < 100) {
      let str = String(number);
      let answer = dozens[+str[0]] + units[+str[1]];   
      return answer.slice(0, -1);
  }

  if(number < 1000) {
      let str = String(number);
      if(+str[1] === 1) return (units[+str[0]] + "hundred " + units[+(1 + str[2])]).slice(0, -1);
      let answer = units[+str[0]] + "hundred " + dozens[+str[1]] + units[+str[2]];   
      return answer.slice(0, -1);
  }
}
