var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const userController = require('../components/users/User_controller');

router.post('/signup', async function (req, res, next){
    try {
        const {username, password} = req.body;
        const user = await userController.singup(username, password);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error});
    }
})

router.post('/signin', async function (req, res, next){
    try {
        const {username, password} = req.body;
        const user = await userController.singin(username, password);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error});
    }
})


router.post('/dang-nhap', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await userController.login(username, password);
        if (user) {


        } else {

        }
    } catch (err) {

    }
});



module.exports = router