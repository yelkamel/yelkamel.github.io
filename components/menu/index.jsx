import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Fullscreen from 'components/fullscreen';
import Wrapper from 'components/wrapper';
import { IndexLink, Link } from 'react-router';

import styles from './styles.module.css';

export default class Menu extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onNavClick: PropTypes.func,
  };

  render() {
    const linkProps = {
      onClick: this.props.onNavClick,
      activeClassName: styles.active,
    };
/*
<li className={styles.item}>
  <IndexLink {...linkProps} to={prefixLink('/')}>Layouceferie ?</IndexLink>
</li>
*/
    return (
      <Fullscreen className={this.props.active ? styles.menu : styles.disable}>
        <Wrapper>
          <nav>
            <ul>

              <li className={styles.item}>
                <Link {...linkProps} to={prefixLink('/work/')}>Les applications</Link>
              </li>
              <li className={styles.item}>
                <Link {...linkProps} to={prefixLink('/about/')}>Le mini résumé</Link>
              </li>
              <li className={styles.item}>
                <Link {...linkProps} to={prefixLink('/contact/')}>Me contacter</Link>
              </li>
            </ul>
          </nav>
        </Wrapper>
      </Fullscreen>
    );
  }
}
