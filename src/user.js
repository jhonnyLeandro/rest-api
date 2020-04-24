const Pool = require('pg').Pool
const pool = new Pool ({
    user:'xxxxx', 
    host:'xxxxxx', 
    database: 'xxxxxxx', 
    password: 'xxxxxx', 
    port:'xxxxx'
});

module.exports = {
    getUsers: function (req,res) {
       pool.query('SELECT * FROM Users ORDER BY id ASC', (error, results) => {
            if (error) {throw error}
            res.status(200).json(results.rows)
        });
    },
    getUserById: function (req,res) {
        let id = parseInt(req.params.id);
        pool.query('SELECT * FROM Users WHERE id = $1',[id],(error, results) => {
            if(error){ throw error}
            res.status(200).json(results.rows);
        });
    },
    postUser: function (req,res){
        let {name, lastname} = req.body;
        if(!name || !lastname) {
            res.send ({"error": "name and last name fields required"});
        } else {
            pool.query('INSERT INTO Users (name,lastname) values($1,$2)',[name,lastname],(error, results)=>{
                if (error) {
                    throw error
                }
                res.status(201).send('User added')

            });
        }
    },
    updateUser: function(req,res){
        let {name,lastname} = req.body;
        if (!name || !lastname) {
            res.send ({"error": "name and last name fields required"});
        } else {
            let id = parseInt(req.params.id);
            pool.query('UPDATE Users SET name=$1, lastname=$2 WHERE id=$3',[name,lastname,id],(error,results)=> {
                if(error){throw error}
                res.status(200).send(`user modified with id:${id}`);
            });
        }
    },
    deleteUser: function(req,res) {
        let id = parseInt(req.params.id);
        pool.query('DELETE FROM Users WHERE id = $1',[id],(error, results)=>{
            if(error){throw error}
            res.status(200).send(`user deleted with id:${id}`);
        });
    }
};