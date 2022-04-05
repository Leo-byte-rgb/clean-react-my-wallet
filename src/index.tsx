import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { AsideProvider } from "main/contexts/AsideContext";
import { ToastContainer } from "react-toastify";
import theme from "presentation/theme/theme";
import GlobalStyle from "presentation/theme/globalStyle";
import Routes from "main/routes";
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
      <AsideProvider>
        <Routes />
      </AsideProvider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
