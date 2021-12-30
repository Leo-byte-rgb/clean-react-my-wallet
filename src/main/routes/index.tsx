import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../../presentation/components/Layout';
import ListFactory from '../factories/pages/List';
import Form from '../../presentation/pages/Form';

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/list/:type' element={<ListFactory />} />
          <Route path='/new' element={<Form />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
