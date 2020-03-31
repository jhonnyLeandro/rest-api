const express = require("express");
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



let users = [];
let user = {
    name: "",
    lastname:""
};

let response = {
    error: false,
    code: 200,
    message: ''
};

// get to answer to the root
app.get('/', (req, res) => {
    response = {
        error: true,
        code: 200,
        message: 'Punto de inicio'
    };
    res.send(response);
});

// get to obtain all the users
app.get('/users',(req, res) => {
    res.send(users);
})

// get to obtain a specific user
app.get('/user/:index', (req, res) => {
    
    let index = req.params.index;
    if (index >= users.length){
        res.send({"error":"There isn't user with specified index"})
    }
    res.send(users[index]);
});

//post to add a user
app.post('/user', (req, res) => {
    if(!req.body.name || !req.body.lastname) {
        res.send ({"error": "name and last name fields required"});
    } else {

        user = {
            name: req.body.name,
            lastname: req.body.lastname
        };

        users.push (user);

        response = {
            error: false,
            code: 200,
            message: 'user created',
            response: users
        };
    } 
    res.send(response);
});

app.put('/user/:index', (req, res) => {
    if (!req.body.name || !req.body.lastname) {
        res.send ({"error": "name and last name fields required"});
    } else {
        let index = req.params.index;
        if (index >= users.length) {
            res.send({"error":"There isn't user with specified index"})
        }
        users[index].name = req.body.name;
        users[index].lastname = req.body.lastname;
    }

    res.send({"message":"Operation completed successfully"});
});


app.delete ('/user/:index', (req, res) => {
    let index = req.params.index;
    if (index >= users.length) {
        res.send ({"error":"There isn't user with specified index"});
    }
    delete users[index];
    res.send(response);
});

app.use(function(req, res, next) {
    rsp = {
        error: true, 
        code: 404, 
        message: 'URL not found'
    };
    res.status(404).send(response);
});

app.listen(port, () => {
    console.log("Server initialized, listening port 3000");
});