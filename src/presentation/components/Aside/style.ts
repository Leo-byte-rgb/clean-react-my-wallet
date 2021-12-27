import styled from "styled-components";

export const AsideUI = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background: ${(props) => props.theme.colors.secondaryBackground};

  grid-area: ASIDE;

  border-right: 1px solid ${(props) => props.theme.colors.tertiaryBackground};
`;

export const Header = styled.div`
  height: 70px;
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1rem;

  gap: 10px;

  > h2 {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;

  border-radius: 7px;

  background: ${(props) => props.theme.colors.contrastText};

  > img {
    width: 40px;
    height: 40px;
  }
`;

export const LinkList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 30px;

  margin-top: 2rem;

  > a {
    margin-left: 1.5rem;
    color: ${(props) => props.theme.colors.contrastText};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 500;

    transition: all 0.2s;
    &:hover {
      filter: brightness(1.2);
      transform: translateY(-2px);
    }
  }
`;
