express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.listen(1000, () => {
    console.log("Server is listining on port 1000");
})

let Users = require('./routes/Users');
app.use(bodyParser.json())
app.use(cors())
app.use( bodyParser.urlencoded({ extended: false })
)

//Users(app);
app.use('/users', Users);

//app.listen(port, () => {
  //  console.log("Server is listining on port:" + port);
//})




