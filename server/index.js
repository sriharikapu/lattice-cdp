const Client = require("gridplus-sdk");
const crypto = require("crypto");
const express = require("express");
const abi = require("ethereumjs-abi");

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

        client.getBalance("ETH", { address: addr }, (err, _balanceData) => {
            if (err) throw new Error(err);
            console.log("\n\n---> Got balance: " + _balanceData.balance + " <---");
            balanceData = _balanceData;
          });
      });
    });
  });
});