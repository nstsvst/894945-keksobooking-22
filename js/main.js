let randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
let randomFractional = (min, max, round) => {
 let rand = min + Math.random() * (max - min);
 return rand.toFixed(round);
};
