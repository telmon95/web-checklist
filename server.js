const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit', (req, res) => {
    const technicianName = req.body.technicianName;
    const date = req.body.date;
    const title = req.body.title;
    const escalationName = req.body.escalationName;

    // Process data here (e.g., save to database or trigger escalation)
    res.send('Checklist saved and escalations triggered!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
