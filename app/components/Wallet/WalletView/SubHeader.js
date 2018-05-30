import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SubHeaderToken from './SubHeaderToken';
import styles from './SubHeader.css';

export default class SubHeader extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.mainAmount}>{ (this.props.account.trx / 100000000).toFixed(8) } <span>TRX</span></div>
        <div className={styles.tronPower}>{ (this.props.account.frozenBalance / 100000000).toFixed(8) } <span>TP</span></div>
        <div className={styles.tpExpire}>Expires: <span> { new Date(this.props.account.frozenExpireTime).toLocaleString() }</span></div>
        <div className={styles.scroll}>
          <div className={styles.container}>
              <SubHeaderToken amount={(this.props.account.trx / 100000000).toFixed(8)} token="TRX"/>
            {
              Object.keys(this.props.account.tokens).map((coin, i) =>
                  <SubHeaderToken key={coin} amount={this.props.account.tokens[coin]} token={coin} isToken="true"/>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
