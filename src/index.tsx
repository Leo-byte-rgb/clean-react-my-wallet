import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./main/store";
import theme from "./presentation/theme/theme";
import GlobalStyle from "./presentation/theme/globalStyle";
import Routes from "./main/routes";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

reportWebVitals(console.log);
