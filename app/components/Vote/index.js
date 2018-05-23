import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filter, sortBy } from 'lodash';

import { loadRepresentatives } from '../../actions/representatives';
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';
import Header from '../ContentPrimaryHeader';
import Vote from './Vote';

import styles from './VoteList.css';

class VoteList extends Component {
  componentDidMount() {
    this.props.loadRepresentatives();
  }

  renderRepresentatives() {
    let { representatives, searchString } = this.props;
    if (representatives.length === 0) {
      return (
        <div>
          <h1>NOTHING HERE</h1>
        </div>
      );
    }

    representatives = filter(representatives, w => w.url.toUpperCase().indexOf(searchString) !== -1);
    representatives = sortBy(representatives, w => w.url);

    return (
      <div className={styles.votesContainer}>
        {
          representatives.map((rep, index) =>
            <Vote
              key={index}
              voteLabel={index + 1}
              voteTitle={rep.voteTitle}
              lastBlock={rep.lastBlock}
              blocksProduced={rep.blocksProduced}
              blocksMissed={rep.blocksMissed}
            />)
        }
      </div>
    )
  }

  render() {

    let { representatives } = this.props;

    return (
      <div className={styles.container}>
        <Header className={styles.header} text="REPRESENTATIVE LISTING :" />
        {this.renderRepresentatives()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    representatives: state.network.representatives,
    searchString: state.app.searchString,
  };
}

const mapDispatchToProps = {
  loadRepresentatives,
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteList);
