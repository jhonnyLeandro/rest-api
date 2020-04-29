const user = require('./user');
const app = require('./configapp');

//root
app.get('/', (req, res) => {
    res.send({code:200,message:'root'});
});

// get to obtain all the users
app.get('/users',user.getUsers)

// get to obtain a specific user
app.get('/user/:id',user.getUserById);

//post to add a user
app.post('/user',user.postUser);

//modify user
app.put('/user/:id',user.updateUser);

//delete user
app.delete ('/user/:id',user.deleteUser);

app.use(function(req, res, next) {
    res.status(404).send({code:404,message:'URL not found'});
});
