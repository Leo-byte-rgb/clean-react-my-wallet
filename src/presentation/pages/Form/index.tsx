import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  HttpGetClient,
  HttpPostClient,
  HttpUpdateClient,
} from "../../../data/protocols/http";
import { Header, Title, FormUI, InputContainer, Footer, Flex } from "./styled";
import { INITIAL_STATE, frequencyOptions, typesOption } from "./static";
import {
  saveRecord,
  findRecord,
  updateRecord,
} from "../../../data/store/entries-and-expenses/actions";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

type Event = ChangeEvent<
  HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
>;

interface IFormProps {
  httpPostClient: HttpPostClient;
  httpUpdateClient: HttpUpdateClient;
  httpGetClient: HttpGetClient;
}

const Form = ({
  httpPostClient,
  httpGetClient,
  httpUpdateClient,
}: IFormProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loading = useSelector(({ all }) => all.loading);
  const record = useSelector(({ all }) => all.record);

  const title = id ? "Editar" : "Cadastrar";
  const buttonText = id ? "editar" : "cadastrar";

  const [values, setValues] = useState(INITIAL_STATE);

  const handleInputValues = (event: Event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const submitValues = (event: FormEvent) => {
    event.preventDefault();
    if (id) {
      dispatch(updateRecord({ httpUpdateClient, id, body: values }));
    } else {
      dispatch(saveRecord({ httpPostClient, body: values }));
    }
  };

  const handleWithDefaultValues = useCallback(() => {
    const amount = record?.amount ? String(record.amount) : "";
    const createdAt = record?.createdAt ? String(record.createdAt) : "";
    const frequency = record?.frequency ? record.frequency : "";
    const name = record?.name ? record.name : "";
    const type = record?.type ? record.type : "";
    const description = record?.description ? record.description : "";

    setValues((v) => ({ ...v, amount }));
    setValues((v) => ({ ...v, createdAt }));
    setValues((v) => ({ ...v, frequency }));
    setValues((v) => ({ ...v, name }));
    setValues((v) => ({ ...v, type }));
    setValues((v) => ({ ...v, description }));
  }, [record]);

  useEffect(() => {
    if (id) {
      dispatch(findRecord({ httpGetClient, id }));
    }
  }, [dispatch, httpGetClient, id]);

  useEffect(() => {
    handleWithDefaultValues();
  }, [handleWithDefaultValues, record]);

  return (
    <>
      <Header>
        <Title>{title}</Title>
      </Header>
      <FormUI onSubmit={submitValues}>
        <InputContainer>
          <Input
            label="Título"
            name="name"
            onChange={handleInputValues}
            value={values.name}
          />
        </InputContainer>
        <InputContainer>
          <Select
            label="Tipo"
            options={typesOption}
            name="type"
            onChange={handleInputValues}
            value={values.type}
          />
          <Input
            label="Data"
            type="date"
            name="createdAt"
            onChange={handleInputValues}
            value={values.createdAt}
          />
          <Select
            label="Frequência"
            options={frequencyOptions}
            name="frequency"
            onChange={handleInputValues}
            value={values.frequency}
          />
          <Input
            label="Valor"
            type="number"
            name="amount"
            onChange={handleInputValues}
            value={values.amount}
          />
        </InputContainer>
        <InputContainer>
          <TextArea
            label="Descrição"
            name="description"
            onChange={handleInputValues}
            value={values.description}
          />
        </InputContainer>
        <Footer>
          <div></div>
          <Flex>
            <Button
              text="voltar"
              color="warning"
              onClick={() => navigate("/")}
              disabled={loading}
            />
            <Button text={buttonText} type="submit" isLoading={loading} />
          </Flex>
        </Footer>
      </FormUI>
    </>
  );
};

export default Form;
