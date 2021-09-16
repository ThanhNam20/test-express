var User = require('../models/users.model');

exports.getAllUser = async (req, res) => {
    try {
        const user = await User.find({}, {
            _id: 0,
            password: 0
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
    }
};

exports.createUser = (req, res) => {
    let user = new User(req.body);
    User.find({
        userName: user.userName
    }, (err, docs) => {
        if (docs.length) {
            res.send('User is exsit');
        } else {
            user.save((err) => {
                if (err) {
                    next(err);
                }
                res.send('Success');
            })
        }
    })
}

exports.deleteUser = async (req, res) => {
    console.log(req.body.user_id);
    var a = req.body.user_id.split(',');
    await User.deleteMany({
            user_id: {
                $in: a
            }
    }, (err) => {
        if (err) {
            res.send('Error')
        } else {
            res.send("success")
        }
        
        } )
    
    
}