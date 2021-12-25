const express = require("express");
const socket = require("socket.io");
const cors = require("cors");
const app = express();

// app.use(cors({origin: "http://localhost:3000"}))
// app.get("/data", (req, res) => {
//     res.json({ fname: "Ankita", lname: "Santape" })
// })

app.use(express.static("public"));


let port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log("Listening to port 3000");
})

const io = socket(server);

io.on("connection", (socket) => {
    console.log("Made socket connection");

    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
    })
    socket.on("beginPath", (data) => {
        io.sockets.emit("beginPath", data);
    })
    socket.on("undoRedo", (data) => {
        io.sockets.emit("undoRedo", data);
    })
})