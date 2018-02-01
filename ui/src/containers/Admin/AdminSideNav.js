import React from 'react';
import Link from 'ui/containers/Link';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SideNavFooter from 'ui/components/SideNavFooter';
import styles from 'ui/containers/SideNav/sidenav.css';
import DEFAULT_LOGO from 'ui/static/logos/default/default.gif';

import textCN from '../../../../text/textCN.js';//import the dict file

const renderLink = (activeClass, routeName, text) => (
  <li>
    <Link routeName={routeName} activeClassName={activeClass}> {text}</Link>
  </li>
);

const component = () => {
  const activeClass = `v-link-active ${styles.vLinkActive}`;
  return (
    <div className={`col-sm-3 col-md-2 ${styles.sidenav}`} >
      <header className={styles.sidenavHeader}>
        <div className={styles.orgAvatar} >
          <img alt="logo" src={DEFAULT_LOGO} />
        </div>
        <div className="media-body">
          <div className={styles.mediaAuthor}>   {textCN.getSiteTextById('saTitle')}  </div>
        </div>
      </header>

      <ul className={`nav ${styles.navSidenav}`}>
        { renderLink(activeClass, 'admin.users',   textCN.getSiteTextById('saUsers')   )}
        { renderLink(activeClass, 'admin.organisations', textCN.getSiteTextById('saOrganisation')     )}
      </ul>
      <footer>
        <SideNavFooter />
      </footer>
    </div>
  );
};

export default withStyles(styles)(component);
