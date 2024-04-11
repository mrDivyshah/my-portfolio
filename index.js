const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, './data', 'data.json');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    fs.readFile(dataPath, 'utf8', (error, data) => {
        if (error) {
            console.error('Error reading data file:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.render('index', { data: jsonData });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).send('Internal Server Error');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
