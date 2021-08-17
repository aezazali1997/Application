import React from 'react';
import { Route, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar/Layout'
import { config, CALLBACK_PATH } from '@constants'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react'
const App = () => {
  const navigate = useNavigate();
  const okta = new OktaAuth(config);
  const restoreOriginalUri = (_oktaAuth: any, originalUri: any) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin), { replace: true })
  }
  return (
    <>
      <Security restoreOriginalUri={restoreOriginalUri} oktaAuth={okta} >
        <Route path={CALLBACK_PATH} element={<LoginCallback />} />
        <SecureRoute path="/*" element={<Sidebar />} />
      </Security>

    </>
  );
}

export default App;
