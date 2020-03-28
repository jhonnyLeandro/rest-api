const request = require('request')

request.post('https://flaviocopes.com/todos', { json: { todo: 'Buy the milk'} }, (error, res) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(res.headers);
});