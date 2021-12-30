import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './data/store';
import theme from './presentation/theme/theme';
import GlobalStyle from './presentation/theme/globalStyle';
import Routes from './main/routes';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

reportWebVitals(console.log);
