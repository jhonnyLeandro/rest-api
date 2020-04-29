const Pool = require('pg').Pool
const pool = new Pool ({
    user: process.env.USR, 
    host: process.env.HOST, 
    database: process.env.DB, 
    password: process.env.PASSWORD, 
    port: process.env.PORTBD
});

module.exports = {
    getUsers: function (req,res) {
       pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {throw error}
            res.status(200).json(results.rows)
        });
    },
    getUserById: function (req,res) {
        let id = parseInt(req.params.id);
        pool.query('SELECT * FROM users WHERE id = $1',[id],(error, results) => {
            if(error){ throw error}
            res.status(200).json(results.rows);
        });
    },
    postUser: function (req,res){

        let createdAt = new Date();
        let updatedAt = new Date();

        let {firstName, lastName} = req.body;

        if(!firstName || !lastName) {
            res.send ({"error": "name and last name fields required"});
        } else {
            pool.query('INSERT INTO users ("firstName","lastName","createdAt","updatedAt") values($1,$2,$3,$4)',
            [firstName,lastName,createdAt,updatedAt],(error, results)=>{
                if (error) {
                    throw error
                }
                res.status(201).send('User added')

            });
        }
    },
    updateUser: function(req,res){
        let updatedAt = new Date();
    
        let {firstName, lastName} = req.body;
        if (!firstName || !lastName) {
            res.send ({"error": "fistName and last name fields required"});
        } else {
            let id = parseInt(req.params.id);
            pool.query('UPDATE users SET "firstName"=$1, "lastName"=$2, "updatedAt"=$3  WHERE id=$4',[firstName,lastName,updatedAt,id],(error,results)=> {
                if(error){throw error}
                res.status(200).send(`user modified with id:${id}`);
            });
        }
    },
    deleteUser: function(req,res) {
        let id = parseInt(req.params.id);
        pool.query('DELETE FROM users WHERE id = $1',[id],(error, results)=>{
            if(error){throw error}
            res.status(200).send(`user deleted with id:${id}`);
        });
    }
};