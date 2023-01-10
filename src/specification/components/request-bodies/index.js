export const requestBodies = {
  RequestNewUser: {
    description: 'the request body for creating a new user',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/NewUserObject'
        }
      }
    }
  },
  LoginUser: {
    description: 'logs in a user',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/LoginObject'
        }
      }
    }
  }
};
