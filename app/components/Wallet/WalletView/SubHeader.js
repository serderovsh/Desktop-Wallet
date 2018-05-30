import React, { Component } from 'react';
import { FormattedNumber, FormattedDate, FormattedTime } from 'react-intl';
import SubHeaderToken from './SubHeaderToken';
import styles from './SubHeader.css';

export default class SubHeader extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.mainAmount}><FormattedNumber value={this.props.account.trx / 1000000} /> <span>TRX</span></div>
        <div className={styles.tronPower}><FormattedNumber value={this.props.account.frozenBalance} /> <span>TP</span></div>
        <div className={styles.tpExpire}>Expires: <FormattedDate value={this.props.account.frozenExpireTime} /> <FormattedTime value={this.props.account.frozenExpireTime} /> <span> </span></div>
        <div className={styles.scroll}>
          <div className={styles.container}>
            <SubHeaderToken amount={this.props.account.trx} token="TRX" />
            {
              Object.keys(this.props.account.tokens).map((coin, i) =>
                <SubHeaderToken key={coin} amount={this.props.account.tokens[coin]} token={coin} isToken="true" />)
            }
          </div>
        </div>
      </div>
    );
  }
}
