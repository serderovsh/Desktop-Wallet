import React, { Component } from 'react';
import styles from './SubHeaderToken.css';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SubHeaderToken extends Component {
    render() {
        return (
            <NavLink to={"/wallets/walletDetails/" + this.props.match.params.account + "/" + this.props.token} className={styles.coinContainer} activeClassName={styles.active}>
                <div className={styles.coinAmount}>{(this.props.amount / 1000000).toFixed(8)}</div>
                <div className={styles.coinType}>{this.props.token}</div>
            </NavLink>
        );
    }
}
export default withRouter(connect(
    state => ({ wallet: state.wallet }),
    dispatch => ( {
    } )
)(SubHeaderToken));

