import styled from "styled-components";

type ItemProps = {
  frequency: string;
};

export const Item = styled.div<ItemProps>`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  border-left: 5px solid
    ${({ frequency, theme }) =>
      frequency === "recorrente"
        ? theme.colors.secondaryPurple
        : theme.colors.red};

  padding: 0 1rem;

  background: ${(props) => props.theme.colors.tertiaryBackground};

  transition: all 0.3s;

  &:hover {
    filter: brightness(1.2);
    transform: translateX(0.4rem);
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    color: ${(props) => props.theme.colors.white};
  }
  small {
    color: ${(props) => props.theme.colors.gainsboro};
  }
`;

export const Value = styled.h2`
  color: ${(props) => props.theme.colors.white};
`;
