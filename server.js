'use strict';
// Imports
const app = require('fastify')();
// Local files import.
const swagger = require('./Schemas/swagger');
const rsvp = require('./Routes/Rsvp');

// Configuration registers.
app.register(require('fastify-cors'));
app.register(require('fastify-swagger'), swagger.options);

// Routes import.
app.register(rsvp, { prefix: '/rsvp' });

// Server listener.
app.listen({ port: process.env.PORT || 3000, host: process.env.HOST || '0.0.0.0' }, (err) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.swagger();
    console.log(`Server listening on port ${app.server.address().port}`);
});