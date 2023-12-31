const router = require("express").Router();
const User = require('../models/User');
const post = require('../models/User');
const bcrypt = require('bcrypt');


//update
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        } 
        try {
            const updatedUser = await user.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new:true});
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(422).json(err);
        }
    } else {
        res.status(401).json("You can update only your account");
    }
});

//delete
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try{
            const user = await User.findById(req.params.id);
            try {
                await post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted");
            } catch (err) {
                res.status(422).json(err);
            }
        }catch (err){
            res.status(400).json("User not found")
        }
    } else {
        res.status(401).json("You can delete only your account");
    }
});


//getuser
router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const { password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        exports.status(400).json(err);
    }
})
module.exports = router;