import db from '../sequalizeconnection';

export default {
    getUsers: function (req,res) {
        db.user.findAll().then(users => {
            res.status(200).json(users);
          });
    },
    getUserById: function (req,res) {
        let id = parseInt(req.params.id);

    },
    postUser: function (req,res){

        let createdAt = new Date();
        let updatedAt = new Date();

        let {firstName, lastName} = req.body;

        if(!firstName || !lastName) {
            res.send ({"error": "name and last name fields required"});
        } else {

        }
    },
    updateUser: function(req,res){
        let updatedAt = new Date();
    
        let {firstName, lastName} = req.body;
        if (!firstName || !lastName) {
            res.send ({"error": "fistName and last name fields required"});
        } else {
            let id = parseInt(req.params.id);

        }
    },
    deleteUser: function(req,res) {
        let id = parseInt(req.params.id);

    }
};