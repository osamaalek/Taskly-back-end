
module.exports = {

    decodeToken : async function (req) {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1]
    
        await req.server.jwt.verify(token, (err, decoded) => {
          if (err) fastify.log.error(err)
          console.log("decode "+ decoded)
          console.log('id : ' + decoded.id)
        })
      }
}