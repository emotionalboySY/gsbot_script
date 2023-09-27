const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(200).send("Hello World!");
});

app.get("/test", (req, res) => {
	let message = "This is test of gsbot Goorm IDE Server.";
	res.status(200).json({
		result: message
	});
});

app.listen(3000, () => console.log("GSBot running in port 3000!"));