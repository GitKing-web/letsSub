const { Router } = require('express');
const {helloMsg,
 handleSignup,
 handleLogin,
Withdraw,
Transfer,
handleTransfer,
Others} = require('../controllers/route.controllers') 
const router = Router();


router.get('/hi', helloMsg)

router.post('/register', handleSignup)

router.post('/login', handleLogin)

//dashboard

router.get('/withdrawal', Withdraw);

router.get('/transfers', Transfer);

router.get('/others', Others);

// router.post('/withdrawal', handleWithdraw);

router.get('/transfer', handleTransfer);

// router.post('/others', handleOthers);



module.exports = router;