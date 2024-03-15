const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
	test,
	registerUser,
	loginUser,
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

router.get('/', test);

module.exports = router;
