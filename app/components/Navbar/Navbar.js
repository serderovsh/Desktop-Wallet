// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.css';

import * as Icons from '../Icons.js';

const links = [
	{ route: '/wallets', text: 'Wallets', icon: Icons.WalletIcon },
	{ route: '/send', text: 'Send', icon: Icons.SendIcon },
	{ route: '/receive', text: 'Receive', icon: Icons.ReceiveIcon },
  { route: '/tokens', text: 'Tokens', icon: Icons.TokensIcon },
	{ route: '/vote', text: 'Vote', icon: Icons.VoteIcon },
  { route: '/contact', text: 'Contact', icon: Icons.ContactIcon },
	{ route: '/settings', text: 'Settings', icon: Icons.SettingsIcon },
];


type Props = {};

export default class Navbar extends Component<Props> {
  props: Props;

  render() {
    return (
      <nav className={styles.navbar}>
      	<div className={`${styles.logo} ${styles.top}`}>
      		<svg x="0px" y="0px" viewBox="0 0 236.1 271">
	      		<line className={styles.st0} x1="3.7" y1="4.7" x2="115.3" y2="134"/>
	      		<line className={styles.st0} x1="114.6" y1="134" x2="100.2" y2="267.5"/>
	      		<line className={styles.st1} x1="3.5" y1="3.5" x2="192" y2="48.7"/>
	      		<line className={styles.st0} x1="192" y1="49.5" x2="114.6" y2="134"/>
	      		<line className={styles.st1} x1="232.6" y1="76.8" x2="101" y2="267.5"/>
	      		<line className={styles.st0} x1="115.3" y1="134" x2="231.9" y2="76.8"/>
	      		<line className={styles.st1} x1="192" y1="48.7" x2="232.6" y2="76.8"/>
	      		<line className={styles.st0} x1="2.8" y1="4.5" x2="100.2" y2="268.5"/>
      		</svg>
      	</div>

      	{
      		links.map((link, i) =>
      			<NavLink to={link.route} key={i} activeClassName={styles.active} className={styles.link}>
      			  <link.icon />
      			  <div>{link.text}</div>
      			</NavLink>
      		)
	    	}

        <div className={`${styles.link} ${styles.bottom}`}><Icons.SearchIcon /></div>
      </nav>
    );
  }
}
