export const user = {
  '/register': {
    post: {
      summary: 'Register a new user',
      operationId: 'registerUser',
      requestBody: {
        $ref: '#/components/requestBodies/requestNewUser'
      },
      responses: {
        200: { $ref: '#/components/responses/SuccessfulUserResponse' }
      },
      security: [
        { }
      ]
    }
  },
  '/login': {
    post: {
      summary: 'Logs in a user',
      operationId: 'login',
      requestBody: {
        $ref: '#/components/requestBodies/requestNewUser'
      },
      responses: {
        200: { $ref: '#/components/responses/SuccessfulResponse' }
      },
      security: [
        { }
      ]
    }
  },
  '/logout': {
    get: {
      summary: 'logs out a user',
      operationId: 'logout',
      responses: {
        200: { $ref: '#/components/responses/SuccessfulResponse' }
      },
      security: [
        {
          cookieAuth: []
        }
      ]
    }
  }
};
