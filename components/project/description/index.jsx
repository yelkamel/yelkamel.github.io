import React, { Component, PropTypes } from 'react';

import Wrapper from 'components/wrapper';
import Badge from 'components/badge';

import styles from './styles.module.css';

export default class ProjectDescription extends Component {
  static propTypes = {
    children: PropTypes.node,
    media: PropTypes.node,
    appleUrl:PropTypes.string,
    appleGoogle:PropTypes.string,
  };

  render() {
    const { children, media } = this.props;

    return (
      <Wrapper className={styles.content}>
        <div className={styles.media}>
          {media}
        </div>
        <div className={styles.badge}>
          <Badge
            googlePlayUrl={this.props.googleUrl}
            appleStoreUrl={this.props.appleUrl} />
        </div>
        <div className={styles.information}>
          {children}
        </div>
      </Wrapper>
    );
  }
}
