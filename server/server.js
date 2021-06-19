const fastify = require("fastify")({ logger: true });
const PORT = 5000;

const items = require("./models/Items.Model");

fastify.get("/items", (req, reply) => {
  reply.send({ test: "Hello" });
});
fastify.get("/items/:id", (req, reply) => {
  const { id } = req.params;

  const item = items.find((item) => item.id === id);
  reply.send(item);
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
