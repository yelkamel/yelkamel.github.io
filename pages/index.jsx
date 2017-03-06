import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Fullscreen from 'components/fullscreen';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Fullscreen className={styles.intro} firstItem>
          <Wrapper>
            <h1>
              LaYouCeferie.
              <br />
              <br />
              C'est des applications qui t'aideront sûrement dans ta <Link className={styles.link} to={prefixLink('/work/')}>vie</Link>.
              <br />
              <br />
              Après si tu veux un mini résumé de ma <Link className={styles.link} to={prefixLink('/about/')}>vie</Link>.
              <br />
              <br />
              Sinon on peux se pécho direct <Link className={styles.link} to={prefixLink('/contact/')}>ici</Link>.
            </h1>
          </Wrapper>
        </Fullscreen>
      </div>
    );
  }
}
