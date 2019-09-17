/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import WhyPage from 'containers/WhyPage/Loadable';
import PrivateRoute from 'components/PrivateRoute';
import GuestRoute from 'components/GuestRoute';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GridPage from 'containers/GridPage/Loadable';

import GlobalStyle from '../../global-styles';
import { Container } from '../../components/UI';

export default function App() {
  return (
    <Container>
      <Switch>
        <GuestRoute exact path="/" component={HomePage} />
        <GuestRoute exact path="/login/:type" component={LoginPage} />
        <GuestRoute exact path="/signup/:type" component={SignupPage} />
        <GuestRoute
          exact
          path="/forgot-password"
          component={ForgotPasswordPage}
        />
        <GuestRoute exact path="/why/:type" component={WhyPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PrivateRoute exact path="/grid" component={GridPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
