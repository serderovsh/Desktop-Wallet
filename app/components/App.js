/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Navbar from './Navbar/';
import Sidebar from './Sidebar';
import Main from './Main';
import WebsocketContainer from './WebsocketContainer';

import { languages } from '../translations';
import { setLanguage } from '../actions/app';
import { initFromStorage } from '../actions/wallet';
import { loadTokens } from '../actions/tokens';
import { loadWitnesses } from '../actions/witnesses';
import {loadStorage} from "../actions/storage";

import styles from '../components/ContentMain.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
        }
    }

  componentDidMount() {
    let language = 'en';
    this.props.setLanguage(language);
    this.props.initFromStorage(this.props);
    this.props.loadTokens();
    this.props.loadWitnesses();
    this.props.loadStorage(this.props);
  }

  render() {
    let { activeLanguage } = this.props;
    return (
      <IntlProvider
        locale={activeLanguage}
        messages={languages[activeLanguage]}
      >
        <div className="interface">
          <Navbar />
          <div className={styles.container}>
            <Sidebar />
            <Main />
             <WebsocketContainer/>
          </div>
        </div>
      </IntlProvider>
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
    },
    loadWitnesses: (props) => {
      dispatch(loadWitnesses(props, dispatch));
    },
    loadTokens: (props) => {
      dispatch(loadTokens(props, dispatch));
    },
    loadStorage:(props)=>{
        dispatch(loadStorage(props));
    }
  })
)(App));

