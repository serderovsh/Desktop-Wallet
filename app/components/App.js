/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { connect } from 'react-redux';
//import { IntlProvider } from 'react-intl';

import Navbar from './Navbar/';
import Sidebar from './Sidebar';
import Main from './Main';

import { languages } from '../translations';
import { setLanguage } from '../actions/app';
// Styles
import styles from '../components/ContentMain.css';

class App extends React.Component {
  // componentDidMount() {
  //   let language = 'en';
  //   this.props.setLanguage(language);
  // }
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

// function mapStateToProps(state) {
//   return {
//     activeLanguage: state.app.activeLanguage,
//     availableLanguages: state.app.availableLanguages,
//   };
// }
// const mapDispatchToProps = {
//   setLanguage
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
