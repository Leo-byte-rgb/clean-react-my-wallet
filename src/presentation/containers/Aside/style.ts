import styled from "styled-components";

type AsideProps = {
  isOpen: boolean;
};

export const Container = styled.aside<AsideProps>`
  width: ${({ isOpen }) => (isOpen ? "12rem" : "4rem")};
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
  padding: 0.5rem 0;

  background: ${({ theme }) => theme.colors.aside};
  color: ${({ theme }) => theme.colors.white};

  grid-area: ASIDE;

  transition: all 0.2s;

  span {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    font-weight: 500;
  }

  position: relative;
`;

export const RoutesContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;
`;

export const RouteContainer = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  align-items: center;

  gap: 1rem;

  transition: background 0.3s;
  &:hover {
    background: ${({ theme }) => `${theme.colors.white}20`};
  }

  cursor: pointer;
`;

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border: 0;
  outline: 0;

  border-radius: 7px;
  background: ${({ theme }) => `${theme.colors.hover}`};
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.primaryBackground};

  position: absolute;
  right: -22px;
  top: 90px;

  width: 32px;
  height: 32px;

  padding-left: 0px;

  border-left: 20px solid ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: 0;

  cursor: pointer;
`;

export const RoundedContainer = styled.div`
  width: 26px;
  height: 26px;

  border-radius: 100%;

  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
`;

export const Profile = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 100%;
`;
