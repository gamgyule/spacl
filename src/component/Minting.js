import React from 'react';
import { connect } from 'react-redux';
import Amount from './Amount';
import BlockNumber from './BlockNumber';

function Counter(props) {
    return (
        <article>
            <div className="content">
                <div>
                    <table className="table">
                        <thead>
                            <tr><th colSpan="5">Minting Block Number</th></tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>CURRENT BLOCK</td>
                                <td><BlockNumber></BlockNumber></td>
                                <td style={{ width: '50px' }}>
                                    <div className="vertical"></div>
                                </td>
                                <td>MINTING STARTS AT</td>
                                <td><span>#84084540</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="horizontal"></div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th colSpan="2">Price</th><th colSpan="2">Per Transaction</th><th>Per Wallet</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>
                                    <span>#84084540</span>
                                </td>
                                <td style={{ width: '5%' }}>
                                    <div className="vertical"></div>
                                </td>
                                <td style={{ width: '30%' }}>
                                    <span>#84084540</span>
                                </td>
                                <td style={{ width: '5%' }}>
                                    <div className="vertical"></div>
                                </td>
                                <td style={{ width: '30%' }}>
                                    <span>#84084540</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="horizontal"></div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Left NFTs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="left-nfts-span">Minted: 753 / 1000</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="horizontal"></div>

                    <Amount></Amount>

                    <table className="table">
                        <tbody>
                            <tr>
                                <td><input className="mint-button" type="button" value="Mint"></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </article>
    );
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps, null)(Counter);