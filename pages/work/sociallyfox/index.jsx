import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Badge from 'components/badge';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/SociallyFox.jpg';
/*
const images = [
  {
    src: require('./img/dining.jpg'),
    description: 'SociallyFox dining',
  },
  {
    src: require('./img/home.jpg'),
    description: 'SociallyFox home',
  },
  {
    src: require('./img/services.jpg'),
    description: 'SociallyFox services',
  },
  {
    src: require('./img/store.jpg'),
    description: 'SociallyFox store',
  },
  {
    src: require('./img/whats-on.jpg'),
    description: 'SociallyFox what\'s on',
  },
];
*/
const BadgeGooglePlay = require('./img/SociallyFoxGooglePlay.png');
const BadgeAppleStore = require('./img/SociallyFoxGooglePlay.png');

const mobileImages = [
  {
    src: require('./img/prez.png'),
    description: 'SociallyFox article mobile',
  },
  {
    src: require('./img/note.png'),
    description: 'SociallyFox directions mobile',
  },
  {
    src: require('./img/param.png'),
    description: 'SociallyFox shopping mobile',
  },
  {
    src: require('./img/questionmag.png'),
    description: 'SociallyFox store mobile',
  },
];


export default class SociallyFox extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'sociallyfox');

    const image = (
      <img src={coverImage} alt="Cover" />
    );

    const iphone = (
      <Iphone>
        <Carousel images={mobileImages} />
      </Iphone>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} media={image} />
        <ProjectDescription media={iphone}>
          <h3>Qu’est-ce que c’est ?</h3>
          <p>Sans rentrer dans le details de la sciences comportementales, au faite les differences entre quelqu'un d'influent et populaire ne sont pas innée ou liée à la fortune mais plutot par certain comportement qui aime les autres à les écouters ou bien à les aimers.</p>
          <p>Par exemple, dans Socially Fox on commence par y expliquer comment un simple hochement de tête peut influencer votre interlocuteur et l'on progresse vers des astuces plus complexes comme la communication narrative. </p>
          <h3>Mais est-ce que cela va m'interesser ?</h3>
          <p>Aimez-vous être entourer ? Vous n'aimez pas la solitude ? Cette application vous aidera a améliorié vos relation amicale.</p>
          <p>De plus elle vous donnera une capacité d'adaptation énorme pour pouvoir parler avec n'importe qui !</p>
          <p>Et enfin, certaines techniques de manipulation utilisé par les beaux commerciaux des grand écoles y est aussi expliqué.</p>
        </ProjectDescription>
        <Wrapper>
          <Badge
            googlePlayUrl="https://play.google.com/store/apps/details?id=com.sociallyfox"
            appleStoreUrl="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1207978654&mt=8" />
        </Wrapper>
      </ProjectPage>
    );
  }
}
/*
<Macbook>
  <Carousel images={images} />
</Macbook>
*/
