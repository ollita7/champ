import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../screens/login';
import { Payment } from '../screens/payment';
import ProtectedRoute from './protectedRoute'
import { ROUTES } from './constants';
import { Groups } from '../screens/groups';
import { NotFound } from '../screens/notfound';
import { Qualifying } from '../screens/qualifying';
import { Ranking } from '../screens/ranking';
import { Terms } from '../screens/terms';

const Navigator = (): React.ReactElement => {

  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path={ROUTES.HOME} element={<Groups />} />
      <Route path={ROUTES.QUALIFYINGS} element={<Qualifying />} />
      <Route path={ROUTES.RANKING} element={<Ranking />} />
      <Route path={ROUTES.TERMS} element={<Terms />} />
      {/*
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.PAYMENT} element={<Payment />} />
      <Route path={ROUTES.POLICIES} element={<Privacy />} />
      <Route path={ROUTES.TERMS} element={<Terms />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      */}

      {/* PRIVATE ROUTES 
      <Route path={ROUTES.HOME} element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
        <Route path={ROUTES.HOME} element={<Dashboard />} />
      </Route>
      */}


      {/* FOR NO MATCHING ROUTES */}
      <Route path={ROUTES.WILDCARD} element={<NotFound />} />
    </Routes>
  );
};

export { Navigator };