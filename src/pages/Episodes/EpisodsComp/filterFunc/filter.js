const filterBySpecies = (data, ItemName) => {
  let newData = [];
  if (ItemName !== "None" || ItemName !== "") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === ItemName) {
        newData.push(data[i]);
      }
    }
  }
  if (ItemName === "None" || ItemName === "") {
    newData = data;
  }

  return newData;
};

export const filterFunction = (data, ItemName) => {
  let theLastOne = filterBySpecies(data, ItemName);
  return theLastOne;
};
