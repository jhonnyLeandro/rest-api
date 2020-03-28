const request = require('request');

request('https://xkcd.com/info.0.json', (err, res) => {
    if (err) { return console.log(err); }
    console.log(JSON.parse(res.body).img);
});