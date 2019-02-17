const Client = require("gridplus-sdk");
const crypto = require("crypto");
const express = require("express");
const cors = require("cors")

const createCDP = require("./createCDP.js");

const host = "199.227.138.222:8088";
const serial = "gridplus-remote";

const clientConfig = {
  baseUrl: host,
  name: "latticeCDPManager",
  privKey: crypto.randomBytes(32).toString("hex")
};

const eth = new Client.providers.Ethereum({
  network: "homestead",
  etherscan: true,
  apiKey: "ZX54QASMIS1XV6T7XYU4UCSY722IEZ1ZWQ"
});

clientConfig.providers = [eth];

const client = new Client.Client(clientConfig);

let address;

client.initialize(err => {
  if (err) throw new Error(err);
  console.log("\n\n---> Initialized! <---");
  client.connect(serial, (err, res) => {
    if (err) throw new Error(err);
    console.log("\n\n--> Connected! <---");

    const secret = crypto.randomBytes(3).toString("hex");

    client.pair(secret, err => {
      if (err) throw new Error(err);
      console.log("\n\n---> Paired! <---");

      addrReq = {
        start: 0,
        total: 1,
        coin_type: "60'"
      };

      client.addresses(addrReq, (err, _addr) => {
        if (err) throw new Error(err);
        console.log("\n\n---> Got addresses: " + _addr + " <---");
        addr = _addr;
        address = _addr

        client.getBalance("ETH", { address: addr }, (err, _balanceData) => {
            if (err) throw new Error(err);
            console.log("\n\n---> Got balance: " + _balanceData.balance + " <---");
            balanceData = _balanceData;
          });
      });
    });
  });
});

const app = express();

app.use(cors());

app.get("/address", (req, res) => {
  res.send(address);
})

app.post("/createcdp/:eth-:dai", (req, res) => {
  const ethToLock = req.params.eth;
  const daiToDraw = req.params.dai;

  const tx = createCDP(client, ethToLock, daiToDraw);
})

app.listen(5000, () => console.log(`Example app listening on port ${5000}!`));