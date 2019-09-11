import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the whyPage state domain
 */

const selectWhyPageDomain = state => state.whyPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WhyPage
 */

const makeSelectWhyPage = () =>
  createSelector(
    selectWhyPageDomain,
    substate => substate,
  );

export default makeSelectWhyPage;
export { selectWhyPageDomain };
