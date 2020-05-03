import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

// define the home page route
router.get('/', function(req, res) {
    res.send('root users');
});


router.get('/get', userController.getUsers);
router.get('/get/:id', userController.getUserById);
router.post('/post', userController.postUser);
router.put('/put/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

export default router;