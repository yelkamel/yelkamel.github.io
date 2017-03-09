import React, { Component, PropTypes } from 'react';

import Wrapper from 'components/wrapper';
import Badge from 'components/badge';
import TweenMax from 'gsap'

import styles from './styles.module.css';

export default class ProjectDescription extends Component {
  static propTypes = {
    children: PropTypes.node,
    media: PropTypes.node,
    appleUrl:PropTypes.string,
    appleGoogle:PropTypes.string,
  };
  componentWillUpdate (nextProps, nextState){

  }

  componentDidMount (prevProps, prevState){

  //  TweenMax.to(this.refs.iphoneAnim, 2.5, {ease:Power2.easeOut, x: -500})


  }

  componentWillReceiveProps (nextProps) {

  }

  render() {
    const { children, media } = this.props;

    return (
      <Wrapper className={styles.content}>
        <div onClick={()=> {
            TweenMax.to(this.refs.badgeAnim, 0.8, {scale: 1.4, repeat: 2,yoyo: true})}
          }
          ref="iphoneAnim"
          className={styles.media}>
          {media}
        </div>
        <div ref="badgeAnim" className={styles.badge}>
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
