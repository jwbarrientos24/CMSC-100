import { getDB } from '../../utils/db/index.js';

export const getTodo = async (request, reply) => {
  const { params, username } = request;
  const { todoId: id } = params;

  if (!username) {
    return reply.badRequest();
  }

  const db = await getDB();

  const { todos } = db;

  if (!todos[id]) {
    return {
      error: 'notfound'
    };
  }

  if (db.todos[id].username !== username) {
    return reply.forbidden('You are not the owner');
  }

  return {
    id,
    ...todos[id]
  };
};
