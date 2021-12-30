import React from 'react';
import { Container, Flex, Header, Item, Select, Title } from './styled';

const ListSkeleton = () => (
  <Container>
    <Header>
      <Title />
      <Flex>
        <Select />
        <Select />
      </Flex>
    </Header>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </Container>
);

export default ListSkeleton;
