process.setMaxListeners(Infinity); 

const express = require('express');
const app = express();

const router = express.Router();

const{login,createLogin,viewLogin,singleLogin}=require('../controllers/login')


router.post('/login', login);
router.get('/viewLogin', viewLogin);
router.post('/Users', createLogin);
router.get('/getLogin', singleLogin);

module.exports = router;
