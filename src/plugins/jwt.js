const fp = require("fastify-plugin")

module.exports = fp(async function(fastify) {
  fastify.register(require("fastify-jwt"), {
    secret: "supersecret"
  })

  fastify.decorate("authenticate", async function(request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })

  fastify.decorate("autheraize", async function(request, reply) {
    try {
      const decode = await request.server.jwt.decode(request.headers.authorization.split(' ')[1]);
      request.id=decode.id;
    } catch (err) {
      reply.send(err)
    }
  })

});