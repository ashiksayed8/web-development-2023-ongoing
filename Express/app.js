const express = require('express');
const app = express();
const userRouter = require("./routers/users.route");

app.use("/api/user", userRouter);

app.get('/', (req, res) => {
    res.send("Ashik");
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