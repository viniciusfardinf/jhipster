import React from 'react';
import { Route } from 'react-router';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Meta from './meta';
import MetaDetail from './meta-detail';
import MetaUpdate from './meta-update';
import MetaDeleteDialog from './meta-delete-dialog';

const MetaRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Meta />} />
    <Route path="new" element={<MetaUpdate />} />
    <Route path=":id">
      <Route index element={<MetaDetail />} />
      <Route path="edit" element={<MetaUpdate />} />
      <Route path="delete" element={<MetaDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default MetaRoutes;
