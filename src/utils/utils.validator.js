const Joi = require('joi');

const loginValidator = Joi.object().keys({
    data: Joi.string().required(),
    password: Joi.string().required()
});

const signUpValidator = Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required().min(6)
})

// acct generator
const acctGenerator = () => {
    const num = [0,1,2,3,4,5,6,7,8,9]; 
    let genAcc = '';
    for(let i = 0; i < 10; i++){

        const acct_num = Math.floor(Math.random() * num.length );
        const digit = num[acct_num]
        genAcc += digit
        num.splice(acct_num, 1)
    }
    return genAcc;
}

module.exports = {
    loginValidator,
    signUpValidator,
    acctGenerator
}