const User = require('../models/user');

module.exports = {

    login: async (req, res) => {
        try {
            const { username, password } = req.body
            const user = await User.findOne({username});

            
            if(user == null || user.password !== password){
                res.code(401).send({'message' : 'Invalid username or password'});
            }
            else {
                const token = req.server.jwt.sign(
                  { id: user._id },
                  { expiresIn: '1h' }
                )
                res.code(200).send({ token })
              }

        } catch(e) {
            res.code(500).send(e);
        }
    },

    signup: async (req, res) => {
        try {

            const user = req.body;
            await User.create(user);
            res.code(201).send({'message' : 'user is created'});

        }catch(e) {
            res.code(500).send(e);
        }
    }

}