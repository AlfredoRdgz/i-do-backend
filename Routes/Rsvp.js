const rsvpController = require("../Controllers/Rsvp");
const rsvpSchema = require("../Schemas/Rsvp");

module.exports = function (fastify, opts, done) {
    // Rsvp
    fastify.post('/confirmation',
        rsvpSchema.sendRsvpFormResponse,
        async function (request, response) {
            try {
                const data = await rsvpController.sendRsvpFormResponse(request);
                response.status(200).send(data);
            } catch (error) {
                if (error.MessageCode) {
                    response.status(error.MessageCode).send({ Message: error.Message });
                }
                response.status(500).send({ Message: 'Ocurrió un error en el servidor' });
            }
        });

    done();

}