import React, { Component } from "react";
import styles from "./SettingList.css";
import Header from "../ContentPrimaryHeader";
import CategoryHeader from "./CategoryHeader";
import CategoryChild from "./CategoryChild";
import {
  ShareIcon,
  BellIcon,
  WebGlobeIcon,
  WifiIcon,
  PencilIcon
} from "../Icons";

export default class SettingList extends Component {
  goToSupport = () =>
    require("electron").shell.openExternal("https://support.tron.watch/");
  render() {
    return (
      <div className={styles.container}>
        <Header text="MY SETTINGS :" />
        <CategoryHeader text="General">
          <CategoryChild
            text="Share Tron Wallet"
            icon={<ShareIcon />}
            routeTo="/settings/share"
          />
          {/*<CategoryChild text="Address Book" icon={<BookIcon />} routeTo="/settings/addressbook" />*/}
          <CategoryChild
            text="Feedback"
            icon={<PencilIcon />}
            routeTo="/settings/feedback"
          />
        </CategoryHeader>
        <CategoryHeader text="Preferences">
          <CategoryChild
            text="Notifications"
            icon={<BellIcon />}
            routeTo="/settings/notifications"
          />
          <CategoryChild
            text="Language"
            subText="English"
            icon={<WebGlobeIcon />}
            routeTo="/settings/language"
          />
          <CategoryChild
            text="Node"
            icon={<WifiIcon />}
            routeTo="/settings/node"
          />
        </CategoryHeader>
      </div>
    );
  }
}
