import React, {Component} from 'react';

import Button from "nukleus/dist/components/Button";

import styles from './about.scss';

class About extends Component {
  render () {
    return (
      <div className={styles.color}>
        About page
        <Button text="hi" />
      </div>
    );
  }
}

export default About;
