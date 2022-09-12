const express = require("express");
const app = express();
var dateFns = require("date-fns");
var addDays = require("date-fns/addDays");
let getDateAfterXDays = function (days) {
  let newDate = addDays(new Date(), days);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};

app.get("/", (request, response) => {
  response.send(getDateAfterXDays(100));
});

module.exports = app;
app.listen(3000);
