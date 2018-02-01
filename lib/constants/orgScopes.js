import { ALL } from 'lib/constants/scopes';

export const VIEW_PUBLIC_DASHBOARDS = 'org/public/dashboard/view';
export const EDIT_PUBLIC_DASHBOARDS = 'org/public/dashboard/edit';
export const VIEW_ALL_DASHBOARDS = 'org/all/dashboard/view';
export const EDIT_ALL_DASHBOARDS = 'org/all/dashboard/edit';

export const VIEW_PUBLIC_STATEMENTFORWARDING = 'org/public/statementForwarding/view';
export const EDIT_PUBLIC_STATEMENTFORWARDING = 'org/public/statementForwarding/edit';
export const VIEW_ALL_STATEMENTFORWARDING = 'org/all/statementForwarding/view';
export const EDIT_ALL_STATEMENTFORWARDING = 'org/all/statementForwarding/edit';

export const VIEW_PUBLIC_VISUALISATIONS = 'org/public/visualisation/view';
export const EDIT_PUBLIC_VISUALISATIONS = 'org/public/visualisation/edit';
export const VIEW_ALL_VISUALISATIONS = 'org/all/visualisation/view';
export const EDIT_ALL_VISUALISATIONS = 'org/all/visualisation/edit';

export const VIEW_PUBLIC_JOURNEYS = 'org/public/journey/view';
export const EDIT_PUBLIC_JOURNEYS = 'org/public/journey/edit';
export const VIEW_ALL_JOURNEYS = 'org/all/journey/view';
export const EDIT_ALL_JOURNEYS = 'org/all/journey/edit';

export const VIEW_PUBLIC_QUERIES = 'org/public/query/view';
export const EDIT_PUBLIC_QUERIES = 'org/public/query/edit';
export const VIEW_ALL_QUERIES = 'org/all/query/view';
export const EDIT_ALL_QUERIES = 'org/all/query/edit';

export const VIEW_PUBLIC_EXPORTS = 'org/public/export/view';
export const EDIT_PUBLIC_EXPORTS = 'org/public/export/edit';
export const VIEW_ALL_EXPORTS = 'org/all/export/view';
export const EDIT_ALL_EXPORTS = 'org/all/export/edit';

export const VIEW_PUBLIC_DOWNLOADS = 'org/public/download/view';
export const EDIT_PUBLIC_DOWNLOADS = 'org/public/download/edit';
export const VIEW_ALL_DOWNLOADS = 'org/all/download/view';
export const EDIT_ALL_DOWNLOADS = 'org/all/download/edit';

export const MANAGE_ALL_PERSONAS = 'org/all/persona/manage';
export const MANAGE_ALL_STORES = 'org/all/store/manage';
export const MANAGE_ALL_USERS = 'org/all/user/manage';
export const MANAGE_ALL_CLIENTS = 'org/all/client/manage';
export const MANAGE_ALL_ROLES = 'org/all/role/manage';
export const MANAGE_ALL_ORGANISATIONS = 'org/all/organisation/manage';

import textCN from '../../text/textCN.js';//import the dict file

export const roleGroupNames = {
  'org/public/dashboard':  textCN.getSiteTextById('scopesDashboardsPublic'),
  'org/all/dashboard':  textCN.getSiteTextById('scopesDashboardsAll'),

  'org/public/statementForwarding': textCN.getSiteTextById('scopesStatementForwardsPublic'),
  'org/all/statementForwarding': textCN.getSiteTextById('scopesStatementForwardsAll'),

  'org/public/visualisation': textCN.getSiteTextById('scopesVisualisationsPublic'),
  'org/all/visualisation': textCN.getSiteTextById('scopesVisualisationsAll'),

  'org/public/journey': textCN.getSiteTextById('scopesJourneysPublic'),
  'org/all/journey': textCN.getSiteTextById('scopesJourneysAall'),

  'org/public/query': textCN.getSiteTextById('scopesSavedQueriesPublic'),
  'org/all/query': textCN.getSiteTextById('scopesSavedQueriesAll'),

  'org/public/export': textCN.getSiteTextById('scopesSavedExportsPublic'),
  'org/all/export': textCN.getSiteTextById('scopesSavedExportsAll'),

  'org/public/download': textCN.getSiteTextById('scopesExportDownloadsPublic'),
  'org/all/download': textCN.getSiteTextById('scopesExportDownloadsAll'),

  'org/all/persona': textCN.getSiteTextById('scopesPersonas'),
  'org/all/store':  textCN.getSiteTextById('scopesStores'),
  'org/all/user': textCN.getSiteTextById('scopesUsers'),
  'org/all/client': textCN.getSiteTextById('scopesClients'),
  'org/all/role': textCN.getSiteTextById('scopesRoles'),
  'org/all/organisation': textCN.getSiteTextById('scopesOrganisations'),
};

const scopes = [
  ALL,
  VIEW_PUBLIC_DASHBOARDS,
  EDIT_PUBLIC_DASHBOARDS,
  VIEW_ALL_DASHBOARDS,
  EDIT_ALL_DASHBOARDS,
  VIEW_PUBLIC_VISUALISATIONS,
  EDIT_PUBLIC_VISUALISATIONS,
  VIEW_ALL_VISUALISATIONS,
  EDIT_ALL_VISUALISATIONS,
  VIEW_PUBLIC_JOURNEYS,
  EDIT_PUBLIC_JOURNEYS,
  VIEW_ALL_JOURNEYS,
  EDIT_ALL_JOURNEYS,

  VIEW_PUBLIC_STATEMENTFORWARDING,
  EDIT_PUBLIC_STATEMENTFORWARDING,
  VIEW_ALL_STATEMENTFORWARDING,
  EDIT_ALL_STATEMENTFORWARDING,

  VIEW_ALL_QUERIES,
  EDIT_ALL_QUERIES,
  VIEW_ALL_EXPORTS,
  EDIT_ALL_EXPORTS,
  VIEW_ALL_DOWNLOADS,
  EDIT_ALL_DOWNLOADS,
  MANAGE_ALL_PERSONAS,
  MANAGE_ALL_STORES,
  MANAGE_ALL_USERS,
  MANAGE_ALL_CLIENTS,
  MANAGE_ALL_ROLES,
  // MANAGE_ALL_ORGANISATIONS,
];

export default scopes;
