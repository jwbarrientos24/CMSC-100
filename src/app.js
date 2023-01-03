import Fastify from 'fastify';
import { createTodo } from './services/todos/create-todo.js';
import { general } from './services/general/index.js';
import { getManyTodo } from './services/todos/get-many-todo.js';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });
  fastify.get(prefix, general);

  // create todo
  fastify.post(`${prefix}/todo`, createTodo);

  // get many todo
  fastify.get(`${prefix}/todo`, getManyTodo);
}
