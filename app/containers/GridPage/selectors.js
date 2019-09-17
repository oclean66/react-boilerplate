import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gridPage state domain
 */

const selectGridPageDomain = state => state.gridPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GridPage
 */

const makeSelectGridPage = () =>
  createSelector(
    selectGridPageDomain,
    substate => substate,
  );

export default makeSelectGridPage;
export { selectGridPageDomain };
