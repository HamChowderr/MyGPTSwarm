const express = require('express');
const router = express.Router();
const {personaJr} = require('../agents/personaJr.js');
const {personaInt} = require('../agents/personaInt.js');
const {personaSr} = require('../agents/personaSr.js');

// Path for test route
router.get('/test', (req, res) => {
    res.json({ message: 'Agents route works' });
});

// Path: Agents/routes/personaJr.js
router.post('/personaJr', async (req, res) => {
    const input = req.body.input;
    const response = await personaJr(input);
    res.json({ response });
});

// Path: Agents/routes/personaInt.js
router.post('/personaInt', async (req, res) => {
    const input = req.body.input;
    const response = await personaInt(input);
    res.json({ response });
});

// Path: Agents/routes/personaSr.js
router.post('/devSr', async (req, res) => {
    const input = req.body.input;
    const response = await personaSr(input);
    res.json({ response });
});

// Export the router to be used in app.js
module.exports = router;

