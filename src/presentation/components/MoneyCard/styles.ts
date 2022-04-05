import styled from "styled-components";

export const Container = styled.div`
  width: 33%;
  height: 4rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;

  box-shadow: 10px 0 ${({ theme }) => theme.colors.grey};

  padding: 1rem;
`;

export const Title = styled.h6`
  color: ${({ theme }) => theme.colors.grey};
`;

export const Amount = styled.h1`
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Footer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;
