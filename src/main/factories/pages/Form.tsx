import React from "react";
import Form from "../../../presentation/pages/Form";
import { HttpClient } from "../../../infra/httpClient";


const FormFactory = () => {
  const httpClient = new HttpClient();

  return (
    <Form
      httpGetClient={httpClient}
      httpPostClient={httpClient}
      httpUpdateClient={httpClient}
    />
  );
};

export default FormFactory;
