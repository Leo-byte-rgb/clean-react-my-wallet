const typesOption = [
  { label: 'Saída', value: 'saída' },
  { label: 'Entrada', value: 'entrada' },
];
const frequencyOptions = [
  { label: 'Recorrente', value: 'recorrente' },
  { label: 'Eventual', value: 'eventual' },
];
const INITIAL_STATE = {
  type: '',
  createdAt: '',
  name: '',
  frequency: '',
  amount: '',
  description: '',
};

export { INITIAL_STATE, frequencyOptions, typesOption };
