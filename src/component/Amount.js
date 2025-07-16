import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../store/modules/Amount';

function Counter({number, increment, decrement}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="3" style={{ width: 'auto' }}>
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ width: '30px' }}>
                        <button className="price-button" onClick={decrement}>-</button>
                    </td>
                    <td style={{ width: 'calc(100% - 60px)' }}>
                        <span className="price-number">{number}</span>
                    </td>
                    <td style={{ width: '30px' }}>
                        <button className="price-button" onClick={increment}>+</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan="3"><span className="mint-alert">[Minting proceeds without refreshing]</span></td>
                </tr>
            </tbody>
        </table>
    );
}

const mapStateToProps = state =>({
    number: state.amount.number
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({increment, decrement}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Counter);