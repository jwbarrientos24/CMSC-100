export const general = {
  '/': {
    get: {
      summary: 'API General Example',
      operationId: 'general',
      responses: {
        200: {
          description: 'success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
