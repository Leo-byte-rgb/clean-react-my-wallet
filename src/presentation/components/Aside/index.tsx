import React from "react";
import { Link } from "react-router-dom";

import { AsideUI, Header, Box, LinkList } from "./style";
import dolar from "../../assets/dolar.svg";
import dashboard from "../../assets/dashboard.svg";
import carteira from "../../assets/Vector.svg";
import entrada from "../../assets/entradas.svg";
import saida from "../../assets/saidas.svg";
import sair from "../../assets/sair.svg";

const Aside = () => (
  <AsideUI>
    <Header>
      <Box>
        <img src={dolar} alt="dolar" />
      </Box>
      <h2>My Wallet</h2>
    </Header>
    <LinkList>
      <Link to="/">
        <img src={dashboard} alt="" />
        Dashboard
      </Link>
      <Link to="/">
        <img src={carteira} alt="" />
        Novo Registro
      </Link>
      <Link to="/">
        <img src={entrada} alt="" />
        Entradas
      </Link>
      <Link to="/">
        <img src={saida} alt="" />
        Saídas
      </Link>
      <Link to="/">
        <img src={sair} alt="" />
        Sair
      </Link>
    </LinkList>
  </AsideUI>
);

export default React.memo(Aside);
