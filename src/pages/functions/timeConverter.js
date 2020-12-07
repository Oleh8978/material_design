export const timeConverter = (time) => {
  let newTime;
  let date = new Date("2013-08-03T02:00:00Z");
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return (newTime = year + "-" + month + "-" + dt);
};
