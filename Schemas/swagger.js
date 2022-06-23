exports.options =  {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'IDoEvent',
            description: 'Documentación para la API de IDoEvent.',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: 'i-do-backend.herokuapp.com',
        schemes: ['https'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
}