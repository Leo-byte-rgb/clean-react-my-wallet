import React from "react";
import Content from "../Content";
import Aside from "../Aside";
import { Container } from "./style";

const Layout: React.FC = ({ children }) => (
  <Container>
    <Aside />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
