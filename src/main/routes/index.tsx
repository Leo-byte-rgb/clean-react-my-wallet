import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../../presentation/components/Layout';
import ListFactory from '../factories/pages/List';
import Form from '../factories/pages/Form';

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/list/:type' element={<ListFactory />} />
          <Route path='/new' element={<Form />} />
          <Route path='/update/:id' element={<Form />}/>
        </Routes>
      </Layout>
    </Router>
  );
};
export default AppRoutes;
