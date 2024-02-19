// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
	res.send({
		token: '1234',
	});
});

app.listen(8000, () => {
	console.log(
		'Server is running on port 8000 on http://localhost:8000/login'
	);
});
