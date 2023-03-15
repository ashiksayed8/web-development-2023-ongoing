const { json } = require('express');
const express = require('express');
const app = express();
const userRouter = require("./routers/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req, res)=> {
   /*  res.status(200).json({
        "name" : "Ashikul Islam",
        "message": "I am register page",
        statusCode: 200
    }); */

    // res.redirect("/login");
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html");
});

app.use("/login", (req, res)=> {
    res.cookie("name" , "Ashik" );
    res.cookie("age", "30");
    res.clearCookie("name");
    res.append("id", "1223");
    res.end();
});

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
  
});

app.use((req ,res)=> {
    res.send("<h1> 404!!! is  not founded</h1>");
});


module.exports = app;

/// 1.
/* app.post('/', (req, res)=> {
    res.send('Post method');
});

app.put('/', (req, res) => {
    res.send("Put method");
});

app.delete('/', (req, res) => {
    res.send("This is delete http api");
}); */