import Fastify from 'fastify';
import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';
import cookie from '@fastify/cookie';
import session from '@fastify/secure-session';
import jwt from '@fastify/jwt';
import { Service } from './services/index.js';
import { specification } from './specification/index.js';
import { Security } from './security/index.js';

// import sensible from '@fastify/sensible';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.register(cookie);
  fastify.register(session, {
    secret: 'a long string for the secret that should work',
    salt: '1234567890123456',
    cookie: {
      httpOnly: true,
      maxAge: 60 * 60
    }
  });

  fastify.register(jwt, {
    secret: 'a long string to be used for the jwt secret'
  });

  // fastify.register(sensible);

  const service = new Service();
  const securityHandlers = new Security(fastify);

  const openAPIGlueOptions = (
    specification,
    service,
    securityHandlers,
    prefix
  );

  const swaggerOptions = {
    openapi: specification,
    routePrefix: '/docs',
    exposeRoute: true
  };

  fastify.register(swagger, swaggerOptions);
  fastify.register(openAPIGlue, openAPIGlueOptions);

  // // create todo
  // fastify.post(`${prefix}/todo`, createTodo);

  // // get many todo
  // fastify.get(`${prefix}/todo`, getManyTodo);

  // // get one todo
  // fastify.get(`${prefix}/todo/:todoId`, getTodo);

  // // update one todo
  // fastify.put(`${prefix}/todo/:todoId`, updateTodo);

  // // delete one todo
  // fastify.delete(`${prefix}/todo/:todoId`, deleteTodo);
  return fastify;
}
