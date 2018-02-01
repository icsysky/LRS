import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { loggedInUserSelector, logout, orgLogout } from 'ui/redux/modules/auth';
import { Map, List } from 'immutable';
import bannerImg from 'ui/static/whiteLogo.png';
import SaveBar from 'ui/containers/SaveBar';
import styles from './topnav.css';

import textCN from '../../../../text/textCN.js';//import the dict file

class TopNav extends Component {
  static propTypes = {
    logout: PropTypes.func,
    orgLogout: PropTypes.func,
    user: PropTypes.instanceOf(Map)
  };

  static defaultProps = {
    user: new Map()
  }

  onClickSwitchOrg = () => {
    this.props.orgLogout();
  }

  onClickSwitchLangurage = () => {
    // if(textCN.languageType == 0)    {
    //   textCN.setLanguageType(1) ;
    // } else{
    //   textCN.setLanguageType(0) ;
    // } 
    
    if(global.navigator.languageType == 0)    {
      global.navigator.languageType =1 ;
    } else{
      global.navigator.languageType =0  ;
    } 
    console.log("languageType : ",global.navigator.languageType);
  }

  onClickGetLangurageType = () => {

    // console.log("language : ",global.navigator.language);
    // global.navigator.languageType = 0;
    console.log("languageType : ",global.navigator.languageType);

  }

  render() {
    const { user } = this.props;
    const organisations = user.get('organisations', new List());
    return (
      <div className={`${styles['topnav-wrapper']}`}>
        <div className={`navbar navbar-fixed-top clearfix ${styles['navbar-topnav']}`} role="navigation">
          <div className="navbar-header">
            <div className={styles['navbar-brand']}>
              <img alt="banner img" src={bannerImg} className={styles.bannerImg} />
            </div>
          </div>
          <div className="container-fluid">
            <div id="navbar" className="nav-icons">
              <a className="pull-right option" title={textCN.getSiteTextById('homeLogOut')} onClick={this.props.logout}><i className="icon ion-log-out" /></a>
              {organisations.size > 0 && <a className="pull-right option" title={textCN.getSiteTextById('saSwitch')} onClick={this.onClickSwitchOrg}><i className="icon ion-arrow-swap" /></a>}
             
              <a className="pull-right option" title="EN/CH" onClick={this.onClickSwitchLangurage}><i className="icon ion-arrow-swap" /></a>
              <a className="pull-right option" title="EN/CH" onClick={this.onClickGetLangurageType}><i className="icon ion-arrow-swap" /></a>
           
            </div>
          </div>
        </div>
        <SaveBar />
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(state => ({
    user: loggedInUserSelector(state),
  }), { logout, orgLogout })
)(TopNav);
