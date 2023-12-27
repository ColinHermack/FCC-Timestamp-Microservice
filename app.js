let express = require("express");
let app = express();

console.log("Server Running");

//Serve the index.html file with styling for all views
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"))

app.get("/api/:date", function(req, res) {
    if (req.params.date.includes("-")) {
        let currDate = new Date(req.params.date);
        res.send({
            "unix": Math.floor(currDate.getTime() / 1000),
            "utc": currDate.toUTCString()
            })
    } else {
        let currDate = new Date(req.params.date * 1000);
        res.send({
            "unix": Math.floor(currDate.getTime() / 1000),
            "utc": currDate.toUTCString()
            })
    }
})

//Listen for requests on port 3000
app.listen(3000);