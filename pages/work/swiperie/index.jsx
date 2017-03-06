import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';
import Badge from 'components/badge';

import coverImage from 'components/project/img/Swiperie.jpg';

const images = [
  {
    src: require('./img/collection-listing.jpg'),
    description: 'Life with Bird collection listing',
  },
  {
    src: require('./img/home.jpg'),
    description: 'Life with Bird home',
  },
  {
    src: require('./img/product-listing.jpg'),
    description: 'Life with Bird product listing',
  },
  {
    src: require('./img/product.jpg'),
    description: 'Life with Bird product',
  },
  {
    src: require('./img/store-listing.jpg'),
    description: 'Life with Bird store listing',
  },
];

const mobileImages = [
  {
    src: require('./img/right.png'),
    description: 'Life with Bird product listing mobile',
  },
  {
    src: require('./img/globale.png'),
    description: 'Life with Bird product mobile',
  },
  {
    src: require('./img/rank.png'),
    description: 'Life with Bird cart mobile',
  },
];

export default class Swiperie extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'swiperie');

    const image = (
      <img src={coverImage} alt="Cover" />
    );

    const iphone = (
      <Iphone invert>
        <Carousel images={mobileImages} />
      </Iphone>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} media={image} />
        <ProjectDescription media={iphone}>
          <h3>Qu’est-ce que c’est ?</h3>
          <p>L'application permet de swiper entre différentes cartes contenant les tweets de vos candidats préférés. Ensuite un classement est généré avec des statistiques détaillées.</p>
          <p>Les tweets sont les paroles directes des candidats sans interprétation médiatique. Et puis vous pouvez même swipez dans le Métro ! l'application est disponible même sans connexion Internet.</p>

          <h3>Mais est-ce que cela va m'interesser ?</h3>
          <p>C'est simple si vous aimez faire des choix et que vous aimez le concret ? C'est que vous êtes surement un roi ou une reine. </p>
          <p>Vous adoré l'ordre, l'organisation et analysé les details. Vous ne rateriez surement pas les prochaines votes aux éléctions </p>
          <p>Si c'est le cas cette application est faite pour vous.</p>

        </ProjectDescription>
        <Wrapper>
          <Badge
            googlePlayUrl="https://play.google.com/store/apps/details?id=com.swipolitique"
            appleStoreUrl="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1207978654&mt=8" />
        </Wrapper>
      </ProjectPage>
    );
  }
}
//          <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink>

/*
<Macbook>
  <Carousel images={images} />
</Macbook>
*/
