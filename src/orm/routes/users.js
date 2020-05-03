import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();


// define the home page route
router.get('/', function(req, res) {
    res.send('root users');
});


router.get('/get', userController.getUsers);

router.get('/get:id', );
router.post('/post', );
router.put('/put:id', );
router.delete('/delete:id', );

export default router;