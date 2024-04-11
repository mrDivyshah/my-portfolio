const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    fs.readFile('./data/data,json', 'utf8', (error, data) =>{
        if (error) {
            console.error(error);
            return;
        }
        else {
            console.log(data);
            const jsonData = JSON.parse(data);
            res.render('index', { data: jsonData });
        }
    } );
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});