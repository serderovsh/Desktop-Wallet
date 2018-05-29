/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Navbar from './Navbar/';
import Sidebar from './Sidebar';
import Main from './Main';

import { languages } from '../translations';
import { setLanguage } from '../actions/app';
import { initFromStorage } from '../actions/wallet';
// Styles
import styles from '../components/ContentMain.css';

class App extends React.Component {
  componentDidMount() {
    let language = 'en';
    this.props.setLanguage(language);
    this.props.initFromStorage(this.props);
  }
  render() {
    let { activeLanguage } = this.props;
    return (
        <div className="interface">
          <Navbar />
          <div className={styles.container}>
            <Sidebar />
            <Main />
          </div>
        </div>
    );
  }
}


export default withRouter(connect(
  state => ({
    wallet: state.wallet,
    activeLanguage: state.app.activeLanguage,
    availableLanguages: state.app.availableLanguages
  }),
  dispatch => ({
    initFromStorage: (props) => {
      dispatch(initFromStorage(props, dispatch));
    },
    setLanguage: (props) => {
      dispatch(setLanguage(props, dispatch));
    }
  })
)(App));

