const request = require ('request')

request('https://cat-fact.herokuapp.com/facts', (err, res) => {
    if (err){
        console.log (err)
        return
    }
    console.log (res.body);
});