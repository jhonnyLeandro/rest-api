const request = require('request'),
url = 'https://xkcd.com/info.0.json' ;

request(url, (err, res) => {
    if (err) { return console.log(err); }
    console.log(JSON.parse(res.body).img);
});