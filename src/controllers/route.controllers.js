const bcrypt = require('bcrypt');
const User = require("../models/model.User");


const { loginValidator, signUpValidator, acctGenerator} = require('../utils/utils.validator');
const { default: axios } = require('axios');
const helloMsg = (req, res) => res.status(200).send('Hello..');

const handleSignup = async (req, res) => {
    try {
        const { username, email, password }  = req.body;
        const { error } = signUpValidator.validate(req.body);
        if(error) {
            res.status(421).send(error.details[0].message)
            return;
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(401).send('email already linked to an account..')
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 13)
        const account =  acctGenerator();
        const user = new User({
            username,
            email,
            password: hashedPassword,
            acct_number: account
        })
        const savedUser = await user.save();
        res.status(200).send(`Account created successfully, congratulations!!! Your Account number is ${account}`)
    } catch (error) {
        console.log(error);
    }
} 

const handleLogin = async (req, res) => {
    try {
        const { acct_number, email, password: pass } = req.body;
        
        if(!email || email === '' || !password || password === ''){
            return res.status(402).send('field cannot be empty.')
        }

        if(email){
            const user = await User.findOne({ email });
            if(!user){
                res.status(401).send('Invalid Credentials...');
                return;
            }
            const isPasswordCorrect = await bcrypt.compare(pass, user.password)
            if(!isPasswordCorrect){
                res.status(401).send('Invalid Credentials...');
                return;
            }

            const { password, ...others} = user._doc

            res.status(200).send(others);
        }

        if(acct_number){
            const user = await User.findOne({ acct_number });
            if(!user){
                res.status(401).send('Invalid Credentials...');
                return;
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.password)
            if(!isPasswordCorrect){
                res.status(401).send('Invalid Credentials...');
                return;
            }

            const { password, ...others} = user._doc

            res.status(200).send(others);
        }
       
    } catch (error) {
        console.log(error);

    }
}

const Withdraw = (req, res) => {
    res.status(200).send('withdrawal page...')
}

const Transfer = (req, res) => {
    // res.status(200).send('transfer page...');
    res.status(200).render('index', { title: 'paystack'})
}

const handleTransfer = async (req, res) => {
    try {
        const { email, amount } = req.query;
        const response = await axios.post('https://api.paystack.co/transaction/initialize',
        { email, amount},
        {
            headers: {
                Authorization: `Bearer ${process.env.TEST_SEC}`,
                'Content-Type': 'application/json'
            }
        }
        );

        if(response.status === 200){
            res.status(200).send({ message: response.data});
            // console.log(response.data);
        }else{
            res.status(400).send({ message: 'Sorry, An error occurred'});
            // console.log('error');
        }

    } catch (error) {
        console.log(error);
    }
}

const Others = (req, res) => {
    res.status(200).send('others page...')
}
 
module.exports = {
    helloMsg,
    handleSignup,
    handleLogin, Withdraw,
    Transfer,
    handleTransfer,
    Others
}

