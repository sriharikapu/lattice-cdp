const abi = require("ethereumjs-abi");
const Web3 = require("web3");

module.exports = function createCDP(client, ethToLock, daiToDraw) {
  const addrReq = {
    start: 0,
    total: 1,
    coin_type: "60'"
  };

  client.addresses(addrReq, (err, _addr) => {
    if (err) throw new Error(err);
    console.log("\n\n---> Got addresses: " + _addr + " <---");

    const eth = web3.utils.toWei(ethToLock, "ether");
    const dai = Number(daiToDraw) * Math.pow(10, 18);

    const signature = web3.utils
      .sha3("createCDP(uint256)")
      .substring(0, 10);
    const arguments = abi
      .rawEncode(["uint256"], [web3.utils.toBN(dai.toString()).toString()])
      .toString("hex");
    const bytes = signature + arguments;

    const addr = _addr;
    const signReq = {
      schemaCode: "ETH",
      params: {
        nonce: null,
        gasPrice: 100000000,
        gas: 500000,
        to: "0xdc919494349e803fbd2d4064106944418381edb3",
        value: eth,
        data: bytes
      },
      accountIndex: 0,
      sender: addr
    };

    client.sign(signReq, (err, _sigData) => {
        if (err) throw new Error(err);
        console.log('\n\n--> Got signature <--');
        sigData = _sigData;

        client.broadcast('ETH', sigData, (err, txHash) => {
            if (err) throw new Error(err);
            console.log('Successfully broadcast: ', txHash);

            return txHash;
        })
    })
  });
}
