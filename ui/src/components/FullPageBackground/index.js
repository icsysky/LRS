import React, { PropTypes } from 'react';
import logoImg from 'ui/static/logo.png';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { setPropTypes, compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { getAppDataSelector, fetchAppData } from 'ui/redux/modules/app';
import styles from './styles.css';

import textCN from '../../../../text/textCN.js';


const enhance = compose(
  setPropTypes({
    children: PropTypes.node
  }),
  connect(state => ({
    version: getAppDataSelector('version')(state),
  }), { fetchAppData }),
  lifecycle({
    componentWillMount() {
      this.props.fetchAppData({ key: 'version' });
    },
  }),
  withStyles(styles)
);

const versionDisplay = (version) => {
  if (!version.has('tag')) {
    return <p className={styles.version}>{textCN.getSiteTextById('projectVersion')}</p>;
  }
  const tag = version.get('tag');
  const branch = version.get('branch');
  const long = version.get('long');
  const short = version.get('short');

  const longDisplay = `Build: ${branch} @ ${long}`;
  const shortDisplay = `Build: ${branch} @ ${short}`;

  const display = (branch === 'master' || branch === 'HEAD') ? tag : shortDisplay;
  //Icsy 
  //Annotate this row , don't show this message. Does it need to show something else?
  // return <p className={styles.version} title={longDisplay}>{ display }</p>;
  return <p className={styles.version} title={longDisplay}></p>;
};

const FullPageBackground = ({ version, children, width = 600 }) => (
  <div className={styles.background}>
    <div className={styles.centered}>
      {/* <div>{textCN.getSiteTextById('homeTitle')}</div> */}
      <img alt="logo" src={logoImg} className={styles.logoImg} />
      <span className={styles.headline}>{textCN.getSiteTextById('homeTitle')} </span>
      <div className={styles.underline} />
      <div style={{ width }}>
        { children }
      </div>
      <p className={styles.copyright}>&copy; {new Date().getFullYear()}  {textCN.getSiteTextById('projectOwnerName')}</p>
      { versionDisplay(version) }
    </div>
  </div>
);

export default enhance(FullPageBackground);