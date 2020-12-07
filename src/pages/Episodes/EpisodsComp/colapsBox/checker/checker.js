export const checker = (data) => {
  let newData;
  if (
    data[0] !== "characters" &&
    data[0] !== "url" &&
    data[0] !== "created" &&
    data[0] !== "id" &&
    data[0] !== "air_date"
  ) {
    newData = data[0] + ": " + data[1];
  }
  return newData;
};
