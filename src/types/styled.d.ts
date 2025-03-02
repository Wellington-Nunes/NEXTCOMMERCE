import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary_default: string;
      primary_contast: string;
      success: string;
      alert: string;
      danger: string;
      primary_text: string;
      secondary_text: string;
      background_deep_00: string;
      background_deep_01: string;
      background_deep_02: string;
      background_deep_03: string;
      background_deep_04: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      ultraWide;
    };
  }
}
