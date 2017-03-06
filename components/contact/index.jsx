import React, { Component, PropTypes } from 'react';

import Icon from 'components/icon';
import OutboundLink from 'components/outbound-link';

import styles from './styles.module.css';

export default class Contact extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.contact}>
        <h1>{this.props.title || 'J\'aime les messages'}</h1>
        <p className={styles.email}>
          dit salut et écrit ton mail:<br />
        <a href="mailto:yelkamel@gmail.com?subject=Salut%20Youcef!" className={styles.link}>yelkamel@gmail.com</a>
        </p>
      </div>
    );
  }
}
