import Fastify from 'fastify';
// import fastifySensible from '@fastify/sensible';
import { createTodo } from './services/todos/create-todo.js';
import { general } from './services/general/index.js';
import { getManyTodo } from './services/todos/get-many-todo.js';
import { getTodo } from './services/todos/get-todo.js';
import { updateTodo } from './services/todos/update-todo.js';
import { deleteTodo } from './services/todos/delete-todo.js';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });
  fastify.get(prefix, general);

  // create todo
  fastify.post(`${prefix}/todo`, createTodo);

  // get many todo
  fastify.get(`${prefix}/todo`, getManyTodo);

  // get one todo
  fastify.get(`${prefix}/todo/:todoId`, getTodo);

  // update one todo
  fastify.put(`${prefix}/todo/:todoId`, updateTodo);

  // delete one todo
  fastify.delete(`${prefix}/todo/:todoId`, deleteTodo);
}
