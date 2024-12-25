const express = require('express');
const multer = require('multer');
const { processResume } = require('../controllers/resumeController');

const router = express.Router();

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Endpoint to handle resume upload
router.post('/upload', upload.single('resume'), processResume);

module.exports = router;
