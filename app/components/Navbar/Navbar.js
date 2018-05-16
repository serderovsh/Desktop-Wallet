// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.css';

import Wallet from 'react-icons/lib/md/account-balance-wallet';
import Send from 'react-icons/lib/fa/paper-plane-o';
import Receive from 'react-icons/lib/md/loupe';
import Vote from 'react-icons/lib/md/assignment-turned-in';
import Settings from 'react-icons/lib/md/settings';
import Search from 'react-icons/lib/md/search';

const links = [
	{ route: '/wallet', text: 'Wallet', icon: Wallet },
	{ route: '/send', text: 'Send', icon: Send },
	{ route: '/receive', text: 'Receive', icon: Receive },
	{ route: '/vote', text: 'Vote', icon: Vote },
	{ route: '/settings', text: 'Settings', icon: Settings },
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

        <div className={`${styles.link} ${styles.bottom}`}><Search /></div>
      </nav>
    );
  }
}
