const taskControllers = require('../controllers/taskControllers')
const taskSchema = require('../schemas/taskSchema');

module.exports = (fastify, options, done) => {


    /* app.addHook('onRequest', async (request, reply) => {
        try {
          await request.jwtVerify()
        } catch (err) {
          reply.send(err)
        }
      }); */

    fastify.get('/api/tasks', {schema : taskSchema.findAll , onRequest: [fastify.autheraize]}, taskControllers.getAll);

    fastify.get('/api/tasks/uncompleted', {schema : taskSchema.findAll , onRequest: [fastify.autheraize]}, taskControllers.getAllUncompleted);

    fastify.post('/api/tasks', {schema : taskSchema.insertOne , onRequest: [fastify.autheraize]}, taskControllers.create);

    fastify.delete('/api/tasks/:id', {schema : taskSchema.deleteOne , onRequest: [fastify.autheraize]}, taskControllers.delete);

    fastify.put('/api/tasks/:id', {schema : taskSchema.updateOne , onRequest: [fastify.autheraize]}, taskControllers.update);

    done();

}