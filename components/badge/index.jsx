import React, { Component, PropTypes } from 'react';

import Icon from '../icon';
import ReactAppStoreBadge from 'react-app-store-badge';
import styles from './styles.module.css';


export default class Badge extends Component {
  static propTypes = {
    googlePlayUrl: PropTypes.string,
    appleStoreUrl: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
        <div className={styles.badgeStyle}>
          <ReactAppStoreBadge
            textHeading="Disponible sur"
            textStoreName="AppleStore"
            icon={<Icon name="applestore" />}
            url={this.props.appleStoreUrl}
          />

          <ReactAppStoreBadge
            textHeading="Disponible sur"
            textStoreName="GooglePlay"
            icon={<Icon name="googleplay" />}
            url={this.props.googlePlayUrl}
          />
      </div>
    );
  }
}
