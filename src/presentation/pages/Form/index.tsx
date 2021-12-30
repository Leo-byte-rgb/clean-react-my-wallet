import React, { ChangeEvent, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HttpPostClient, HttpUpdateClient } from '../../../data/protocols/http';
import { Header, Title, FormUI, InputContainer, Footer, Flex } from './styled';
import { INITIAL_STATE, frequencyOptions, typesOption } from './static';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

type Event = ChangeEvent<
  HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
>;

interface IFormProps {
  httpPostClient: HttpPostClient;
  httpUpdateClient: HttpUpdateClient;
}

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const title = id ? 'Editar' : 'Cadastrar';
  const buttonText = id ? 'editar' : 'cadastrar';

  const [values, setValues] = useState(INITIAL_STATE);

  const handleInputValues = (event: Event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Header>
        <Title>{title}</Title>
      </Header>
      <FormUI>
        <InputContainer>
          <Input label='Título' name='name' onChange={handleInputValues} />
        </InputContainer>
        <InputContainer>
          <Select
            label='Tipo'
            options={typesOption}
            name='type'
            onChange={handleInputValues}
          />
          <Input
            label='Data'
            type='date'
            name='createdAt'
            onChange={handleInputValues}
          />
          <Select
            label='Frequência'
            options={frequencyOptions}
            name='frequency'
            onChange={handleInputValues}
          />
          <Input
            label='Valor'
            type='number'
            name='amount'
            onChange={handleInputValues}
          />
        </InputContainer>
        <InputContainer>
          <TextArea
            label='Descrição'
            name='description'
            onChange={handleInputValues}
          />
        </InputContainer>
      </FormUI>
      <Footer>
        <div></div>
        <Flex>
          <Button text='voltar' color='warning' onClick={() => navigate('/')} />
          <Button text={buttonText} type='submit' />
        </Flex>
      </Footer>
    </>
  );
};

export default Form;
