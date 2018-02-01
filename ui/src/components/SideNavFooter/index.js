import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './sidenavfooter.css';

import textCN from '../../../../text/textCN.js';//import the dict file

const component = () => (
  <div className={styles['sidenav-footer']}>
   {/* Icsy 
    Changed the url and owner.  But what should it show actually ? */}
    <a href="http://www.starc.com.cn">Help centre</a>
    <p />
    <div>Powered by : </div>   
    <a href="http://www.starc.com.cn" target="_blank" rel="noopener noreferrer">{textCN.getSiteTextById('projectOwnerName')}</a> 
  </div>
);

export default withStyles(styles)(component);
