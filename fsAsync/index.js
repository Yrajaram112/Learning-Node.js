const fs = require("fs");

fs.writeFile("readwrite.txt","today is awesome day",(err)=>
{
    console.log("completed");
});