import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
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
        <ProjectDescription
          media={iphone}
          appleUrl={project.appleUrl}
          googleUrl={project.googleUrl}
          >
          <h3>Qu’est-ce que c’est ?</h3>
          <p>Sans rentrer dans les détails de la science comportementale, les différences entre quelqu'un d'influent ou de populaire ne sont pas innées ou liées à la fortune mais plutôt par certains comportements.<br/>
          Ces comportements sont expliqués dans Socially Fox et défini comme des astuces sociales sont inspirées de coachs et livres américains.
          </p>
          <p>Par exemple, dans Socially Fox on commence par y expliquer comment un simple hochement de tête peut influencer votre interlocuteur et l'on progresse vers des astuces plus complexes comme la communication narrative. </p>
          <h3>Mais est-ce que cela va m'intéresser ?</h3>
          <p>Aimez-vous être entouré de gens ? Aimez-vous qu'on vous accepte vos demandes ? <br/> si oui, cette application est faite pour vous.</p>
        </ProjectDescription>
      </ProjectPage>
    );
  }
}
/*
<Macbook>
  <Carousel images={images} />
</Macbook>
*/
