/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from '../routes';

import Navbar from './Navbar/';

// Styles
import styles from '../components/ContentMain.css';

class App extends React.Component {
  render() {
    return (
      <div className="interface">
        <Navbar />
        <div className={styles.container}>
          <div className={styles.contentPrimary}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          <div className={styles.contentSecondary}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
