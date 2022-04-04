import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../../presentation/containers/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes></Routes>
      </Layout>
    </Router>
  );
};
export default AppRoutes;
