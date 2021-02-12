const randomInteger = (min, max) => {
  if (min <0 || max < 0 || min > max) {
  throw new Error();
} else{
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);}
};
const randomFractional = (min, max, round) => {
  if (min <0 || max < 0 || min > max) {
  throw new Error();
} else{
  let rand = min + Math.random() * (max - min);
  return rand.toFixed(round);}
};
