import { Client, providers } from "gridplus-sdk";
import abi from "ethereumjs-abi";

const host = "199.227.138.222:8088";
const serial = "gridplus-remote";

const eth = new providers.Ethereum ({
    network: "main",
    etherscan: true,
    apiKey: "ZX54QASMIS1XV6T7XYU4UCSY722IEZ1ZWQ"
})

const clientConfig = {
    baseUrl: host,
    name: 'LatticeCDPManager',
    privKey: crypto.randomBytes(32).toString('hex'),
    providers: [ eth ]
}

const client = new Client(clientConfig);

client.initialize((err) => { 
    if (err) throw new Error(err);
    console.log('\n\n---> Initialized! <---');
    client.connect(serial, (err, res) => {
        if (err) throw new Error(err);
        else console.log('\n\n--> Connected! <---')
    })
})