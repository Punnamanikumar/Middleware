const express = require("express");
const app = express();

const middleWare1 = (req, res, next) => {
  console.log("This is MiddleWare 1");
  next();
};

const middleWare2 = (req, res, next) => {
  console.log("This is MiddleWare 2");
  res.send("RESPONSE IN Middle ware 2");
  next();
};
app.use(middleWare1);
app.use(middleWare2);

app.get("/home", (req, res) => {
  res.send("hello");
});

app.get("/user", middleWare2, (req, res) => {
  res.send("User Route");
});

app.listen(4004);
//when user router is invoked then middleware 1 will be called
// and middleware 2 will be called and after that the middleware 2 will be called.
