const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// GET request that sends a PDF
app.get('/get-pdf', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'AnshumanResume.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.sendFile(filePath);
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
