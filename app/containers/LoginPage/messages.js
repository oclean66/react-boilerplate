/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginPage container! {type}',
  },
 enterpreneurIntro: {
    id: `${scope}.enterpreneurIntro`,
    defaultMessage: 'Connect With Investors Upload Content Sell Subscriptions & Content make Tons Of Money',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot Password?',
  }, 
  why: {
    id: `${scope}.why`,
    defaultMessage: 'Why Us?',
  }, 
});
