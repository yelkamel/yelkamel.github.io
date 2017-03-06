import React, { Component } from 'react';
import Meta from 'components/meta';
import Contact from 'components/contact';
import { ProjectPanel } from 'components/project';
import Wrapper from 'components/wrapper';

import { projects } from 'data/projects.json';

import styles from './styles.module.css';

export default class Work extends Component {
  render() {
    return (
      <div>
        <Meta title="Application Mobile" description="Applications Mobile en React-Native par Youcef EL KAMEL" />

        {projects.map(project => <ProjectPanel project={project} key={project.slug} />)}

        <div className={styles.contact}>
          <Wrapper>
            <Contact title="Ton appli ici ?" />
          </Wrapper>
        </div>
      </div>
    );
  }
}
