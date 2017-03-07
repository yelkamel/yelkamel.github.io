import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

export default class About extends Component {
  render() {
    return (
      <ContentPage>
        <Meta title="À Propos" />
        <Wrapper>
          <div className={styles.intro}>
            <h1>Qui suis-je ?</h1>
            <p>Je suis en ce moment auto-entrepreneur à Paris. Diplomé en école d'ingénieur informatique à <OutboundLink to="http://www.epita.fr">l'EPITA</OutboundLink>, apres 3 ans d'expériences professionnel.</p>
            <p>J'ai décidé d'actualisé mes connaissances et de me lancer quelques petits défis techniques (du challenge !).</p>
            <p>Après avoir fini mes petits projet personnel qui me tenais à coeurs,
              je suis maintenant en freelance travaillant pour moi et pour les autres.
              Si vous avez un projet en tete, <Link to={prefixLink('/contact/')}>n'hésité pas a me contacter</Link>.</p>

            <h2>Qu'est-ce que je veux ?</h2>
            <p>J'aimerais intégré une start-up avec une idée inovante et donc la principal technologies utilisé est le <OutboundLink to="https://facebook.github.io/react/">React</OutboundLink>.</p>
            <p>Dans l'idée, j'aimerais aussi pouvoir proposer mes idées que ce soit du point de vue technologique que fonctionnelle.</p>


            <h2>Que disent les gens de moi ?</h2>

            <h4>Monsieurs TOTO</h4>
            <p>“Youcef est quelqu'un de très dynamique qui sait mettre une bonne ambiance dans une équipes.”</p>

            <h4>Monsieurs TATA</h4>
            <p>“Toujours envie de se surpasser, Youcef ne lache pas l'affaire tant qu'il est sur de ne pas pouvoir y arriver.”</p>
          </div>
        </Wrapper>
      </ContentPage>
    );
  }
}
