import React from 'react';
import { connect } from 'react-redux';

import logo from '../logo.png';

function Nav(props) {
    let account = "Connect Wallet";
    async function ConnectWallet(e) {
        const accounts = await klaytn.enable();
        account = accounts[0];
        let str = account.substr(0, 6) + '.....' + account.substr(account.length - 6, account.length);
        e.target.innerHTML = str;
    }
    return (
        <nav>
            <div className="nav">
                <div className="nav-logo-area">
                    <img src={logo} alt="Unknowns"></img>
                </div>
                <div className="nav-connect-wallet-area">
                    <div className="connect-wallet-btn" onClick={ConnectWallet}>{account}</div>
                </div>
            </div>
        </nav>
    );
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleClick: (text) => dispatch(handleClick(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);