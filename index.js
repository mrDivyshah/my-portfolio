const express = require('express');
const app = express();
const path = require('path');
const data = require('./data/data.js');

app.set('view engine', 'ejs');
app.set('views', '/var/task/views');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log(data);
        try {
            res.render('index', { data: data });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).send('Internal Server Error');
        }
   
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
