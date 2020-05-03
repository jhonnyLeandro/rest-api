import db from '../connection';

export default {
    getUsers: function (req,res) {
        db.user.findAll().then(users => {
            res.status(200).json(users);
          });
    },
    getUserById: function (req,res) {
        let id = parseInt(req.params.id);

        db.user.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving Tutorial with id=" + id
            });
        });
    },
    postUser: function (req,res){

        let createdAt = new Date();
        let updatedAt = new Date();

        let { firstName, lastName } = req.body;

        if(!firstName || !lastName) {
            res.send ({"error": "name and last name fields required"});
        } else {
            db.user.create({ firstName: firstName , lastName: lastName}).then( user => {
                res.send({"success": `user generated with id ${user.id}`});
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


            db.user.update({ firstName: firstName, lastName: lastName, updatedAt: updatedAt }, {
                where: {
                    id: id
                }
            }).then(() => {
                res.send({"success": "element updated"});
            });

        }
    },
    deleteUser: function(req,res) {
        let id = parseInt(req.params.id);
        db.user.destroy({
            where: {
              id: id
            }
          }).then(() => {
              res.send({"success":"element deleted"});
          });
    }
};