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
import PrivateRoute from 'components/PrivateRoute';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import {Container} from '../../components/UI';

export default function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login/:type" component={LoginPage} />
        <Route exact path="/signup/:type" component={SignupPage} />
        <PrivateRoute
          exact 
          path="/profile"
          component={ProfilePage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
