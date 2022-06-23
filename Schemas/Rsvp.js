exports.sendRsvpFormResponse = {
    schema: {
        body: {
            type: 'object',
            properties: {
                answers: { type: 'array' }
            }
        },
        response: {
            202: {
                type: 'object',
                properties: {
                    Message: { type: 'string' }
                }
            },
            200: {
                type: 'object',
                properties: {
                    Message: { type: 'string' }
                }
            }
        }
    }
};