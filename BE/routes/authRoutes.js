const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
	registerUser,
	loginUser,
	coursesInformation,
} = require('../controllers/authControllers');

// Path: routes/authRoutes.js
router.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/information', coursesInformation);
module.exports = router;
