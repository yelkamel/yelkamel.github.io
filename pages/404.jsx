import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import gifSrc from './img/rage-quit.gif';

export default class FourOhFour extends Component {
  render() {
    return (
      <ContentPage>
        <Meta title="404" description="Page not found." noIndex />
        <Wrapper>
          <h1>Désolé.</h1>
          <p>Page non trouvé... tu veux voir mes <Link to={prefixLink('/work/')}>projects perso</Link>?</p>
          <img src={gifSrc} alt="Rage quit" />
        </Wrapper>
      </ContentPage>
    );
  }
}
