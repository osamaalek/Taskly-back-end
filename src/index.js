const fastify = require("fastify");
const mongoose = require("mongoose");
const {database_url} = require('./config.js');

const app =fastify({ logger: true });


/* try {
  mongoose.connect(process.env.DATABASE_URL);
} catch (e) {
  console.error(e);
}  */


app.register(require('./plugins/jwt'));
app.register(require('./routes/userRoutes'));
app.register(require('./routes/taskRoutes'));

app.get('/', (req, res) => {
    try{
        res.send("Hello world!");
      } catch(e) {
        console.error(e);
      }
});

app.listen(5000 , (err, address)=>{
    if(err) {
        console.error(err);
        process.exit(1);
    }
    
    console.log("Server running on ",address);
});

