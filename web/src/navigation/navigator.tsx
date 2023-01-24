import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../screens/login';
import { Payment } from '../screens/payment';
import ProtectedRoute from './protectedRoute'
import { ROUTES } from './constants';
import { Dashboard } from '../screens/dashboard';
import { Project } from '../screens/project/form';
import { Application } from '../screens/application/home';
import { Terms, Privacy } from '../screens/terms';
import Projects from '../screens/projects/projects';
import { Groups } from '../screens/groups';
import { NotFound } from '../screens/notfound';

const Navigator = (): React.ReactElement => {

  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path={ROUTES.HOME} element={<Groups />} />
      
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
        <Route path={`${ROUTES.RISKS}/:idProject`} element={<Dashboard />} />
        <Route path={`${ROUTES.RISKS}/:idProject/:idAplication`} element={<Dashboard />} />
        <Route path={`${ROUTES.RISKS}/:idProject/:idAplication/:idComponent`} element={<Dashboard />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />}/>
        <Route path={`${ROUTES.PROJECT}/:id`} element={<Project />} />
        <Route path={`${ROUTES.APPLICATION}/:id`} element={<Application />} />
      </Route>
      */}


      {/* FOR NO MATCHING ROUTES */}
      <Route path={ROUTES.WILDCARD} element={<NotFound />} />
    </Routes>
  );
};

export { Navigator };