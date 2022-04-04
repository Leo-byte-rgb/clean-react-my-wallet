import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAside } from "../../../main/store/theme/actions";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { BsTagFill, BsCurrencyExchange } from "react-icons/bs";
import { RiDashboardFill, RiMenuFill } from "react-icons/ri";
import {
  Container,
  RoutesContainer,
  RouteContainer,
  ButtonIcon,
  Profile,
  ToggleButton,
  RoundedContainer,
} from "./style";

const Aside = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(({ theme }) => theme.isAsideOpened);

  const handleAsideState = () => dispatch(handleAside());
  return (
    <Container isOpen={isOpen}>
      <ToggleButton onClick={handleAsideState}>
        <RoundedContainer>
          <RiMenuFill />
        </RoundedContainer>
      </ToggleButton>

      <RouteContainer>
        <ButtonIcon>
          <FaHome />
        </ButtonIcon>
        <span>Início</span>
      </RouteContainer>

      <RoutesContainer>
        <RouteContainer>
          <ButtonIcon>
            <RiDashboardFill />
          </ButtonIcon>
          <span>Dashboard</span>
        </RouteContainer>
        <RouteContainer>
          <ButtonIcon>
            <FaBriefcase />
          </ButtonIcon>
          <span>Orçamentos</span>
        </RouteContainer>
        <RouteContainer>
          <ButtonIcon>
            <BsCurrencyExchange />
          </ButtonIcon>
          <span>Faturas</span>
        </RouteContainer>
        <RouteContainer>
          <ButtonIcon>
            <BsTagFill />
          </ButtonIcon>
          <span>Vendas</span>
        </RouteContainer>
      </RoutesContainer>

      <Profile
        alt="your profile picture"
        src="https://pbs.twimg.com/profile_images/1483802320710381572/186lTEuN_400x400.jpg"
      />
    </Container>
  );
};

export default React.memo(Aside);
