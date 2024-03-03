const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

const dataFolderPath = path.join(__dirname, 'information');
const usersFilePath = path.join(dataFolderPath, 'users.json');

// Function to read users data from the JSON file
function readUsersData() {
	try {
		const usersData = fs.readFileSync(usersFilePath, 'utf8');
		return JSON.parse(usersData);
	} catch (error) {
		// If the file doesn't exist or is empty, return an empty array
		return [];
	}
}

// Function to write users data to the JSON file
function writeUsersData(users) {
	try {
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4), 'utf8');
	} catch (error) {
		console.error('Error writing users data:', error);
	}
}

app.post('/signup', (req, res) => {
	const { username, password } = req.body;

	// Read existing users data
	const users = readUsersData();

	// Check if username already exists
	if (users.find((user) => user.username === username)) {
		return res.status(400).json({ error: 'Username already exists' });
	}

	// Add new user to the users array
	users.push({ username, password });

	// Write updated users data back to the JSON file
	writeUsersData(users);

	res.send({
		message: 'User signed up successfully',
	});
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;

	// Read existing users data
	const users = readUsersData();

	// Find the user with the provided username
	const foundUser = users.find((user) => user.username === username);

	if (!foundUser) {
		// User not found
		return res.status(400).json({ error: 'Not a registered username' });
	}

	if (foundUser.password !== password) {
		// Incorrect password
		return res.status(400).json({ error: 'Invalid Password' });
	}

	// Successful login
	res.send({ message: 'Login successful' });
});

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});
