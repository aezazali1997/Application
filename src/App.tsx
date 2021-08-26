import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Config, CALLBACK_PATH } from '@constants';
import { Layout } from './Layout/Layout';

const App = () => {
  const navigate = useNavigate();
  const okta = new OktaAuth(Config);
  const restoreOriginalUri = (_oktaAuth: any, originalUri: any) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin), {
      replace: true,
    });
  };

  return (
    <Security restoreOriginalUri={restoreOriginalUri} oktaAuth={okta}>
      <Route path={CALLBACK_PATH} element={<LoginCallback />} />
      <SecureRoute path="/*" element={<Layout />} />
    </Security>
  );
};

export default App;
