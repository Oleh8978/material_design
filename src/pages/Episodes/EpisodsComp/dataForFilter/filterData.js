export const filterNames = (data) => {
  let newArr = [];
  for (let i = 0; i < data.length; i++) {
    newArr.push({ value: "" + data[i].name, label: "" + data[i].name });
  }
  newArr.push({ value: "None", label: "None" });
  newArr.reverse();
  return newArr;
};
