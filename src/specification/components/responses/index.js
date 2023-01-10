export const responses = {
  SuccessfulUserResponse: {
    description: 'a successful response to return a user object',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/UserObject'
        }
      }
    }
  },
  SuccessfulResponse: {
    description: 'a successful response to return a user object',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/SuccessfulObject'
        }
      }
    }
  }
};
