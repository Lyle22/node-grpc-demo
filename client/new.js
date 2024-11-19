const client = require("../client.js");

client.getAllNews({}, (err, response) => {
    console.log("Gets data : " + JSON.stringify(response.news))
    console.log("Error : " + JSON.stringify(err))
})