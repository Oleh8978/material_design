export const checker = (data) => {
  let newData;
  if (
    data[0] !== "image" &&
    data[0] !== "episode" &&
    data[0] !== "url" &&
    data[0] !== "location" &&
    data[0] !== "origin" &&
    data[0] !== "created" &&
    data[0] !== "id"
  ) {
    newData = data[0] + ": " + data[1];
  }
  return newData;
};
