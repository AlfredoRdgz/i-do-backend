exports.createWeddingResponseEmail = function (data) {
    var answers = data.answers;
    var dataHtml = "";

    for (answer of answers) {
        dataHtml += `
            <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;">
                <b>${answer.title}</b> : ${answer.value}
            </p>`;
    }

    return `
        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
            style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
            <head>
                <meta charset="UTF-8">
                <meta content="width=device-width, initial-scale=1" name="viewport">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta content="telephone=no" name="format-detection">
                <title>Wedding invite</title>
            </head>

            <body
                style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
                <table  width="100%" cellpadding="0" cellspacing="0" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                    <tr style="border-collapse:collapse">
                        <td esdev-links-color="#999999" align="center"
                            style="padding:0;Margin:0">
                            <p
                                style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;">
                                ¡Uno&nbsp;de&nbsp;sus&nbsp;invitados&nbsp;ha&nbsp;respondido&nbsp;a&nbsp;su&nbsp;invitación!
                            </p>
                        </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;padding-bottom:5px">
                            <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;">
                                Le&nbsp;enviamos&nbsp;este&nbsp;correo&nbsp;para&nbsp;informarle&nbsp;que&nbsp;ha&nbsp;recibido&nbsp;una&nbsp;nueva&nbsp;respuesta&nbsp;de&nbsp;nuestro&nbsp;servicio&nbsp;de&nbsp;RSVP:
                            </p>
                        </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;padding-bottom:5px">
                            ${dataHtml}
                        </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;padding-bottom:5px">
                            <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;">
                                Atentamente:&nbsp;IDoEvent&nbsp;|&nbsp;Punto&nbsp;Doce
                            </p>
                        </td>
                    </tr>
                </table>
            </body>
        </html>`;
};
