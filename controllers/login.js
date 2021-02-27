const Login = require('../models/login');
const bcrypt = require('bcrypt');


exports.createLogin = (req, res) => {
    const { Email, Password, DisplayName } = req.body;
    Login.create({ Email, Password, DisplayName }, (err, login) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: 'Duplicate Login. Try another title' });
        }
        res.json(login);
    });
};

exports.login = (req, res) => {
    const { Email, Password } = req.body;
    var valid = 0;
    Login.find({ Email })
        .exec((err, user) => {
            console.log('user', user)
            if (err) {
                console.log('0')
                res.send('0')
            }
            else if (user[0]) {
                if (Password == user[0].Password) {
                    res.send(user[0]._id)
                }
                else {
                    console.log('0')
                    res.send('0')
                }
            }
            else {
                console.log('0')
                res.send('0')
            }
        })
};


exports.singleLogin = (req, res) => {
    const _id = req.query.userID;
    var query = {};
    query._id = _id;
    console.log(query)
    Login.find(query)
        .exec((err, posts) => {
            console.log(posts)
            if (err) console.log(err);
            res.json(posts);
        })
}

exports.viewLogin = (req, res) => {
    Login.find({})
        .exec((err, user) => {
            if (err) console.log(err);
            res.json(user)
        })
}




