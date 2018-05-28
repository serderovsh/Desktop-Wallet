import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Share.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';

import { Button } from 'semantic-ui-react'
import buttonStyles from '../../Button.css';

import { ShareIcon, RedditIcon, TwitterIcon, FacebookIcon } from '../../Icons';

export default class Share extends Component {
  render() {
    return (
      <Secondary>
        <Header headerName="Share" />
        <div className={styles.container}>
          <ShareIcon className={styles.icon} />
          <div>Share Tron Wallet on social media.</div>
          <div className={styles.subText}>Click one of the buttons below to be taken to it's respective website to share a post.</div>
          <div className={styles.buttonContainer}>
            <Button className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><FacebookIcon /></Button>
            <Button className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><TwitterIcon /></Button>
            <Button className={`${buttonStyles.iconButton} ${buttonStyles.gradient}`}><RedditIcon /></Button>
          </div>
        </div>
      </Secondary>
    );
  }
}
