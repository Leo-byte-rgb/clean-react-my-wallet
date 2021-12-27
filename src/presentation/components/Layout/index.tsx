import React from "react";
import Content from "../Content";
import Header from "../Header";
import Aside from "../Aside";
import { Container } from "./style";

const Layout: React.FC = ({ children }) => (
  <Container>
    <Aside />
    <Header />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
