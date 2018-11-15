import React from "react";
import Button from "nukleus/dist/components/Button";

import styles from './index.scss';

export default ({children}) => (
  <div className={styles.container}>
    <Button
      type="primary"
      text="test"
    />
    HIII
    {children}
  </div>
);
