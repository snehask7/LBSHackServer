process.setMaxListeners(Infinity); 

const express = require('express');
const app = express();

const router = express.Router();

const{login,createLogin,viewLogin,singleLogin}=require('../controllers/login')

const { createCoupon, viewCoupon, removeCoupon, updateCoupon,singleCoupon} = require('../controllers/coupons');

router.post('/login', login);
router.get('/viewLogin', viewLogin);
router.post('/Users', createLogin);
router.get('/getLogin', singleLogin);

router.post('/addCoupon', createCoupon);
router.get('/Coupon', viewCoupon);
router.delete('/Coupon/:_id', removeCoupon);
router.put('/EditCoupon/:_id', updateCoupon);
router.get('/Coupon/:_id', singleCoupon);

module.exports = router;
