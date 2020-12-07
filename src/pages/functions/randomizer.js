function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}
let d = new Date();
export const getTimeday = () => {
  let time;
  let random;

  time = d.getTime() + d.getMilliseconds();
  random = randomInt(0, time);
  return random;
};
