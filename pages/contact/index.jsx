import React, { Component } from 'react';

import ContentPage from 'components/content-page';
import Contact from 'components/contact';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';

export default class _Contact extends Component {
  render() {
    return (
      <ContentPage>
        <Meta title="Contact"
          description="Si tu as un projet qui pourrait m'interessé dont tu aimerais me parler, dis salut et envoie moi un email." />
        <Wrapper>
          <Contact />
        </Wrapper>
      </ContentPage>
    );
  }
}
