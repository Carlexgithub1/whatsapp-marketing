require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log(socket.id);
})

app.set("view engine", "ejs");
app.set("views", "./src/Views");

const Router = require("./src/Router");
Router.route(app);