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
      }
    }
  }
};
