const express = require('express');
const app = express();
const path = require('path');
const Say = require('jaxcore-say-node');
const Speaker = require('speaker');
Say.speaker = Speaker;
var request = require('request');
//W78WX4ZORIS2AP90
// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});

app.use(express.static(path.join(__dirname, 'public')));

// Create a new Say instance
const voice = new Say({
    language: 'en',
    profile: 'Zhora'
});

// Function to convert text to speech
async function textToSpeech(text) {
    // Simply log the provided text
    console.log(text);
    // Speak the text with options
    const response = await voice.say(text, { slow: true, high: true });
    // Check if the response is undefined before logging it
    if (response !== undefined) {
        console.log("Speech synthesis complete");
    }
}



// Define a route to handle text-to-speech requests
app.get('/speak',  (req, res) => {
    // Extract the text to speak from the query parameters
    const text = req.query.text;

    const language = 'en';
    const voiceProfile = 'F';

    // Convert the text to speech
    textToSpeech(text, language, voiceProfile);
    res.send("hello it goinng sucessfull")
   
});




// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
