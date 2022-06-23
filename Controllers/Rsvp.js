require('dotenv').config();
const Email = require("../Helpers/EmailGenerator");
const EmailTemplates = require("../Helpers/EmailTemplates");

// Account methods
exports.sendRsvpFormResponse = (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = request.body;

            // Send confirmation email.
            const html = EmailTemplates.createWeddingResponseEmail(data);
            await Email.sendEmail(process.env.TO_EMAIL, "Nueva confirmación de asistencia para su boda", html);

            resolve({ Message: "Confirmación enviada con éxito." });
        } catch (error) {
            reject({
                MessageCode: 202,
                Message: error
            });
        }
    });
}
