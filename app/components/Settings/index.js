import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SettingList.css';

import Header from '../ContentPrimaryHeader';
import CategoryHeader from './CategoryHeader';
import CategoryChild from './CategoryChild';

import { Dropdown } from 'semantic-ui-react'
import { BookIcon, QuestionMarkIcon, ShareIcon, BellIcon, WebGlobeIcon } from '../Icons';

export default class SettingList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header text="MY SETTINGS :" />
        <CategoryHeader text="General">
          <CategoryChild text="Address Book" icon={<BookIcon />} routeTo="/settings/addressbook" />
          <CategoryChild text="Help & Support" icon={<QuestionMarkIcon />} routeTo="/settings/help" />
          <CategoryChild text="Share Tron Wallet" icon={<ShareIcon />} routeTo="/settings/share" />
        </CategoryHeader>
        <CategoryHeader text="Preferences">
          <CategoryChild text="Notifications" icon={<BellIcon />} routeTo="/settings/notifications" />
          <CategoryChild text="Language" subText="English" icon={<WebGlobeIcon />} routeTo="/settings/language" />
        </CategoryHeader>
      </div>
    );
  }
}
