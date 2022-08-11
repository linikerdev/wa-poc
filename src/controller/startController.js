const { venon } = require("..");

module.exports = {
  async index(req, res) {
    const contacts = await venon.client.getAllChats();
    console.log("#### browserSessionToken", browserSessionToken);
    return res.json({
      datax: contacts,
    });
  },

  async send(req, res) {
    const message = await req.body.message;
    if (message) {
      await venon.client
        .sendText("5521972371203@c.us", message)
        .then(async (result) => {
          res.status(200).json({
            data: "enviado",
          });
          return result;
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
          res.json({
            data: "deum ruimx",
          });
        });
      return;
    }
  },
};
