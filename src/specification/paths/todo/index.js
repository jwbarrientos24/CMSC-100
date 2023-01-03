export const todo = {
    '/todo/:todoId': {
        get: {

        },
        put: {

        },
        delete: {
            
        }
    },
    '/todo': {
        post: {
            summary: 'Create a todo',
            operationId: 'createTodo',
            requestBody: {
                description: 'The request body for todo',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/TodoRequestRequiredObject'
                        }
                    }
                },
                required: true
            },
            responses: {
                200: {
                    description: 'a todo object',
                    content: {
                        'application.json': {
                            schema: {
                                $ref: '#/components/schemas/TodoObject'
                            }
                        }
                    }
                }
            }
        },
        get: {
            summary: 'get many todo',
            operationId: 'getManyTodo',
            parameters: [
                {
                    name: 'limit',
                    in: 'query',
                    description: 'The number of items returned',
                    schema: {
                        type: 'number'
                    }
                }
            ],
            responses: {
                200: {
                    description: 'a todo object',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    $ref: '#/components/schemas/TodoObject'
                                }
                            }
                        }
                    }
                }
            }
        

        }
    }
}