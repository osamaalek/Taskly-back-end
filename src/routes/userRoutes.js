const userControler = require('../controllers/userControllers');
const userSchema = require('../schemas/userSchemas');


module.exports = (fastify, options, done)=> {

    fastify.post('/api/login', {schema : userSchema.token}, userControler.login);
    
    fastify.post('/api/singup', {schema : userSchema.token}, userControler.signup);

    done();

}