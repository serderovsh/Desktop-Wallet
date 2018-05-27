import React, { Component } from 'react';
import styles from './SubHeader.css';

export default class SubHeaderToken extends Component {
    render() {
        return (
            <div className={styles.coinContainer}>
                <div className={styles.coinAmount}>{this.props.amount}</div>
                <div className={styles.coinType}>{this.props.token}</div>
            </div>
        );
    }
}
