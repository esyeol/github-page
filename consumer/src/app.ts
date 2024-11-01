import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import { sqsConsumer } from './sqs/sqs.consumer';

const server = fastify();

server.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
  return 'pong\n';
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
  sqsConsumer();
})