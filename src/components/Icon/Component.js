import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';

export default function(props) {
  const {svg, className, size, ...rest} = props;
  const sizeCls = styles[`size${size}`] ? styles[`size${size}`] : styles.size16;
  return (
    <span {...rest} className={classnames(sizeCls, className)} dangerouslySetInnerHTML={{__html: svg}} />
  );
}