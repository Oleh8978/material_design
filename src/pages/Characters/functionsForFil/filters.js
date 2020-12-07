const filterBySpecies = (data, itemSpecies) => {
  let newData = [];
  if (itemSpecies !== "None" || itemSpecies !== "") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].species === itemSpecies) {
        newData.push(data[i]);
      }
    }
  }
  if (itemSpecies === "None" || itemSpecies === "") {
    newData = data;
  }

  return newData;
};
const filterByStatus = (data, itemStatus) => {
  let newData = [];
  if (itemStatus !== "None" || itemStatus !== "") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === itemStatus) {
        newData.push(data[i]);
      }
    }
  }
  if (itemStatus === "None" || itemStatus === "") {
    newData = data;
  }
  return newData;
};

const filterByGender = (data, itemGender) => {
  let newData = [];
  if (itemGender !== "None" || itemGender !== "") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].gender === itemGender) {
        newData.push(data[i]);
      }
    }
  }
  if (itemGender === "None" || itemGender === "") {
    newData = data;
  }
  return newData;
};

export const filterFunction = (data, itemSpecies, itemStatus, itemGender) => {
  let filnalFilter = filterByGender(data, itemGender);
  let newVal = filterByStatus(filnalFilter, itemStatus);
  let theLastOne = filterBySpecies(newVal, itemSpecies);

  return theLastOne;
};
