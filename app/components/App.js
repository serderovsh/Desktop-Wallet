/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Navbar from './Navbar/';
import Sidebar from './Sidebar';
import Main from './Main';
import WebsocketContainer from './WebsocketContainer';
import PasswordModal from './Content/PasswordModal';

import { languages } from '../translations';
import { setLanguage } from '../actions/app';
import { initFromStorage, decryptPersistent} from '../actions/wallet';
import { loadTokens } from '../actions/tokens';
import { loadWitnesses } from '../actions/witnesses';
import {loadStorage} from "../actions/storage";
import {PopupModal} from './Content/PopupModal';
import {onSetPassword} from "../actions/wallet";

import styles from '../components/ContentMain.css';
import {WALLET_STATE} from "../actions/wallet";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            showEnterPw : false,
            showCreatePw : false,

            userHasEnteredWrongPw : false,
            showResetModal : false
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

  async onEnterPassword(pw){
    let result = await this.props.decryptPersistent(this.props.wallet.persistent_encrypted, pw);
    console.log("result:");
    console.log(result);
    if(result === false){
        console.log("wrong pw");

        this.setState({
            userHasEnteredWrongPw:true
        });
    }else{
        console.log("sup");
        this.setState({
            userHasEnteredWrongPw:false
        });
    }
    console.log(this.state);
  }

  onCreatePassword(pw){
      console.log('onCreatePassword');
      console.log(pw);
      this.props.onSetPassword(this.props,pw);
  }

  onUserPwReset(){
        console.log('user wants to reset');
        this.setState({
            showResetModal:true
        })
  }

  onUserAcceptsReset(){
        this.setState({
            showResetModal:false
        });

        window.localStorage.clear();
        window.location.reload();
  }

  onUserDeclinesReset(){
      this.setState({
            showResetModal:false
      });
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

              <PasswordModal
                  render={this.props.wallet.wallet_state === WALLET_STATE.NEEDS_USER_UNLOCK && !this.state.showResetModal}
                  onPassword={this.onEnterPassword.bind(this)}
                  userHasEnteredWrongPw={this.state.userHasEnteredWrongPw}
                  onUserPwReset={this.onUserPwReset.bind(this)}
              />

              <PasswordModal
                  newPass
                  render={this.props.wallet.wallet_state === WALLET_STATE.NEEDS_USER_PASSWORD}
                  onPassword={this.onCreatePassword.bind(this)}
              />

              <PopupModal
                  confirmation
                  modalVis={this.state.showResetModal}
                  modalText="Are you sure? This will reset TronWatch and delete all data."
                  modalConfirm={this.onUserAcceptsReset.bind(this)}
                  modalDecline={this.onUserDeclinesReset.bind(this)}
              />
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
    },
    decryptPersistent:(persistentEncrypted,password)=>{
        return decryptPersistent(persistentEncrypted, password, dispatch);
    },
    onSetPassword:(props, password)=>{
        dispatch(onSetPassword(props, password));
    }

  })
)(App));

