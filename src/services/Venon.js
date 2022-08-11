const venom = require("venom-bot");

class Venon {
  static client = null;
  constructor() {
    this.#create();
  }

  async #create() {
    this.client = await venom.create({
      session: "liniker", //name of session
      multidevice: true, // for version not multidevice use false.(default: true)
      disableWelcome: true,
      browserArgs: ["--user-agent"],
      statusFind: (statusSession, session) => {
        console.log("Status Session: ", statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser || initBrowser || openBrowser || connectBrowserWs || initWhatsapp || erroPageWhatsapp || successPageWhatsapp || waitForLogin || waitChat || successChat
        //Create session wss return "serverClose" case server for close
        console.log("Session name: ", session);
      },
    });
  }

}

module.exports = Venon;
