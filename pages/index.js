import '../assets/css/app.css';
import 'react-transitions/dist/animations.css';
import axios from 'axios';

const Home = () => {

    function getAddress() {
        axios.get('http://localhost:5000/address')
        .then(function (response) {
            // console.log(response);
            alert(response.data);
        })
        // return (<div>{response.data}</div>)
    }

    return <div className="home">
        <div className="grid-container">
            <div className="grid-item">
                <div className="top-area">
                    <div className="header moveFromTopFade delay100">Welcome to Lattice-cdp</div>
                </div>
            </div>
            <div className="grid-item">
                <div className="top-area">
                    <div className="header moveFromTopFade delay100">Create your own cdp</div>
                </div>
            </div>
        </div>
        <div className="grid-container">
            <div className="grid-item">
                <div className="bot-area">
                    <div className="account moveFromLeftFade delay200">
                        <div className="title">Account</div>
                        <div className="hash" onClick={() => getAddress()}>AddressHere</div>
                        <div className="ticker">DAI: <span className="amount">[ 0.0100 ]</span></div>
                        <div className="ticker">MKR: <span className="amount">[ 0.0000 ]</span></div>
                        <div className="ticker">ETH: <span className="amount">[ 0.0391 ]</span></div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="bot-area">
                    <div className="create">
                        <div className="title">ETH</div>
                        <div className="status">Locked: 0.01</div>
                        <div className="status">Available: 0.01</div>
                    </div>
                    <div className="create">
                        <div className="title">DAI</div>
                        <div className="status">Generated: 0.01</div>
                        <div className="status">Available: 0.01</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

  
export default Home