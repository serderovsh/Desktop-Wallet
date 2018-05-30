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
import { loadTokens } from '../actions/tokens';
import { loadWitnesses } from '../actions/witnesses';
import {loadStorage} from "../actions/storage";
import {setFiatPrice} from "../actions/currency";
import {CURRENCY} from "../actions/currency";
// Styles
import styles from '../components/ContentMain.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            websocket : null,
            userid: this.guid()
        }
    }

    websocketOnMessage(event){
        try{
            let msg = JSON.parse(event.data);
            if(msg.cmd == "ADDRESS_EVENT"){
                console.log(`received address change notification: `);
            }else if (msg.symbol == 'TRX' && msg['USD'].price){
                this.props.setFiatPrice(CURRENCY.USD, msg['USD'].price);
            }else{
                console.log(`unknown message: `)
            }
        }catch (e) {
            //console.log(e);
        }
    }

    websocketOnOpen(event){
        this.addWebsocketAlert("27d3byPxZXKQWfXX7sJvemJJuv5M65F3vjS");
    }

    checkWebsocket(){
        if(this.state.websocket !== null && this.state.websocket.readyState === WebSocket.OPEN){
            //do nothing, we're connected
        }else if(this.state.websocket && this.state.websocket.readyState === WebSocket.CLOSED){
            this.connectWebsocket();
        }
        setTimeout(this.checkWebsocket.bind(this), 5000);
    }

    addWebsocketAlert(address){
        if (this.state.websocket.readyState === WebSocket.OPEN) {
            this.state.websocket.send(JSON.stringify({
                cmd: 'START_ALERT',
                address : address,
                userid : this.state.userid
            }));
        }
    }

    connectWebsocket(){
        console.log('connecting websocket');
        this.state.websocket = new WebSocket("ws://ws.tron.watch:8089");
        this.state.websocket.onopen = this.websocketOnOpen.bind(this);
        this.state.websocket.onmessage = this.websocketOnMessage.bind(this);
    }

  componentDidMount() {
    let language = 'en';
    this.props.setLanguage(language);
    this.props.initFromStorage(this.props);
    this.props.loadTokens();
    this.props.loadWitnesses();
    this.props.loadStorage(this.props);
    this.connectWebsocket();
    setTimeout(this.checkWebsocket.bind(this), 0);
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
          </div>
        </div>
      </IntlProvider>
    );
  }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}

export default withRouter(connect(
  state => ({
    currency:state.currency,
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
    setFiatPrice(currency, price){
        dispatch(setFiatPrice(currency, price));
    }

  })
)(App));

