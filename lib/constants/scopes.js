export const ALL = 'all';

export const VIEW_SHAREABLE_DASHBOARD = 'dashboard/shareable/view';

// UDD
export const STUDENT_APP = 'student_app';
export const TRIBAL_INSIGHT = 'tribal_insight';
export const LAP = 'lap';
export const SSP = 'ssp';
export const OPENDASH = 'opendash';
export const UDD_READ = 'udd/read';

// xAPI
export const XAPI_ALL = 'xapi/all';
export const XAPI_READ = 'xapi/read';
export const XAPI_STATEMENTS_READ = 'statements/read';
export const XAPI_STATEMENTS_WRITE = 'statements/write';
export const XAPI_STATEMENTS_READ_MINE = 'statements/read/mine';
export const XAPI_STATE_ALL = 'state';
export const XAPI_PROFILE_ALL = 'profile';

import textCN from '../../text/textCN.js';//import the dict file

export const XAPI_SCOPES = {
  [XAPI_ALL]: 'All',
  [XAPI_READ]: textCN.getSiteTextById('setClientReadall'),
  [XAPI_STATEMENTS_READ]: textCN.getSiteTextById('setClientReadAllStatements'),
  [XAPI_STATEMENTS_WRITE]:  textCN.getSiteTextById('setClientWriteStatements'),
  [XAPI_STATEMENTS_READ_MINE]: textCN.getSiteTextById('setClientReadMystatements'),
  [XAPI_STATE_ALL]: textCN.getSiteTextById('setClientAccessState'),
  [XAPI_PROFILE_ALL]: textCN.getSiteTextById('setClientAccessProfiles'),
};

export const API_SCOPES = {
  [ALL]: 'All',
};

export const CLIENT_SCOPES = {
  ...API_SCOPES,
  ...XAPI_SCOPES,
};

// USERS
export const SITE_ADMIN = 'site_admin';
export const SITE_SCOPES = {
  [SITE_ADMIN]: 'Site Administrator',
};

// ORGANISATION_USER
export const OBSERVER = 'observer';
export const USER_SCOPES = {
  [ALL]: 'Organisation Administrator',
  [OBSERVER]: 'Organisation Observer',
};
