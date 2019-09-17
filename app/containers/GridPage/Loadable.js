/**
 *
 * Asynchronously loads the component for GridPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
