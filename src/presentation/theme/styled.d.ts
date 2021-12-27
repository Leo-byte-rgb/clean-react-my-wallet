import "styled-components";
import theme from "./theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primaryBackground: string;
      secondaryBackground: string;
      tertiaryBackground: string;
      white: string;
      green: string;
      blue: string;
      purple: string;
      secondaryPurple: string;
      red: string;
      gainsboro: string;
      contrastText: string;
    };
  }
}
