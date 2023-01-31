const express= require("express");
const app= express();

const port = 6000;

app.use(express.static("public"));

app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})
